#include<stdio.h>
int main()
  {
  
  printf("enter two number ");
  int n,m ;
  scanf("%d %d",&n,&m);
  if(n == m ){
    printf("both numbe is equal which is %d ",n);

  }
  else if(n<m){
    printf("%d is grater than %d",m,n);
    
  }
  else{
     printf("%d is grater than %d",n,m);
    
  }
  
  printf("\n");
  return 0;
  }