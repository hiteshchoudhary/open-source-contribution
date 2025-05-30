
#include<stdio.h>
int main()
  {
  printf("inter size of array ");
  int n;
  scanf("%d",&n);

  int i, arr[n] , min,secondMin;

printf("enter %d  numbers ",n);
  for ( i = 0; i < n; i++)
  {
    
    scanf("%d",&arr[i]);
  }
  
  if(arr[0] < arr[1])
  {
    min = arr[0];
    secondMin = arr[1];
  }

  else
  {
    min = arr[1];
    secondMin = arr[0];
  }

  
  for ( i = 2; i < n; i++)
  {
    if (arr[i]<min)
    {
        secondMin = min;
        min = arr[i];
    }
        
    else
    {
        if(arr[i]<secondMin)
        {
            secondMin = arr[i];

        }
    }
  }

  printf("\n \nsecond Maximum number is %d ",secondMin);
  


  
  
  printf("\n");
  return 0;
  }