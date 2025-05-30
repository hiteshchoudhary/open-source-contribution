#include<stdio.h>



int main()
  {
  printf("enter the size of Array ");
  int M1[3][3];
  int M2[3][3];
int Sum[3][3];

  int i,j;

  

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
  printf("\nenter 9 number in Matrix2: \n");

   for( i = 0 ; i < 3 ; i++)
  {
    for(j=0 ; j <3 ; j++)
        scanf("%d",&M2[i][j]);
  } 


printf("Second matrix is: \n\n");

  for( i = 0 ; i < 3 ; i++)
  {
    for(j=0 ; j <3 ; j++)
    {
        printf("%d ",M2[i][j]);

    }
    printf("\n");
  } 

  for( i = 0 ; i < 3 ; i++)
  {
    for(j=0 ; j <3 ; j++)
        Sum[i][j] = M1[i][j] + M2[i][j];
  } 

  
  

   printf("Sum of matrix1 and matrix2 is : \n");


  for( i = 0 ; i < 3 ; i++)
  {
    for(j=0 ; j <3 ; j++)
    {
        printf("%d ",Sum[i][j]);

    }
    printf("\n");
  } 

  

  
  
  printf("\n");
  return 0;
  }