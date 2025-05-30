#include<stdio.h>
int main()
  {
  printf("enter a number ");
  int num; 
  scanf("%d",&num);
  int ld = num%10;
  int requerAns = num-ld;
  printf( "requer number is %d",requerAns);
  
  printf("\n");
  return 0;
  }