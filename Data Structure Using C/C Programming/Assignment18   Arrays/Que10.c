
#include<stdio.h>
int main()
  {
  printf("inter size of array ");
  int n =10;
  scanf("%d",&n);

  int i, arr[n];

  for ( i = 0; i < n; i++)
  {
    printf("\nenter the value for index %d: ",i);
    scanf("%d",&arr[i]);
  }
  
  int sum = 0;
  int arr2[n];


  for ( i = 0; i < n; i++)
  {
    arr2[i] = arr[i];
  }


  printf(" Coppyed Array is ");



  for ( i = 0; i < n; i++)
  {
    printf("%d ,",arr2[i]);
  }

  printf("\n");
  return 0;
  }