#include<stdio.h>
int main()
  {
  printf("Enter a CHarecter ");
  char c;
  scanf("%c",&c);
  if(c>='a' && c<='z')
  {
    printf("entered charecter %c is lowerCase ",c);
    
  }
  else if(c>='A' && c<='Z')
  {
    printf("entered charecter %c is UpperCase ",c);
    
  }
  else
  {
    printf("entered charecter %c is not a apfhawate ",c);
    
  
  }
  printf("\n");
  return 0;
  }