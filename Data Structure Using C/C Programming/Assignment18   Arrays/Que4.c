
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
  
  int max = arr[0];

  for ( i = 1; i < n; i++)
  {
    if (arr[i]>max)
        max = arr[i];
  }

  printf("\n \n Maximum number stored in Array is %d",max);
  


  
  
  printf("\n");
  return 0;
  }