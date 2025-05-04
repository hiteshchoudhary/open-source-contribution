#include<stdio.h>
#include<string.h>

void f1() {
    printf("Enter a string: ");

    char s[50];
    fgets(s, sizeof(s), stdin);

    // Consume the newline character left in the input buffer
    getchar();

    printf("Now enter a character to find occurrence in \"%s\": ", s);
    char ch;
    scanf("%c", &ch);
    int i, count = 0;
    for(i = 0; s[i] != '\0'; i++) {
        if(s[i] == ch)
            count++;
    }

    printf("Occurrence of %c in \"%s\" is %d\n", ch, s, count);
}

int main() {
    f1();
    return 0;
}
