// hcf       of two number 

#include<stdio.h>
int main()
  {
  printf("enter two number to find HCF ");
  int a,b,h;
  
  scanf("%d %d",&a,&b);
 for( h = a<b?a:b ; h >=1 ; h--){
    if (a%h == 0 && b%h == 0)
      break;
 }
  
   printf("HCF of %d and %d is %d",a,b,h);
  
  
  printf("\n");
  return 0;
  }