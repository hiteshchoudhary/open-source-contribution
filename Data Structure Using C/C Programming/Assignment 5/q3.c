#include<stdio.h>
int main()
  {
  printf("enter a number ");
  int num;
  scanf("%d",&num);
  if (num%2==0)
  {
    printf("number %d  is even numbe",num);

  }
  else{
    printf("number %d is odd number",num);
  }
  printf("\n");
  return 0;
  }