// this is pattern printing assignment which i will soleve
// whith the help of function.

#include<stdio.h>
int i,j,k,a;
void p1(); // function decleration

void p2();
void p3();

void p4();
void p5();
void p6();
void p7();
void p8();
void p9();

void p10();

int main()
  {
  p1();  // function call.
  printf("\n");

  p2();
  printf("\n");
  
  p3();
  printf("\n");
  
  p4();
  printf("\n");
  
  p5();
  printf("\n");
  
  p6();
  printf("\n");
  
  p7();
  printf("\n");
  
  p8();
  printf("\n");
  
  p9();
  printf("\n");
  
  p10();
  printf("\n");
  return 0;
  }

  // 10 pattern
  void p10()
  {
    
    for(i = 1; i<= 5 ; i++)
    {
     
        for(j = 1 ; j<= 5; j++)
        {
          
            if (i==1 || i==5 || j==1 ||j==5 )
            { 
               printf("*");
             
            
             }
            else
               {
                printf(" ");
               
               }
             
        }
        printf("\n");
    }
  }



  // 

  // 9th pattern

  void p9()
  {
    for(i = 65; i<= 69 ; i++)
    {
      
        for(j = 65 ; j<=69 ; j++)
        {
            if (j>=i)
            { 
               printf("%c",j);
               
            }
            else
               printf(" ");
        }
        printf("\n");
    }
  }



  // 8 pattern
  void p8()
  {
    k = 1;
    for(i = 1; i<= 5 ; i++)
    {
     
        for(j = 1 ; j<= 5; j++)
        {
          
            if (j <= i )
            { 
               printf("%d ",k);
               k++;
            
             }
            else
               {
                printf(" ");
               
               }
             
        }
        printf("\n");
    }
  }



  // 7th pattern

  void p7()
  {
    for(i = 65; i<= 69 ; i++)
    {
      k= i;
        for(j = 65 ; j<=69 ; j++)
        {
            if (j>=i)
            { 
               printf("%c",k);
               k++;
            }
            else
               printf(" ");
        }
        printf("\n");
    }
  }


  // 6 pattern

  void p6()
  {
    for(i = 1; i<= 4 ; i++)
    {
      k = i;
        for(j = 1 ; j<=4 ; j++)
        {
            if (j <= i )
            { 
               printf("%d ",k);
               k--;
            }
            else
               printf(" ");
        }
        printf("\n");
    }
  }


  // 5 pattern
  void p5()
  {
    for(i = 1; i<= 5 ; i++)
    {
        for(j = 1 ; j<= 5; j++)
        {
            if (j <= i )
               printf("%d ",j);
            else
               printf(" ");
        }
        printf("\n");
    }
  }




//p4
  void p4()
  {
    for(i = 1; i<= 5 ; i++)
    {
        for(j = 1 ; j<= 5; j++)
        {
            if (j >= i )
               printf("*");
            else
               printf(" ");
        }
        printf("\n");
    }
  }



  //3rd

  void p3()
  {
    for(i = 1; i<= 5 ; i++)
    {
        for(j = 1 ; j<= 5; j++)
        {
            if (j <= 6-i )
               printf("*");
            else
               printf(" ");
        }
        printf("\n");
    }
  }


// 2nd
  void p2()
  {
    for(i = 1; i<= 5 ; i++)
    {
        for(j = 1 ; j<= 5; j++)
        {
            if (j >= 6-i)
               printf("*");
            else
               printf(" ");
        }
        printf("\n");
    }
  }

  // 1 pattern
  void p1()
  {
    for(i = 1; i<= 5 ; i++)
    {
        for(j = 1 ; j<= 5; j++)
        {
            if (j <= i )
               printf("*");
            else
               printf(" ");
        }
        printf("\n");
    }
  }