    global _main
    extern _printf

    section .text
_main:
    push    message
    call    _printf
    add        esp, 4
message:
    db    'Hello World', 10, 0
