package com.anil.DSA.MathBasic;

import java.util.*;

public class BasicMaths {

    // 1. Basic Arithmetic Operations
    public static void performBasicOps(int a, int b) {
        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        if (b != 0)
            System.out.println("Division: " + ((double) a / b));
        else
            System.out.println("Division by zero is not allowed.");
    }

    // 2. Sum of Digits
    public static int sumOfDigits(int n) {
        int sum = 0;
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }
        return sum;
    }

    // 3. Reverse a Number
    public static int reverseNumber(int n) {
        int rev = 0;
        while (n != 0) {
            rev = rev * 10 + n % 10;
            n /= 10;
        }
        return rev;
    }

    // 4. Check Palindrome
    public static boolean isPalindrome(int n) {
        return n == reverseNumber(n);
    }

    // 5. Check Armstrong Number
    public static boolean isArmstrong(int n) {
        int sum = 0, temp = n, digits = String.valueOf(n).length();
        while (temp > 0) {
            sum += Math.pow(temp % 10, digits);
            temp /= 10;
        }
        return sum == n;
    }

    // 6. Count digit '1' from 1 to n
    public static int countDigitOne(int n) {
        int count = 0;
        for (int i = 1; i <= n; i++) {
            int x = i;
            while (x > 0) {
                if (x % 10 == 1)
                    count++;
                x /= 10;
            }
        }
        return count;
    }

    // 7. Generate Fibonacci up to limit
    public static void printFibonacci(int limit) {
        int a = 0, b = 1;
        while (a <= limit) {
            System.out.print(a + " ");
            int temp = b;
            b = a + b;
            a = temp;
        }
        System.out.println();
    }

    // 8. Factorial
    public static long factorial(int n) {
        long fact = 1;
        for (int i = 2; i <= n; i++)
            fact *= i;
        return fact;
    }

    // 9. Trailing Zeros in Factorial
    public static int countTrailingZeros(int n) {
        int count = 0;
        for (int i = 5; n / i >= 1; i *= 5)
            count += n / i;
        return count;
    }

    // 10. LCM and GCD
    public static int gcd(int a, int b) {
        if (b == 0)
            return a;
        return gcd(b, a % b);
    }

    public static int lcm(int a, int b) {
        return (a * b) / gcd(a, b);
    }

    // 11. Check Prime
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i * i <= n; i++)
            if (n % i == 0) return false;
        return true;
    }

    // 12. Co-Prime Check
    public static boolean areCoPrime(int a, int b) {
        return gcd(a, b) == 1;
    }

    // 13. All Divisors of a Number
    public static void printDivisors(int n) {
        for (int i = 1; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                System.out.print(i + " ");
                if (n / i != i)
                    System.out.print((n / i) + " ");
            }
        }
        System.out.println();
    }

    // 14. Modulo Operations
    public static void moduloOps(int a, int b) {
        if (b == 0)
            System.out.println("Modulo by zero is undefined.");
        else
            System.out.println("Modulo: " + (a % b));
    }

    // 15. Divisibility Rules from 1 to 20
    public static void divisibilityCheck(int n) {
        for (int i = 1; i <= 20; i++) {
            if (n % i == 0)
                System.out.println(n + " is divisible by " + i);
        }
    }

    public static void main(String[] args) {
        int a = 12, b = 8;
        int num = 153;

        performBasicOps(a, b);
        System.out.println("Sum of digits: " + sumOfDigits(num));
        System.out.println("Reversed: " + reverseNumber(num));
        System.out.println("Is Palindrome? " + isPalindrome(num));
        System.out.println("Is Armstrong? " + isArmstrong(num));
        System.out.println("Count of 1's from 1 to " + num + ": " + countDigitOne(num));
        System.out.print("Fibonacci up to " + num + ": ");
        printFibonacci(num);
        System.out.println("Factorial of " + a + ": " + factorial(a));
        System.out.println("Trailing Zeros in " + a + "!: " + countTrailingZeros(a));
        System.out.println("GCD: " + gcd(a, b) + ", LCM: " + lcm(a, b));
        System.out.println("Is " + a + " Prime? " + isPrime(a));
        System.out.println("Are " + a + " and " + b + " Co-Prime? " + areCoPrime(a, b));
        System.out.print("Divisors of " + num + ": ");
        printDivisors(num);
        moduloOps(a, b);
        System.out.println("Divisibility Rules for " + num + ":");
        divisibilityCheck(num);
    }
}
