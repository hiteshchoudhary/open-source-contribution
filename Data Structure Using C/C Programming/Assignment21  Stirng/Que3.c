#include<stdio.h>
#include<string.h>

void f1() {
    printf("Enter a string: ");

    char s[50];
    fgets(s, sizeof(s), stdin);

    int i, count = 0; 
    for(i = 0; s[i] != '\0'; i++) {
        if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' || s[i] == 'A' || s[i] == 'E' || s[i] == 'I' || s[i] == 'O' || s[i] == 'U') {
            count++;
        }
    }
    printf("Number of vowels is %d\n", count);
}

int main() {
    f1();
    return 0;
}
