#include<stdio.h>



void nOddNumber(int n)
{
    if(n<=0)
    {
       
        return;
        
    }
    nOddNumber(n-1);
    if(n % 2 != 0)
    {
        
        printf("%d ",n);
    }
    
}

int main()
  {
  printf("enter  a number ");
  int n;
  scanf("%d",&n);

  nOddNumber(2*n);
  
  
  printf("\n");
  return 0;
  }