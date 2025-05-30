// USD to INR  converter

#include<stdio.h>
int main()
{
    printf("enter INR to convert it in USD ");
    int inr;
    scanf("%d",&inr);
    float usd = inr/84.5;
    printf("value of %d  in INR is %.2f in USD \n",inr,usd);

    return 0;

    
}
