#include<stdio.h>

void nNumber(int n)
{
    if(n==1)
    {
        printf("1 ");
        return;
        
    }
    printf("%d ",n);
    nNumber(n-1);
    
}

int main()
  {
  printf("enter  a number ");
  int n;
  scanf("%d",&n);

  nNumber(n);
  
  
  printf("\n");
  return 0;
  }