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
        if(s[i] >= 'a' && s[i] <='z')
        {
            s[i] = s[i] - 32;

        }
    }
    printf("All charter in upper case  is %s",s);

}




int main()
  {
 
  f1();
  
  
  printf("\n");
  return 0;
  }