#include<stdio.h>



int main()
  {
  printf("enter the size of Array ");
  int M1[3][3];
  int M2[3][3];
  int C[3][3];

  int i,j,k , sum = 0;

  

  printf("enter 9 number in Matrix1: \n");

  for( i = 0 ; i < 3 ; i++)
  {
    for(j=0 ; j <3 ; j++)
        scanf("%d",&M1[i][j]);
  } 

printf("first matrix is: \n");

  for( i = 0 ; i < 3 ; i++)
  {
    for(j=0 ; j <3 ; j++)
    {
        printf("%d ",M1[i][j]);

    }
    printf("\n");
  } 
  

  for( i = 0 ; i < 3 ; i++)
  {
    for(j=0 ; j <3 ; j++)
       {
        if(M1[i] != M1[j])
        {
            M2[i][j] = M1[j][i];
           
        }
        else
            M2[i][j]=M1[i][j];
       }
  } 

  
  

   printf("After Transpose of matrix1 is : \n");


  for( i = 0 ; i < 3 ; i++)
  {
    for(j=0 ; j <3 ; j++)
    {
        printf("%d ",M2[i][j]);

    }
    printf("\n");
  } 

  

  
  
  printf("\n");
  return 0;
  }