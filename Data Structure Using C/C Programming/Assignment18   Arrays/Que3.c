
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
  
  int oddsum = 0;

  int evensum = 0;

  for ( i = 0; i < n; i++)
  {
    if (arr[i] % 2 == 0)
    {
        evensum = evensum + arr[i];
    }

    else
       oddsum += arr[i];
  }

  printf("sum of odd number stored in Array is %d: \n",oddsum);
  
  printf("sum of even number stored in Array is %d:",evensum);

 
  printf("\n");
  return 0;
  }