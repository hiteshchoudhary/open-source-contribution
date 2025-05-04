#include<stdio.h>
int main()
  {
  printf("enter a month number ");
  int m;
  scanf("%d",&m);
  if (m==1 || m==3 || m==5 || m==7 || m==10 || m==8 || m==12)
  {
    printf("in this month there is total 31 days");
  }

  else if (m==4 || m==6 || m==9 || m==11)
  {
    printf("in this month there is total 30 days");
  }
  else if(m==2)
  {
    printf("in this month usually 29 days in leap yr there is 28 days");
  }
  else{
    printf("envalid  input");
  }
  printf("\n");
  return 0;
  }