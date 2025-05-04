#include<stdio.h>
int main()
  {
  printf("inter a natural number ");
  int  n;
  scanf("%d",&n);
  int sum = 0;
  for(int i = 1;i<=n;i++)
  {
    sum += i;
  }
  
  printf("sum of %d natural number is %d",n,sum);
  printf("\n");
  return 0;
  }