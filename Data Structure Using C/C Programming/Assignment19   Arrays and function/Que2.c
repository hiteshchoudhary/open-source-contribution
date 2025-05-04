#include<stdio.h>

int minNumber(int A[] , int size )
{
    int i;
    int min = A[0];

    for(i=1 ; i< size; i++)
    {
       if(A[i]<min)
       {
        min = A[i];
       }
    }
    return min;
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

  int minN = minNumber(arr ,n);

  printf("Smmales number is %d ",minN);
  
  printf("\n");
  return 0;
  }