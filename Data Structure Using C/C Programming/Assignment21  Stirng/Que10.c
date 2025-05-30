#include <stdio.h>
#include <string.h>


int main() {
   
    printf("Enter a string: ");

    char s[50];
    fgets(s, sizeof(s), stdin);
    

    printf("enter A Charcter to cheack frist occurrence in given String  ");

    char ch;
    scanf("%c",&ch);
   

    int count = 0;
    int i;
    for (i = 0; s[i] != '\0'; i++) {

        if(s[i] == ch)
            count++;

        if(count == 2)
              break;
        
    }

    printf("First occurance of %c in  %s in on %d index\n",ch,s,i);
    
    printf("\n");
    return 0;
}
