#include<stdio.h>
int main()
  {
  printf("enter a number to chack postive and non positive  ");
  int num;
  scanf("%d",&num);
  if (num>0)
  {
    printf("the number which you have entered that is %d which is positive",num);
  }
  else
    printf("the number which you have entered that is %d which is non-positive",num);
  printf("\n");
  return 0;
  }