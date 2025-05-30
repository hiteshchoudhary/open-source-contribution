#include<stdio.h>
int main()
  {
  printf("inter a natural number ");
  int  n;
  scanf("%d",&n);
  int sum = 0;
  for(int i = 1;i<=n;i++)
  {
    sum += i*i;
  }
  
  printf("first  %d natural number Squer sum  is %d",n,sum);
  printf("\n");
  return 0;
  }