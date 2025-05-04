#include<stdio.h>
int main()
  {
  printf("enter cost price of product ");
  int cost;
  scanf("%d",&cost);
  printf("now enter sell price of product ");
  int sell;
  scanf("%d",&sell);

  float profit = sell - cost;
  float loss = cost - sell;

  if (profit > sell)
  {
    printf("you get profit of %.1f with profit presetneg of %.1f",profit,(profit/cost)*100);
  }
  else{
     printf("you get loss of %.1f with loss presetneg of %.1f",loss,(loss/cost)*100);
  }
  
  printf("\n");
  return 0;
  }