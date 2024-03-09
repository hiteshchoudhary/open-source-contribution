
package Assignmentall50;

import java.util.Scanner;

public class p17 {
    public static void main (String[] args){
    
    System.out.print("Enter Your Income in Lakhs per anum:");
    Scanner sc = new Scanner(System.in);
    float tax = 0;
    float income = sc.nextFloat();
    if(income<2.5f){
        tax = tax + 0;
    }
    else if(income>2.5f && income<=5f){
        tax = tax + 0.05f * (income - 2.5f);
    }
    else if(income>5f && income<=10.0f){
        tax = tax + 0.05f * (5f - 2.5f);
        tax = tax + 0.20f * (income - 5f);
    }
    else if(income>10.0f){
        tax = tax + 0.05f * (5f - 2.5f);
        tax = tax + 0.20f * (10f - 5f);
        tax = tax + 0.30f * (income - 10f);
    }
    
    System.out.println(tax);
    }
}
