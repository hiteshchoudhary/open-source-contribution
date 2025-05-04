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
  else if(c>= '0' && c<= '9' ){
    printf("enterd charecter %c is a number",c);
  }
  else if( c == ' ')
  {
    printf(" entered charcter is space");
  }
  else
  {
    printf("entered charecter %c spcial character ",c);
    
  
  }
  printf("\n");
  return 0;
  }