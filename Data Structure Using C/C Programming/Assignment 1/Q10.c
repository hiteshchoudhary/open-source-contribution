
// 10. WAP to find the area of the circle. Take radius of circle from user as input and print the result in below given format.


#include<stdio.h>
int main()
{
    printf("enter the radious of circule ");
    float r ;
    scanf("%f",&r);
    printf("you have entered radious %0.2f\n",r);
    float a = 3.14*(r*r);
    printf("area of circule having radious %.2f is %f i",r,a);
    printf("\n");


    return 0;
};