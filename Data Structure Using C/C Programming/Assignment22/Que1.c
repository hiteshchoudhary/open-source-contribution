#include <stdio.h>


int stringLength(const char* str) {
    int length = 0;
    while (str[length] != '\0') {
        length++;
    }
    return length; 
}

int main() {
    const char* myString = "Hello, World!";
    int len = stringLength(myString);
    printf("Length of the string: %d\n", len);
    return 0;
}

