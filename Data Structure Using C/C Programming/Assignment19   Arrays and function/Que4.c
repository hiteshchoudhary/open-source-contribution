#include<stdio.h>



void rotateArray(int A[], int n, int d, int m) {
    int temp, i;
    while (m > 0)
     {
        if (d == 1) 
        { 
            temp = A[n - 1];
            for (i = n - 1; i > 0; i--) 
            {
                A[i] = A[i - 1];
            }
            A[0] = temp;
        } else if (d == -1) 
        { // Left rotation
            temp = A[0];
            for (i = 0; i < n - 1; i++)
             {
                A[i] = A[i + 1];
            }
            A[n - 1] = temp;
        }
        m--;
    }
}


int main()
  {
  printf("enter the size of Array ");
  int n,i,j;
  scanf("%d",&n);
  int arr[n];

  printf("Now enter %d number in Array \n",n);

  for( i = 0 ; i < n ; i++)
  {
    scanf("%d",&arr[i]);
  } 

printf("now enter 1 for Right rotation \n or enter -1 for Left rotation");
int d;
scanf("%d",&d);
if(d != 1 && d != -1)
  {
  printf("invalid choice.");
     
  }

printf("Enter how many time you want to rotet Array ");

int m;
scanf("%d",&m);

rotateArray(arr,n,d,m);

printf("\n After Roteting new Array become as: \n");

for(i=0 ; i<n ; i++)
     printf("%d, ",arr[i]);

  
  printf("\n");
  return 0;
  }