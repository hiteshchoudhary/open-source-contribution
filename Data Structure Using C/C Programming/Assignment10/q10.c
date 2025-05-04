#include<stdio.h>
#include<math.h>
int main()
  {
  printf("enter a number ");
  int n = 1000,i = 0;
  int temp = i;
 
  for(i = 1 ; i<=n; i++)
  {
        
        int temp = i;
        int ld =0,d=0,sum = 0;

        while (temp!=0)
        {
            temp= temp/10;
            d++;
        }
        

        temp = i ;
        while(temp!=0)
        {
            ld = temp % 10;
            sum = sum + pow(ld,d);
            
            temp = temp/10;

        }
            
        if (sum == i)
        {
            printf("%d \n",i);
        }

  }
  printf("\n");
  return 0;
  }