#include<stdio.h>
int main()
  {
  printf("inter a natural number  to calculate Factorial of number ");
  int  n;
  scanf("%d",&n);
  int fact = 1;
  for(int i = 1;i<=n;i++)
  {
    fact *= i;
  }
  
  printf("factorial of %d natural number is %d",n,fact);
  printf("\n");
  return 0;
  }