#include<stdio.h>



void ntermsquer(int n)
{
    if(n<=0)
    {
       
        return;
        
    }
  
  ntermsquer(n-1);
  printf("%d ",n*n);
    
}

int main()
  {
  printf("enter  a number of Term ");
  int n;
  scanf("%d",&n);

  ntermsquer(2*n);
  
  
  printf("\n");
  return 0;
  }