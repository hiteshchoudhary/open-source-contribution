// nth term of fibblonachhi seriese

#include<stdio.h>
int main()
  {
  printf("enter nth term ");
  int n ,i;
  scanf("%d",&n);
  int a = -1;
  int b = 1;
  int c;

  for (i=1;i<=n;i++)
  {  
    c = a + b;
   
    a = b;
    b = c;

    

  }
  
  printf("%dth term is %d",n,c);
  
  printf("\n");
  return 0;
  }