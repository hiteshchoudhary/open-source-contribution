
package Assignmentall50;

public class p10 {
    public static void main(String[] args) {
        int number = 5;
        
        int factorial = 1;
        
        System.out.println("Number: " + number);
        
        for (int i = 1; i <= number; i++) {
            factorial *= i;
//            factorial = factorial * i;
        }
        System.out.println("Factorial: " + factorial);
    }
}
