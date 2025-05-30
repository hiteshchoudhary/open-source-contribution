#include<stdio.h>
int main()
  {
  printf("enter a number ");
  int num;
  scanf("%d",&num);
  if (num % 7 == 0 || num % 3 == 0)
  {
    printf("number %d is divisible by 7 or 3 ",num);
  }
  else
  {
    printf("%d is not divisible by 3 or 7", num);

  }
  
  
  printf("\n");
  return 0;
  }