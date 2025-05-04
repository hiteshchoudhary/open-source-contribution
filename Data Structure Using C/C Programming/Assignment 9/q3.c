

#include<stdio.h>
int main()
  {
  printf("enter a natural number ");
  int  n;
  scanf("%d",&n);
  int evensum =  0;
  int oddsum =  0;
  for(int i = 1;i<2*n;i++)
  {
    if(i%2==0)
    {

    evensum += i;

    }

    else
    {
        oddsum += i;
    }
  }

printf("sum of first  %d odd number is %d",n,oddsum);
  

  
  printf("\n");
  return 0;
  }