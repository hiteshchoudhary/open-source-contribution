
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
  
  int min = arr[0];

  for ( i = 1; i < n; i++)
  {
    if (min > arr[i])
        min = arr[i];
  }

  printf("minimum number stored in Array is %d",min);
  


  
  
  printf("\n");
  return 0;
  }