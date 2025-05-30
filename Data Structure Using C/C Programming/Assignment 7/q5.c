#include<stdio.h>
int main()
  {
  printf("inter from where you want to print reverse odd number ");
  int  n;
  scanf("%d",&n);
  for(int i = n;i!=0;i--)
  {
    if(i%2!=0)
    {

    printf("%d \n",i);
    }
  }
  
  
  printf("\n");
  return 0;
  }