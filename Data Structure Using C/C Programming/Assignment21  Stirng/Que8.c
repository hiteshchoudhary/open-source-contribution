#include <stdio.h>
#include <string.h>


int main() {
   
    printf("Enter a string: ");

    char s[50];
    fgets(s, sizeof(s), stdin);

   int count_alpha = 0;
   int count_digit = 0;
   int count_specialCH = 0;

   
    // int n = strlen(s);

    // // Remove the newline character if it exists
    // if (s[n - 1] == '\n') {
    //     s[n - 1] = '\0';
    //     n--;  // Adjust length after removing newline
    // }


    int i;
    for (i = 0; s[i] != '\0'; i++) {
        
        if( (s[i] >= 'a' && s[i] <= 'z') || s[i] >= 'A' && s[i] <= 'Z' )
        {
            count_alpha++;
        }

        else if (s[i] >= '0' && s[i] <= '9')
        {
            count_digit++;
        }
       
        else {
            count_specialCH++;
        }
    }

    printf("Total Alphabets are %d\n",count_alpha);
    printf("Total digits count are %d\n",count_digit);
    printf("Total Spcial Character are %d",count_specialCH);
    
    printf("\n");
    return 0;
}
