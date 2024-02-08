# Hello, World! in Different Programming Languages🌍

Below are examples of "Hello, World!" programs in various programming languages:

1. **C**:

   ```c
   #include <stdio.h>
   int main() {
    printf("Hello, World!\n");
    return 0;
   }
   ```

<p align="center">
  <img src="https://static.wikia.nocookie.net/the-uncanny-incredible/images/5/5f/Mibu_phase_1_%28original_hd%29.webp/revision/latest/scale-to-width-down/250?cb=20230805111343" width="100" height="100" style="display:block;margin:auto;">
</p>


2. **C++**:

   ```c++
   #include <iostream>
   int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
   }
   ```

<p align="center">
  <img src="https://www.videomeme.in/wp-content/uploads/2022/11/cartoon-face-getting-brighter.jpg" width="100" height="100" style="display:block;margin:auto;">
</p>

3. **Java**:

   ```java
   public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
   }
   ```

<p align="center">
  <img src="https://external-preview.redd.it/vHK-C-Wx28llvnpcqe-H3CHbjxywA347arliw31bBSM.png?width=640&crop=smart&format=pjpg&auto=webp&s=9d2ddbc62f49564c7a566604ba362bc999b1da36" width="100" height="100" style="display:block;margin:auto;">
</p>

4. **Python**:

   ```python
   print("Hello, World!")
   ```

<p align="center">
  <img src="https://facts.net/wp-content/uploads/2023/09/16-facts-about-mr-incredible-the-incredibles-1693811641.jpg" width="100" height="100" style="display:block;margin:auto;">
</p>

5. **Javascript**:

   ```javascript
   console.log("Hello, World!");
   ```

<p align="center">
  <img src="https://preview.redd.it/48xit84rnus91.png?width=640&crop=smart&auto=webp&s=6a8276d6fe61acd489f7192037929ebf92fae7b5" width="100" height="100" style="display:block;margin:auto;">
</p>

6. **TypeScript**:

   ```typescript
   console.log("Hello, World!");
   ```

<p align="center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3-JpLYBTHQDY-wSmlx5FDB6n4uc3yCulJ83WSHWA0h4wUhAORk8HlZAaTEAiyKH3Jh9c&usqp=CAU" width="100" height="100" style="display:block;margin:auto;">
</p>

7. **PHP**:

   ```php
   <?php
   echo "Hello, World!";
   ?>
   ```

<p align="center">
  <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d49ba913-dbd1-4505-99cc-9bd433c6e42d/df0yzn4-241f21e6-72c9-4e85-8ebe-55cad7a2a1fc.png/v1/fill/w_720,h_730,q_80,strp/edited_mr_incredible_face_by_abbysek_df0yzn4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMwIiwicGF0aCI6IlwvZlwvZDQ5YmE5MTMtZGJkMS00NTA1LTk5Y2MtOWJkNDMzYzZlNDJkXC9kZjB5em40LTI0MWYyMWU2LTcyYzktNGU4NS04ZWJlLTU1Y2FkN2EyYTFmYy5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.wQnq_gzNW0RZJVwOrjX5griWJCE64MX2-hiuk66SXQs" width="100" height="100" style="display:block;margin:auto;">
</p>

8. **Rust**:

   ```rust
   fn main() {
    println!("Hello, World!");
   }
   ```

<p align="center">
  <img src="https://cdna.artstation.com/p/assets/images/images/042/667/046/large/jeroen-cloosterman-bob-parr-rendercam-v001.jpg?1635149214&dl=1" width="100" height="100" style="display:block;margin:auto;">
</p>

9. **SQL**:

   ```sql
   SELECT 'Hello, World!';
   ```

<p align="center">
  <img src=https://static.wikia.nocookie.net/mayrey/images/0/0b/Mr_uncredible.png/revision/latest?cb=20180610101248" width="100" height="100" style="display:block;margin:auto;">
</p>

10. **Assembly**:

    ```assembly
    section .data
        hello db 'Hello, World!', 0

    section .text
        global _start

    _start:
        mov     eax, 4          ; system call for sys_write
        mov     ebx, 1          ; file descriptor 1 is stdout
        mov     ecx, hello      ; address of string to output
        mov     edx, 13         ; number of bytes to write
        int     0x80            ; call kernel

        mov     eax, 1          ; system call for sys_exit
        xor     ebx, ebx        ; exit code 0
        int     0x80            ; call kernel
    ```

<p align="center">
  <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a2cd1f6c-da50-4bbe-89ac-77c7fc19e466/df2f775-6b25bf52-c5d3-46b7-987a-a2773b3e86a2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EyY2QxZjZjLWRhNTAtNGJiZS04OWFjLTc3YzdmYzE5ZTQ2NlwvZGYyZjc3NS02YjI1YmY1Mi1jNWQzLTQ2YjctOTg3YS1hMjc3M2IzZTg2YTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iRsSQ60UMHYU_s2z6uK4FM0OwNuHV42HSF8Nt04jG1I" width="100" height="100" style="display:block;margin:auto;">
</p>
Ok Bye🙂🙂