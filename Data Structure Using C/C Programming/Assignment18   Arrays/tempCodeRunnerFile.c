
#include<stdio.h>
int main()
  {
  printf("inter size of array ");
  int n;
  scanf("%d",&n);

  int i, arr[n] , max,secondMax;

printf("enter %d  numbers ",n);
  for ( i = 0; i < n; i++)
  {
    
    scanf("%d",&arr[i]);
  }
  
  if(arr[0] > arr[1])
  {
    max = arr[0];
    secondMax = arr[1];
  }

  else
  {
    max = arr[1];
    secondMax = arr[0];
  }

  
  for ( i = 1; i < n; i++)
  {
    if (arr[i]>max)
    {
        secondMax = max;
        max = arr[i];
    }
        
    else
    {
        if(arr[i]>secondMax)
        {
            secondMax = arr[i];

        }
    }
  }

  printf("\n \nsecond Maximum number is %d ",secondMax);
  


  
  
  printf("\n");
  return 0;
  }