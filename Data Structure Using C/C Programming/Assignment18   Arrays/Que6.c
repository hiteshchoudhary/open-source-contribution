
#include<stdio.h>
int main()
  {
  printf("inter size of array ");
  int n;
  scanf("%d",&n);

  int i, j,arr[n],t;

  for ( i = 0; i < n; i++)
  {
    printf("enter the value for index %d: ",i);
    scanf("%d",&arr[i]);
  }
  

  for ( i = 0; i < n; i++)
  {
   
   for(j= 0; j <= n-i ; j++)
   {
    if(arr[j] > arr[j+1])
    {
      t = arr[j];
      arr[j] = arr[ j+1];
      arr[j+1] = t;
    }
   }
     
  }

  printf("Sorted  Array is ");

  for ( i = 0; i < n; i++)
  {
    
    printf("%d, ",arr[i]);
  }
  
  


  
  
  printf("\n");
  return 0;
  }