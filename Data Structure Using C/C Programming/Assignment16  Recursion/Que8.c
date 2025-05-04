#include<stdio.h>



int decimaltobinary(int n)
{
    if(n==0)
    {
       
        return 0;
        
    }
    
    else
        return (n%2 + decimaltobinary(n/2)*10);
  
    
}

int main()
  {
  printf("enter  a decimal number ");
  int n;
  scanf("%d",&n);

  int b = decimaltobinary(n);
  
  printf("binary of  %d is %d",n,b);
  printf("\n");
  return 0;
  }