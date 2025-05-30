
#include<stdio.h>
int main()
  {
  printf("inter size of array ");
  int n;
  scanf("%d",&n);

  int i, arr[n] ,j,k;

printf("enter %d  numbers ",n);
  for ( i = 0; i < n; i++)
  {
    
    scanf("%d",&arr[i]);
  }
  
  for (j = 0 ; j < n-1; j++)
  {
    for (i = 0 ; i < n-1-j; i++)
    {
        if(arr[ i] < arr[i+1])
        {
            k = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = k;
        }
    }
  }

  printf("\n Shorted array in Descending order is \n");

  for (i= 0 ; i < n ; i++)
          printf("%d ", arr[i]);
  printf("\n");
  return 0;
  }