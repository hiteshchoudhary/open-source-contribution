#include<stdio.h>
int main()
  {
  printf("enter a nuber ");
  int num;
  scanf("%d",&num);
  if(num == 0 ){
    printf("numer is zero");
    
  }
  else if(num>0){
    printf("%d is a positive number",num);
  }
  else{
    printf("%d is a nagative number",num);
  }
  printf("\n");
  return 0;
  }