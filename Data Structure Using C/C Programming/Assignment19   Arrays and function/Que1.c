#include<stdio.h>

int maxNumber(int A[] , int size )
{
    int i;
    int max = A[0];

    for(i=1 ; i< size; i++)
    {
       if(A[i]>max)
       {
        max = A[i];
       }
    }
    return max;
}

int main()
  {
  printf("enter the size of Array ");
  int n,i,j;
  scanf("%d",&n);
  int arr[n];

  printf("Now enter %d number in Array ",n);

  for( i = 0 ; i < n ; i++)
  {
    scanf("%d",&arr[i]);
  } 

  int maxN = maxNumber(arr ,n);

  printf("Gratest number is %d ",maxN);
  
  printf("\n");
  return 0;
  }