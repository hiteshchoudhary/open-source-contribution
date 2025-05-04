

#include<stdio.h>
int main()
  {
  printf("enter a number  ");
  int n ,i;
  scanf("%d",&n);
  int a = -1;
  int b = 1;
  int c;

  for (i=1; ;i++)
  {  
    c = a + b;
   
    a = b;
    b = c;

    if(n == c){
        printf("%d is in the febonachhi seriese  at the position of %d \n",n,i);
        return 0;
    }
    
    if(c>n)
    {
        break;
    }


  }

printf("%d is  not in the febonachhi seriese",n);
  
  
  
  printf("\n");
  return 0;
  }