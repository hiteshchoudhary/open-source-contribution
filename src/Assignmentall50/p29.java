
package Assignmentall50;

public class p29 {
    public static void main(String[] args) {
        int num1 = 10, num2 = 15, num3 = 5;
        int largest;
        
        if (num1 >= num2 && num1 >= num3) {
            largest = num1;
        } else if (num2 >= num1 && num2 >= num3) {
            largest = num2;
        } else {
            largest = num3;
        }
        System.out.println("Largest number: " + largest);
    }
}
