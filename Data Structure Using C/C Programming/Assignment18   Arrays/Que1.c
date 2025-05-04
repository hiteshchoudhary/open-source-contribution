
#include<stdio.h>
int main()
  {
  printf("inter size of array ");
  int n;
  scanf("%d",&n);

  int i, arr[n];

  for ( i = 0; i < n; i++)
  {
    printf("enter the value for index %d: ",i);
    scanf("%d",&arr[i]);
  }
  
  int sum = 0;

  for ( i = 0; i < n; i++)
  {
    sum = sum + arr[i];
  }

  printf("sum of number stored in Array is %d",sum);
  


  
  
  printf("\n");
  return 0;
  }