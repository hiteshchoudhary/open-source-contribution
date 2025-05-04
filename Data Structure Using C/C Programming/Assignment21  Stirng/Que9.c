#include <stdio.h>
#include <string.h>


int main() {
   
    printf("Enter a string: ");

    char s[50];
    fgets(s, sizeof(s), stdin);


    char s2[50];

    int i;
    for (i = 0; s[i] != '\0'; i++) {
        
        s2[i] = s[i];
    }

    printf("Copped string is: %s\n",s2);

    printf("\n");
    return 0;
}
