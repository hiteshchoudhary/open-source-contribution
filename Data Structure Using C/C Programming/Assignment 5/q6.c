#include<stdio.h>
int main()
  {
  printf("enter a number ");
  int num ;
  scanf("%d",&num);
  int n = num;
  int count =    0;
  
  while(num!=0)
  {
    num = num / 10;
    count++;
  }

  if (count == 3){
    printf("number %d have three digit",n);
  }

  else
        printf("number %d have NOT three digit",n);


  printf("\n");
  return 0;
  }