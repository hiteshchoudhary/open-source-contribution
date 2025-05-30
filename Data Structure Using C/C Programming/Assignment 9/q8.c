#include<stdio.h>
int main()
  {
  printf("enter a number ");
  int count = 0;
  int number;
  scanf("%d",&number);
  for(int i = 1 ; i<= number; i++)
  {
    if(number % i == 0){
        count++;
    }
    
  }
if (count == 2)
 {
  printf("number %d is prime number",number);

 }
 
else if(count>2)
{
    printf("number %d is not prime number it is composite number",number);
}

else
{
    printf("number %d is not a natural number",number);
}
  
  
  printf("\n");
  return 0;
  }