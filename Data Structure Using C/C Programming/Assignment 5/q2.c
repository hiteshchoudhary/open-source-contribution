#include<stdio.h>
int main()
  {
  printf("enter a number ");
  int num;
  scanf("%d",&num);
  if (num%5 == 0)
  {
    printf("the number which you have entered that is %d which is divisible by 5 ",num);

  }
  else
    printf("the number which you have entered that is %d which is NOT divisible by 5 ",num);
  printf("\n");
  return 0;
  }