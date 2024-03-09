
package Assignmentall50;

public class p25 {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.print("Original Array: ");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        
        System.out.print("\nReversed Array: ");
        for (int i = numbers.length - 1; i >= 0; i--) {
            System.out.print(numbers[i] + " ");
        }
    }
}
