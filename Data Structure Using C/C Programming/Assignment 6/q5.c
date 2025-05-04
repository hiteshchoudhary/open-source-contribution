#include<stdio.h>
int main()
  {
  printf("enter a number ");
  int num;
  scanf("%d",&num);
  if (num % 2 == 0 && num % 3 == 0)
  {
    printf("number %d is divisible by 2 and 3 ",num);
  }
  else
  {
    printf("%d is not divisible by 3 and 2", num);

  }
  
  
  printf("\n");
  return 0;
  }