#include<stdio.h>
int main()
{
    printf("Enter two number ");
    int num1 , num2 ;
    scanf("%d %d", &num1 , &num2);
    printf("you have entered %d and %d \n", num1 , num2);
    int sum;
    sum = num1 + num2 ;
    
    printf("sum of %d and %d is %d ",num1 , num2 , sum);
    printf("\n");
    return 0 ;
    }