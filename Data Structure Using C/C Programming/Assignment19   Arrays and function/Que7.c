#include<stdio.h>

int duplicateInArray(int A[] , int n )
{
    int r,t,i;
  

for(r=0 ; r<n ; r++)
{


     int count = 0;
     int c =0;


    for(i=r; i<n ; i++)
    {
       
       if(A[r]==A[i])
       {
        count++;
        c++;
       }
    }

   if(count > 1)
      printf(" \n: dupicate is %d \n",A[r]);
   
} 


if(i==n-1)
  return -1;
  
}

int main()
  {
  printf(" enter the size of Array ");
  int n,i,j;
  scanf("%d",&n);
  int arr[n];

  printf("Now enter %d number in Array ",n);

  for( i = 0 ; i < n ; i++)
  {
    scanf("%d",&arr[i]);
  } 

    int acc = duplicateInArray(arr ,n);

    if(acc ==  -1)
    //     printf("first duplecate nuber in Array is %d",acc);
    // else
         printf("There is no duplicate");
  
  printf("\n");
  return 0;
  }