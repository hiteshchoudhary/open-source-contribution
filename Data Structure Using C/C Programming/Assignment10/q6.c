#include<stdio.h>
int main()
  {
  printf(" all prime number under 100 are here \n ");
  int n = 100,i,p;

  
  for(int k = 2 ; k<= 100; k++)
  {
        for(p=2;p<=k;p++)
                    {
                        if(k%p == 0)
                         break;
                    }
                
        if(k==p)
        {
            printf("%d \n",p);
        }
  }
  
  printf("\n");
  return 0;
  }