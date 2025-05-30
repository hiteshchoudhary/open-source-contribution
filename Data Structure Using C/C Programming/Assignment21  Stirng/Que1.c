#include<stdio.h>

#include<string.h>

void f1()
{
    printf("enter a string ");

    char s[50];
    fgets(s,sizeof(s),stdin);

    int i; 
    for(i=1 ; s[i] != '\0' ; i++)
;
    printf("Length of string is %d",i);

}




int main()
  {
 
  f1();
  
  
  printf("\n");
  return 0;
  }