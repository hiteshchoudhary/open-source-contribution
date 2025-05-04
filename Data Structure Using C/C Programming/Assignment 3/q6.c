// swap of a number 

#include<stdio.h>
int main (){
    printf("enter two number for swap ");
    int a,b,c;
    scanf("%d %d",&a,&b);

    c = a;
    a = b;
    b = c; 
    printf("After swap %d %d",a,b);

    printf("\n");
    return 0;
}