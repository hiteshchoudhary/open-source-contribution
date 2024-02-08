section .data
    listen_sock     equ 3               ; File descriptor for listening socket
    conn_sock       equ 4               ; File descriptor for connection socket
    backlog         equ 5               ; Maximum length to which the queue of pending connections may grow
    buf_size        equ 1024            ; Buffer size for receiving data

    crlf            db 0x0D, 0x0A      ; Carriage return, Line feed
    response        db 'HTTP/1.1 200 OK', crlf
                    db 'Content-Type: text/plain', crlf
                    db '', crlf
                    db 'Hello, World!', crlf
                    db 0               ; Null terminator

section .bss
    addr            resb 16            ; Buffer for storing remote address
    buf             resb buf_size      ; Buffer for receiving data

section .text
    global _start

_start:
    ; Create a socket
    mov eax, 102        ; sys_socketcall syscall number
    mov ebx, 1          ; socketcall: SYS_SOCKET
    mov ecx, 1          ; AF_INET: IPv4 protocol family
    mov edx, 1          ; SOCK_STREAM: TCP socket type
    int 0x80            ; call kernel

    ; Check for errors
    test eax, eax
    js error_handling   ; Jump to error_handling if syscall returned with an error

    mov dword [listen_sock], eax   ; Store the listening socket file descriptor

    ; Bind the socket to an address and port
    ; (Assuming binding to port 8080 and any available address)
    mov eax, 102        ; sys_socketcall syscall number
    mov ebx, 2          ; socketcall: SYS_BIND
    mov ecx, dword [listen_sock]  ; Socket file descriptor
    lea edx, [addr]     ; Pointer to the sockaddr_in structure
    mov esi, 16         ; Size of the sockaddr_in structure
    int 0x80            ; call kernel

    ; Check for errors
    test eax, eax
    js error_handling   ; Jump to error_handling if syscall returned with an error

    ; Listen for incoming connections
    mov eax, 106        ; sys_socketcall syscall number
    mov ebx, 4          ; socketcall: SYS_LISTEN
    mov ecx, dword [listen_sock]  ; Socket file descriptor
    mov edx, backlog    ; Maximum length to which the queue of pending connections may grow
    int 0x80            ; call kernel

    ; Check for errors
    test eax, eax
    js error_handling   ; Jump to error_handling if syscall returned with an error

accept_loop:
    ; Accept incoming connections
    mov eax, 102        ; sys_socketcall syscall number
    mov ebx, 5          ; socketcall: SYS_ACCEPT
    mov ecx, dword [listen_sock]  ; Socket file descriptor
    lea edx, [addr]     ; Pointer to the sockaddr_in structure to store the remote address
    lea esi, [conn_sock] ; Pointer to store the new connection socket file descriptor
    mov edi, 16         ; Size of the sockaddr_in structure
    int 0x80            ; call kernel

    ; Check for errors
    test eax, eax
    js error_handling   ; Jump to error_handling if syscall returned with an error

    ; Read data from the client
    mov eax, 3          ; sys_read syscall number
    mov ebx, dword [conn_sock]  ; Connection socket file descriptor
    lea ecx, [buf]      ; Buffer to store received data
    mov edx, buf_size   ; Maximum number of bytes to read
    int 0x80            ; call kernel

    ; Check for errors
    test eax, eax
    js error_handling   ; Jump to error_handling if syscall returned with an error

    ; Send the response back to the client
    mov eax, 4          ; sys_write syscall number
    mov ebx, dword [conn_sock]  ; Connection socket file descriptor
    lea ecx, [response] ; Response buffer
    mov edx, response_len  ; Length of the response
    int 0x80            ; call kernel

    ; Check for errors
    test eax, eax
    js error_handling   ; Jump to error_handling if syscall returned with an error

    ; Close the connection socket
    mov eax, 6          ; sys_close syscall number
    mov ebx, dword [conn_sock]  ; Connection socket file descriptor
    int 0x80            ; call kernel

    ; Check for errors
    test eax, eax
    js error_handling   ; Jump to error_handling if syscall returned with an error

    ; Go back to accept more connections
    jmp accept_loop

error_handling:
    ; Handle error
    ; Print an error message or perform error recovery
    jmp exit

exit:
    ; Close the listening socket
    mov eax, 6          ; sys_close syscall number
    mov ebx, dword [listen_sock]  ; Listening socket file descriptor
    int 0x80            ; call kernel

    ; Exit the program
    mov eax, 1          ; sys_exit syscall number
    xor ebx, ebx        ; Exit code 0
    int 0x80            ; call kernel

section .data
    prompt_msg      db 'Enter your message: ', 0
    prompt_len      equ $ - prompt_msg
