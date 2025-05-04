#include<stdio.h>
int main()
  {
  printf(" Enter a number ");
  int num ,temp = 0;
  scanf("%d",&num);
  int n = num;
  while (num)
  {
   
    temp = temp * 10 + num % 10;
     num = num / 10;

  }
  printf("revers of %d is %d",n , temp);
  
  
  
  printf("\n");
  return 0;
  }