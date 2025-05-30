#include<stdio.h>
int main()
  {
  printf("enter a year ");
  int yr;
  scanf("%d",&yr);

  if(yr%100 == 0)
  {
    if(yr % 400 == 0)
    {
        printf("year %d is leap year ",yr);
    }
    else 
    {
        printf("year %d is NOT leap  year ",yr);
    }
    
  }
 else if(yr % 4 == 0)
    {
        printf("year %d is leap year ",yr);
    }
  else
    printf("year %d is NOT leap  year ",yr);
  printf("\n");
  return 0;
  }