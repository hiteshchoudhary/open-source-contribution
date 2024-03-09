
package Assignmentall50;

public class p24 {
    public static void main(String[] args) {
        int[] numbers = {10, 5, 20, 15, 25};
        
        int max = numbers[0];
        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        System.out.println("Maximum Number: " + max);
    }
}
