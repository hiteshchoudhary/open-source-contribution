

// assignment 2



// 1. Write a program to calculate average of three integers. Numbers are given by the user

/*
#include<stdio.h>
int main()
{
  printf("enter three number with space ");
  int a,b,c;
  scanf("%d %d %d",&a ,&b ,&c);
  float average = (a+b+c)/3.0;
  printf("average of these three number is %f",average);
  printf("\n");
  return 0;
}
*/


// 2. Write a program to calculate circumference of a circle.
/*

#include<stdio.h>
int main()
{
  printf("enter radious of circule ");
  int r;
  scanf("%d",&r);
  float s = 2*3.14*r;
  printf("the circumference of circle is %f",s);
  printf("\n");
  return 0;
} 
*/
// 3. Write a program to calculate simple interest.

/*
#include<stdio.h>
int main()
{
  printf("enter the value of principale  rate and time  ");
  int p,t;
  float r;
  scanf("%d %f %d",&p,&r,&t);
  float si = (p*r*t)/100;
  printf("Simpel interest is %f",si);
  printf("\n");
  return 0;
}

*/
// 4. Write a program to calculate volume of a cuboid.

/**/
// v = l*b*h
// 5. Write a program to ask user about the cost price and selling price banana per dozen. Calculate the profit or loss earned upon selling 25 bananas.

#include<stdio.h>
int main(){
    printf("enter the cost price of 25 banana ");
    int cost;
    scanf("%d",&cost);
    printf("now enter the selling price of 25 banannan ");
    int sell;

    scanf("%d",&sell);
    if (sell > cost){
        printf("you are earn profit of %d", sell-cost);
    }
    else if(sell < cost){
        printf("you get loss of %d",cost-sell);

    }
    
    
    else{
        printf("the selling price and cost price is same which is %d so you not in loss nor in profite",sell);
    }
    
     

     printf("\n");
     return 0;
    
}

// 6. Write a program to input a character from the user and print its ASCII code.

/*
#include<stdio.h>
int main()
{
  printf("enter a key ");
  char c ;
  scanf("%c",&c);
  printf("The ASCII code of %c is %d",c,c);
  printf("\n");
  return 0;
}

*/


//7. Write a program to input an ASCII code from the user and print its corresponding character.

/*

#include<stdio.h>
int main()
{
  printf("enter an ASCII code ");
  int c ;
  scanf("%d",&c);
  printf("The corresponding character is %c for  ASCII code  of %d",c,c);
  printf("\n");
  return 0;
}

*/
// 8. Write a program to input three characters from the user and display characters with their corresponding ASCII codes.

/*

#include<stdio.h>
int main()
{
  printf("enter three character ");
  char a,b,c ;
  scanf("%c %c %c",&a,&b ,&c);
  printf("The   ASCII code  of %c is %d and for %c is %d and for %c is %d and",a,a,b,b,c,c);
  printf("\n");
  return 0;
}

*/
// 9. WAP to take date as an input in below given format and convert the date format and display the result as given below.

/*
#include<stdio.h>
int main()
{
  printf("enter the date in for off dd/mm/yy  ");
  int d,m,y;
  scanf("%d %d %d",&d,&m,&y);
  printf("the entered date  day - %d , month - %d , year - %d",d,m,y);
  printf("\n");
  return 0;

}
*/


// User Input date format - "DD/MM/YYYY" (27/11/2022)

// Output format - "Day - DD, Month - MM, Year - YYYY" (Day-27, Month-07, Year - 2022)

// 10. WAP to take time as an input in below given format and convert the time format and display the result as given below.

/*

#include<stdio.h>
int main()
{
  printf("enter the time in form of hh:mm  ");
  int d,m;
  scanf("%d:%d",&d,&m);
  printf("the entered time HH - %d  and MM - %d , ",d,m);
  printf("\n");
  return 0;

}
// User Inpuht date format - "HH:MM"

// Output format - "HH hour and MM Minute" -->


*/