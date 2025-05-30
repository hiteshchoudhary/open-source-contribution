#include<stdio.h>
int main()
  {
  printf("enter a number ");
  
  int num ,count = 0;
  scanf("%d",&num);
  int n = num;
  while (num != 0)
  {
    num = num / 10;
    count += 1;
    
  }
  
  if(count == 3)
  {
    printf("%d have three digit ",n);
  }
  else{
    printf("%d have %d digit",n,count);
  }
  printf("\n");
  return 0;
  }