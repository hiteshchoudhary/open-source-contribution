#include <stdio.h>
#include <string.h>


int main() {
   
    printf("Enter a string: ");

    char s[50];
    fgets(s, sizeof(s), stdin);

    int n = strlen(s);

    
    if (s[n - 1] == '\n') {
        s[n - 1] = '\0';
        n--; 
    }

    int i;
    for (i = 0; i < n / 2; i++) {
        char temp = s[i];
        s[i] = s[n - 1 - i];
        s[n - 1 - i] = temp;
    }

    printf("Reverse is: %s\n", s);
    printf("\n");
    return 0;
}
