package com.anil.DSA.StringBasic;

import java.util.*;

public class StringProblems {

    public static void printASCII(String str) {
        for (char c : str.toCharArray()) {
            System.out.println(c + " : " + (int) c);
        }
    }

    public static void countCharacters(String str) {
        int letters = 0, digits = 0, special = 0;
        for (char c : str.toCharArray()) {
            if (Character.isLetter(c)) letters++;
            else if (Character.isDigit(c)) digits++;
            else special++;
        }
        System.out.println("Letters: " + letters);
        System.out.println("Digits: " + digits);
        System.out.println("Special Characters: " + special);
    }

    public static void differenceVowelsConsonants(String str) {
        int vowels = 0, consonants = 0;
        str = str.toLowerCase();
        for (char c : str.toCharArray()) {
            if (Character.isLetter(c)) {
                if ("aeiou".indexOf(c) != -1) vowels++;
                else consonants++;
            }
        }
        System.out.println("Difference = " + Math.abs(consonants - vowels));
    }

    public static void toggleCase(String str) {
        StringBuilder sb = new StringBuilder();
        for (char c : str.toCharArray()) {
            if (Character.isUpperCase(c)) sb.append(Character.toLowerCase(c));
            else if (Character.isLowerCase(c)) sb.append(Character.toUpperCase(c));
            else sb.append(c);
        }
        System.out.println("Toggled: " + sb.toString());
    }

    public static void cleanSpaces(String str) {
        str = str.trim().replaceAll("\\s+", " ");
        System.out.println("Cleaned: " + str);
    }

    public static void countWords(String str) {
        str = str.trim();
        if (str.isEmpty()) {
            System.out.println("Word Count: 0");
            return;
        }
        String[] words = str.split("\\s+");
        System.out.println("Word Count: " + words.length);
    }

    public static void maxMinChar(String str) {
        int[] freq = new int[256];
        for (char c : str.toCharArray()) freq[c]++;
        int max = -1, min = Integer.MAX_VALUE;
        char maxChar = ' ', minChar = ' ';
        for (int i = 0; i < 256; i++) {
            if (freq[i] > 0) {
                if (freq[i] > max) {
                    max = freq[i];
                    maxChar = (char) i;
                }
                if (freq[i] < min) {
                    min = freq[i];
                    minChar = (char) i;
                }
            }
        }
        System.out.println("Max Occurring: " + maxChar);
        System.out.println("Min Occurring: " + minChar);
    }

    public static void checkConsecutive(String str) {
        for (int i = 1; i < str.length(); i++) {
            if (str.charAt(i) == str.charAt(i - 1)) {
                System.out.println("Two consecutive: " + str.charAt(i));
            }
            if (i >= 2 && str.charAt(i) == str.charAt(i - 1) && str.charAt(i) == str.charAt(i - 2)) {
                System.out.println("Three consecutive: " + str.charAt(i));
            }
        }
    }

    public static void firstLastIndex(String str) {
        for (char c = 'a'; c <= 'z'; c++) {
            int first = str.indexOf(c);
            int last = str.lastIndexOf(c);
            if (first != -1)
                System.out.println(c + ": First = " + first + ", Last = " + last);
        }
    }

    public static void isPangram(String str) {
        str = str.toLowerCase();
        boolean[] seen = new boolean[26];
        for (char c : str.toCharArray()) {
            if (Character.isLetter(c)) seen[c - 'a'] = true;
        }
        for (boolean b : seen) {
            if (!b) {
                System.out.println("Not a pangram");
                return;
            }
        }
        System.out.println("Pangram");
    }

    public static void insertChar(String str, char ch, int k) {
        StringBuilder sb = new StringBuilder(str);
        sb.insert(0, ch); // first
        sb.insert(sb.length(), ch); // last
        if (k >= 0 && k <= sb.length()) sb.insert(k, ch); // kth
        System.out.println("After insertion: " + sb.toString());
    }

    public static void removeChar(String str, int k) {
        StringBuilder sb = new StringBuilder(str);
        if (sb.length() > 0) sb.deleteCharAt(0); // first
        if (sb.length() > 0) sb.deleteCharAt(sb.length() - 1); // last
        if (k >= 0 && k < sb.length()) sb.deleteCharAt(k); // kth
        System.out.println("After removal: " + sb.toString());
    }

    public static void findSubstring(String str, String target) {
        int index = str.indexOf(target);
        if (index != -1) System.out.println("Found at index: " + index);
        else System.out.println("Not found");
    }

    public static void allSubstrings(String str) {
        int n = str.length();
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j <= n; j++) {
                System.out.println(str.substring(i, j));
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str;
        while (true) {
            System.out.println("\n===== STRING OPERATIONS MENU =====");
            System.out.println("1. Print ASCII Value of Each Character");
            System.out.println("2. Count Letters, Numbers, Special Characters");
            System.out.println("3. Difference of Vowels and Consonants");
            System.out.println("4. Toggle Case");
            System.out.println("5. Remove Extra Spaces");
            System.out.println("6. Count Words");
            System.out.println("7. Max and Min Occurring Characters");
            System.out.println("8. Check Consecutive Identical Characters");
            System.out.println("9. First and Last Index of Each Character");
            System.out.println("10. Check if Pangram");
            System.out.println("11. Insert Character at First, Last, Kth");
            System.out.println("12. Remove Character at First, Last, Kth");
            System.out.println("13. Find Substring");
            System.out.println("14. Generate All Substrings");
            System.out.println("15. Exit");
            System.out.print("Choose an option (1-15): ");
            int choice = sc.nextInt();
            sc.nextLine(); // Consume newline

            if (choice == 15) break;

            if (choice != 11 && choice != 12 && choice != 13) {
                System.out.print("Enter the string: ");
                str = sc.nextLine();
            } else {
                System.out.print("Enter the base string: ");
                str = sc.nextLine();
            }

            switch (choice) {
                case 1 -> printASCII(str);
                case 2 -> countCharacters(str);
                case 3 -> differenceVowelsConsonants(str);
                case 4 -> toggleCase(str);
                case 5 -> cleanSpaces(str);
                case 6 -> countWords(str);
                case 7 -> maxMinChar(str);
                case 8 -> checkConsecutive(str);
                case 9 -> firstLastIndex(str);
                case 10 -> isPangram(str);
                case 11 -> {
                    System.out.print("Enter character to insert: ");
                    char ch = sc.next().charAt(0);
                    System.out.print("Enter position k: ");
                    int k = sc.nextInt();
                    insertChar(str, ch, k);
                }
                case 12 -> {
                    System.out.print("Enter position k to remove: ");
                    int k = sc.nextInt();
                    removeChar(str, k);
                }
                case 13 -> {
                    System.out.print("Enter substring to find: ");
                    String sub = sc.nextLine();
                    findSubstring(str, sub);
                }
                case 14 -> allSubstrings(str);
                default -> System.out.println("Invalid choice.");
            }
        }
        sc.close();
    }
}

