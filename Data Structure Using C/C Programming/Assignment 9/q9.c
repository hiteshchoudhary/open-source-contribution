// LCM of tow number

#include<stdio.h>
int main()
  {
  printf("enter tow number to find lcm ");
  int l,a,b;
  scanf("%d %d",&a,&b);

  for(l = a>b?a:b ; l<=a*b; l++)
  {
    if(l%a == 0 && l%b == 0)
    {
        printf("LCM is %d ",l);
        break;
    }
  }  
  
  printf("\n");
  return 0;
  }