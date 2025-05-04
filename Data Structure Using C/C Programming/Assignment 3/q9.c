// swap of a  without using third varibal number 

#include<stdio.h>
int main (){
    printf("enter two number for swap ");
    int a,b;
    scanf("%d %d",&a,&b);

    
    
    a = (a^b);
    b = (a^b); 
    a = (a^b);     

    printf("After swap %d %d",a,b);

    printf("\n");
    return 0;
}