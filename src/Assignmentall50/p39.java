
package Assignmentall50;

public class p39 {
     public static void main(String[] args) {
        int[] numbers = { 1, 2, 3 };
        int index = 4;

        try {
            int result = numbers[index];
            System.out.println("Result: " + result);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Invalid index");
        } catch (Exception e) {
            System.out.println("Error: Something went wrong");
        }
    }
}
