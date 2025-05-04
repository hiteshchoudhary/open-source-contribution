#include<stdio.h>



void nEvenNumber(int n)
{
    if(n<=0)
    {
       
        return;
        
    }

   
    
    if(n % 2 == 0)
    {
        
        printf("%d ",n);
    }

     nEvenNumber(n-1);
    
}

int main()
  {
  printf("enter  a number of Term ");
  int n;
  scanf("%d",&n);

  nEvenNumber(2*n);
  
  
  printf("\n");
  return 0;
  }