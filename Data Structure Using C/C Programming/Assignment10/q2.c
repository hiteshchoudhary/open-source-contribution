// first  n  term of fibblonachhi seriese

#include<stdio.h>
int main()
  {
  printf("enter no of  term ");
  int n ,i;
  scanf("%d",&n);
  int a = -1;
  int b = 1;
  int c;

  for (i=1;i<=n;i++)
  {  
    c = a + b;
    printf("%d \n",c);
    a = b;
    b = c;

  }
  
  
  printf("\n");
  return 0;
  }