#include<stdio.h>
int main()
  {
  printf("inter from where you want to print squer of number ");
  int  n;
  scanf("%d",&n);
  for(int i = 0;i<=n;i++)
  {
   
    int sp = i*i*i;
    printf(" %d * %d * %d = %d \n",i,i,i,sp);
    
  }
  
  
  printf("\n");
  return 0;
  }