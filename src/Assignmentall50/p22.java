
package Assignmentall50;

public class p22 {
        public static void main(String[] args) {
        int[] numbers = {5, 10, 15, 20, 25};
        double sum = 0.0;
        
        for (int num : numbers) {
            sum += num;
        }
        double average = sum / numbers.length;
        System.out.println("Average: " + average);
    }
}
