#include<stdio.h>
int main()
  {
  printf("enter a digit ");
  int count = 0;
  int digit;
  scanf("%d",&digit);
  int n = digit;
  while (digit != 0)
  {
    digit /= 10;
    count++;
  }

  printf("number of digit in %d is = %d ",n,count);


  
  
  
  printf("\n");
  return 0;
  }