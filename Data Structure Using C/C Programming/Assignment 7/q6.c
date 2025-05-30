#include<stdio.h>
int main()
  {
  printf("inter from where you want to print even number ");
  int  n;
  scanf("%d",&n);
  for(int i = 0;i<=n;i++)
  {
    if(i%2==0)
    {

    printf("%d \n",i);
    }
  }
  
  
  printf("\n");
  return 0;
  }