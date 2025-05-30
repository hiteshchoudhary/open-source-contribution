#include<stdio.h>

int sortArray(int A[] , int n )
{
    int r,t,i;
   
for(r=0 ; r<n-1 ; r++)
{
    for(i=0 ; i< n-1-r; i++)
    {
       if(A[i]>A[i+1])
       {
        t = A[i];
        A[i] = A[i+1];
        A[i+1] = t;
       }
    }
  } 
  return A[n];
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

  sortArray(arr ,n);

  printf("Sorting  Array in Asending order is \n \n ");

  for(i = 0 ; i< n; i++)
  {
    printf("%d, ",arr[i]);
  }


  
  printf("\n");
  return 0;
  }