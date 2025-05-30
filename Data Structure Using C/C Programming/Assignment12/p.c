#include<stdio.h>

void p1();
void p2();
void p3();
void p4();

void p5();
void p6();
void p7();
void p8();

void p9();
void p10();

  int i,j,k,p,b;
  
int main()
  {
    

  p1();
  printf("\n");

  p2();
  printf("\n");

  p3();
  printf("\n");

  p4();
  printf("\n");
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

  
  printf("\n");
  return 0;
  }

 void p9()
 {
    for(i =1; i<=4 ;i++)
    {
        k=1;
        for(j=1; j<=7; j++)
        {
            if(j>=6-i && j<= i+2)
            {
                if(k==4)
                {
                    
                    k--;
                }
                printf(" ");
                
                
            }
            else if(j>=4)
                {
                    
                printf("%d",k);
                k--;
               
                }

            else
                {

                printf("%d",k);
                k++;
                }

        }

     printf("\n");
    }
        
    
 }



 void p10()
 {
    for(i =1; i<=4 ;i++)
    {
        k=65;
        for(j=1; j<=7; j++)
        {
            if(j>=6-i && j<= i+2)
            {
                printf(" ");

                
            }
            else if(j>=4)
                {
                    
                printf("%c",k);
                k--;
               
                }

            else
                {

                printf("%c",k);
                k++;
                }

        }

     printf("\n");
    }
        
    
 }



 void p8()
 {
    for(i =1; i<=4 ;i++)
    {
        for(j=1; j<=7; j++)
        {
            if(j>=6-i && j<= i+2)
            {
                printf(" ");
            }
            else
                printf("*");
        }
        printf("\n");
    }
 }



  // 7th pattern

  void p7()
  {
    for(i = 1; i<= 5; i++)
    {
        k = 1;
        p=1;
        for(j = 1 ; j<=9; j++)
        {
            if (j>=6-i && j<=4+i)
            {  
                if (k)
                { 
                   
                        printf("%d",p);
                        j<5?p++:p--;
                    }
                    
                

                else
                {
                    printf(" ");
                    if(j==5)
                       p--;
                }
                k=1-k;
            }
            else
               printf(" ");
        }
        printf("\n");
    }
  }



  // 6th pattern

  void p6()
  {
    for(i = 1; i<= 4; i++)
    {
        k = 65;
      
        for(j = 1 ; j<=7; j++)
        {
            if (j>=i && j<=8-i)
            {  
                if(j>= 4){
                    printf("%c",k);
                    k--;
                }
               else{ 
               printf("%c",k);
               k++;
               }
            
               
            }
            else
               printf(" ");
        }
        printf("\n");
    }
  }


  // 5th pattern

  void p5()
  {
    for(i = 1; i<= 4; i++)
    {
        k = 65;
      
        for(j = 1 ; j<=7; j++)
        {
            if (j>=i && j<=8-i)
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



  // 4th pattern

  void p4()
  {
    for(i = 1; i<= 4; i++)
    {
        k = 1;
      
        for(j = 1 ; j<=7; j++)
        {
            if (j>=5-i && j<=i+3)
            {  
                if(j>=4)
               {
                
                printf("%d",k);
                k--;
 
                }
            else{ 
               printf("%d",k);
               k++;
            }
            
               
            }
            else
               printf(" ");
        }
        printf("\n");
    }
  }



  // 3rd pattern

  void p3()
  {
    for(i = 1; i<= 4; i++)
    {
      k = 0;
        for(j = 1 ; j<=7; j++)
        {
            if (j>= 5-i && j<=i+3)
            { 
                
                  printf("* ");
                  j++;
               
            }
            else
               printf(" ");
        }
        printf("\n");
    }
  }




  // 2nd pattern

  void p2()
  {
    for(i = 1; i<= 4; i++)
    {
      
        for(j = 1 ; j<=7; j++)
        {
            if (j>= i && j<=8-i)
            { 
               printf("*");
               
            }
            else
               printf(" ");
        }
        printf("\n");
    }
  }



  // 1th pattern

  void p1()
  {
    for(i = 1; i<= 4; i++)
    {
      
        for(j = 1 ; j<=7; j++)
        {
            if (j>= 5-i && j<=i+3)
            { 
               printf("*");
               
            }
            else
               printf(" ");
        }
        printf("\n");
    }
  }

