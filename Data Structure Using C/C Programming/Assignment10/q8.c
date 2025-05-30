#include <stdio.h>

int main() {
    printf("Enter a number: ");
    int num, i, count;
    scanf("%d", &num);

    for (i = num + 1; ; i++)
     {
        for (count = 2; count <= i; count++)
        {
            if (i % count == 0) {
                break;
            }
        }
        if (count == i)
        {
            printf("The next prime number is %d\n", i);
            return 0;
        }
    }

    return 0;
}
