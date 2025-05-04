#include<stdio.h>
int main()
  {
  printf("enter a number ");
  int num;
  scanf("%d",&num);
  int ls = num%10;
  int ls2 = num/10%10;
  int ls3 = num/100;
  int reverseNumber = ls*100 + ls2*10+ls3;
  printf("ls = %d ls2 = %d ls3 = %d",ls,ls2,ls3);
 printf("you have entered %d and reverse of this number is %d",num,reverseNumber);
  
  printf("\n");
  return 0;
  }