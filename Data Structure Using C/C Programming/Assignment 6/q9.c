#include<stdio.h>
int main()
  {
  printf("enter three angle of trangle ");
  int a,b,c;
  scanf("%d %d %d",&a,&b,&c);

  if(a+b+c == 180 )
  {
    printf("the given angle is valid");
  }
  else
  {
    printf("given angle is not valid for make a trangle");
  }
  
  printf("\n");
  return 0;
  }