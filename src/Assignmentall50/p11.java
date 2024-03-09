
package Assignmentall50;
import java.util.Scanner;

public class p11 {
    public static boolean isPrime(int number) {
        if (number <= 1) {
            return false;
        }
        
        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }
        
        return true;
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter the upper limit: ");
        int limit = scanner.nextInt();
        
        System.out.println("Prime numbers up to " + limit + ":");
        
        for (int i = 2; i <= limit; i++) {
            if (isPrime(i)) {
                System.out.print(i + " ");
            }
        }
    }
}

