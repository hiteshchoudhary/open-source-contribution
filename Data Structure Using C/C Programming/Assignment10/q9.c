#include<stdio.h>
#include<math.h>
int main()
  {
  printf("enter a number ");
  int n,i,ld =0,d=0,sum = 0;
  scanf("%d",&n);
  
  int num = n;
  int temp = n;

  while (temp!=0)
  {
    temp= temp/10;
    d++;
  }
 
  
  while(num!=0)
  {
    ld = num % 10;
    sum = sum + pow(ld,d);
    
    num = num/10;

  }
    
  if (sum == n)
  {
    printf("%d is armstrong number ",sum);
  }

  else
  {
    printf("%d is not armstrong number ",n);
  }
  printf("\n");
  return 0;
  }