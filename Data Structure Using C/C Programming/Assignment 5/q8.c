#include<stdio.h>
int main()
  {
  
  printf("enter value of a b and c ");
  int a,b,c ;
  scanf("%d %d %d",&a,&b,&c);

  int d1 = (b*b) - (4*a*c);
  if(d1>=0){
    printf("roots are real");
  }
  else
    printf("roots are emeganary");

  
  printf("\n");
  return 0;
  }