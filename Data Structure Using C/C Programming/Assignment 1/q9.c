// 9. Write a program to calculate area of a rectangle. Input appropriate data from the user.
#include<stdio.h>
int main()
{
    printf("enter the value of length and bridth ");
    float l ,b ;
    scanf("%f %f",&l,&b);
    printf("you have entered length = %0.2f and bridth = %0.2f\n",l,b);
    float a = l*b;
    printf("area of length %f and bridth %f is %.2f",l,b,a);
    printf("\n");


    return 0;
};