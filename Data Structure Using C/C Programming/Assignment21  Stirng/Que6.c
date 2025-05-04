#include<stdio.h>

#include<string.h>

void f1()
{
    printf("enter a string ");

    char s[50];
    fgets(s,sizeof(s),stdin);

    int i; 
    for(i=0 ; s[i] != '\0' ; i++)
    {
        if( s[i] >= 'A' && s[i] <='Z' )
        {
            s[i] = s[i] + 32;

        }
    if( s[i] >= 'a' && s[i] <='z' )
        {
            s[i] = s[i];

        }

    }
    printf("All charter in lower case  is \n%s",s);

}




int main()
  {
 
  f1();
  
  
  printf("\n");
  return 0;
  }