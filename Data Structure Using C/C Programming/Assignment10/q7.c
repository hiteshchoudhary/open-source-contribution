// to print prime form n1 to n2

#include<stdio.h>
int main()
  {
  printf(" enter two number form where to where print prime number \n ");

  int start,stop,p ,c=0;
  scanf("%d %d",&start,&stop);
  
  printf("prime numbers are \n");
  
  for(int count = start ; count<= stop; count++)
  {
        for(p=2;p<=count;p++)
                    {
                        if(count%p == 0)
                         
                         break;
                    }
                
        if(count==p)
        {
            c++;
            printf("%d \n",p);
            
        }
  }
  printf(" \n there are total %d prime number ",c);
  printf("\n");
  return 0;
  }