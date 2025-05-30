
#include<stdio.h>
int main()
  {
  printf("enter number in 5 subjest ");
  int a,b,c,d,e;
  scanf("%d %d %d %d %d",&a,&b,&c,&d,&e);
  if(a>=33 && b>=33 && c>=33 && d>=33 && e>=33)
  {
    printf("result: PASD");
  }
  else
  {
     printf("result: Faild");
  }
  
  
  printf("\n");
  return 0;
  }