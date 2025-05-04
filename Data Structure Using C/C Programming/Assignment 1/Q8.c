#include<stdio.h>
int main ()
{
    printf("Enter a number ");
    int num;
    scanf("%d",&num);
    int sq = num * num;
    printf("squre of %d is %d",num,sq);
    printf("\n");
    return 0;
}