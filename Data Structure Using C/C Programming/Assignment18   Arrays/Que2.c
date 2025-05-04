
#include<stdio.h>
int main()
  {
  //printf("inter size of array ");
  int n =10;
  //scanf("%d",&n);

  int i, arr[n];

  for ( i = 0; i < n; i++)
  {
    printf("\nenter the value for index %d: ",i);
    scanf("%d",&arr[i]);
  }
  
  int sum = 0;

  for ( i = 0; i < n; i++)
  {
    sum = sum + arr[i];
  }

  float average = sum / 10.0;

  printf("Avrage of number stored in Array is %.2f",average);
  


  
  
  printf("\n");
  return 0;
  }