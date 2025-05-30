#include<stdio.h>



void nEvennumber(int n)
{
    if(n<=0)
    {
       
        return;
        
    }

    nEvennumber(n-1);
    
    if(n % 2 == 0)
    {
        
        printf("%d ",n);
    }
    
}

int main()
  {
  printf("enter  a number of Term ");
  int n;
  scanf("%d",&n);

  nEvennumber(2*n);
  
  
  printf("\n");
  return 0;
  }