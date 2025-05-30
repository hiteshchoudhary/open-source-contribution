#include<stdio.h>
#include<string.h>

void f1() {
    printf("Enter a string: ");

    char s[50];
    fgets(s, sizeof(s), stdin);

    int i, count = 0; 
    for(i = 0; s[i] != '\0'; i++) {
        if(s[i] ==  ' ') {
            count++;
        }
    }
    printf("Number of sapace is %d\n", count);
}

int main() {
    f1();
    return 0;
}
