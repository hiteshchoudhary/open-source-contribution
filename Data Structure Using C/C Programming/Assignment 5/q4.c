#include<stdio.h>
int main()
  {
  printf("enter a number ");
  int num ;
  scanf("%d",&num);
  int half = num/2;
  int tochack = half*2;


  if (tochack == num)
  {
    printf("number %d is even  number ",num);

  }
  else{
    printf("number %d is odd number ",num);
  }
  printf("\n");
  return 0;
  }