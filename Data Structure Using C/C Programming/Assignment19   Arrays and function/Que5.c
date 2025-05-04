#include<stdio.h>

int accuranceOfArray(int A[] , int n )
{
    int r,t,i;
   
for(r=0 ; r<n-1 ; r++)
{
    
       if(A[r]==A[r+1])
       {
        return A[r];
       }
   
  } 
  
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

   int acc = accuranceOfArray(arr ,n);

   printf("You are these number in Array ");

  for(i = 0 ; i< n; i++)
  {
    printf("%d, ",arr[i]);
  }



  printf(" \n and First accurance Number is: %d ",acc);

  
  printf("\n");
  return 0;
  }