#include<stdio.h>

int rev(int n)
{
   int  temp = n;
    int sum = 0;
    while (temp)
    {
        int ld = temp % 10;
        sum = sum *10 + ld;
        temp /= 10;

    }
    
    return sum;
}
int main()
  {
  printf("Enter a number ");

  int n;
  scanf("%d",&n);

  int r = rev(n);

  printf("Reverse of %d is %d ",n,r);
  
  
  printf("\n");
  return 0;
  }