
package Assignmentall50;

import java.util.Scanner;
public class p16 {
    
    public static void main(String[] args){
    
    Scanner marks = new Scanner(System.in);
    
    System.out.print("Enter Sub1 Marks:");
    int Sub1 = marks.nextInt();
    System.out.print("Enter Sub2 Marks:");
    int Sub2 = marks.nextInt();
    System.out.print("Enter Sub2 Marks:");
    int Sub3 = marks.nextInt();
    
    int sum = (Sub1 + Sub2 + Sub3)/3;
    if( Sub1 > 33 && Sub2 > 33 && Sub3 > 33){
        if(sum > 40){
            System.out.println("Pass");
        }
    }
    else{
        System.out.println("Fail");
    }
    }
    
}
