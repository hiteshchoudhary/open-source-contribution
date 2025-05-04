#include<stdio.h>
int main()
  {
  
  printf("enter three number ");
  int n,m,o;
  scanf("%d %d %d",&n,&m,&o);
  if(n >m && n>o ){
    printf("number  %d is gratest ",n);

  }
  else if(m>n && m>o){
    printf("number %d is gratest  ",m);
    
  }
  else{
     printf("%d is gratest ",o);
    
  }
  
  printf("\n");
  return 0;
  }