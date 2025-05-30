#include<stdio.h>

int swapOfIndexInArray(int A[] , int n )
{
    int a , b , i;
    printf("now inter first index for change there index ");
    scanf("%d",&a);
     printf("now inter second index for change  ");
    scanf("%d",&b);
  
    int temp = A[a];
    A[a] = A[b];
    A[b] = temp;


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

  swapOfIndexInArray(arr ,n);

   printf("After swapping index in Array ");

  for(i = 0 ; i< n; i++)
  {
    printf("%d, ",arr[i]);
  }



  //printf(" \n and First accurance Number is: %d ",acc);

  
  printf("\n");
  return 0;
  }