#include<stdio.h>
int main()
  {
  printf("enter a number ");
  int num;
  scanf("%d",&num);
  printf("Enter a digit for append ");
  int ap;
  scanf("%d",&ap);
  int requrAns = num*10+ap;
  printf("requered ans is %d",requrAns);  
  printf("\n");
  return 0;
  }