#include<stdio.h>

void allUniqueNumber(int A[] , int n )
{
    int r,t,i;
  

for(r=0 ; r<n ; r++)
{


     int count = 0;

    for(i=r; i<n ; i++)
    {

       if(A[r]==A[i])

       {
        printf("%d ",A[r]);
        continue;
       }

      

 
   
  } 

  printf("%d ",A[r]);
    

}
  
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

  printf("Unique Number is ");

    allUniqueNumber(arr ,n);

    
  printf("\n");
  return 0;
  }