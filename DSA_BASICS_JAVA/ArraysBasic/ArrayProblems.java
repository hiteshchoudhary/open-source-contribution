package com.anil.DSA.ArraysBasic;

import java.util.*;

public class ArrayProblems {

    public static void main(String[] args) {
        int[] arr = {5, 3, 8, 6, 3, 5, 2, 8, 10};

        System.out.println("1. Print Elements and Indices:");
        printElementsAndIndices(arr);

        System.out.println("\n2. Reverse Order:");
        printReverse(arr);

        System.out.println("\n3. Alternate Elements:");
        printAlternate(arr);

        System.out.println("\n4. Duplicate Array:");
        int[] copy = duplicateArray(arr);
        System.out.println(Arrays.toString(copy));

        System.out.println("\n5. Odd and Even Arrays:");
        splitOddEven(arr);

        System.out.println("\n6. Sum and Product:");
        sumAndProduct(arr);

        System.out.println("\n7. Count Occurrences of 5:");
        System.out.println(countOccurrences(arr, 5));

        System.out.println("\n8. Check Sort Type:");
        checkSortType(new int[]{1, 2, 3, 4});
        checkSortType(new int[]{9, 7, 3});
        checkSortType(new int[]{1, 3, 2});

        System.out.println("\n9. Unique and Duplicates Count:");
        countUniqueAndDuplicates(arr);

        System.out.println("\n10. Two Sum (Target 13):");
        System.out.println(twoSumExists(arr, 13));

        System.out.println("\n11. Three Sum (Target 21):");
        System.out.println(threeSumExists(arr, 21));

        System.out.println("\n12. Maximum Element: " + maxElement(arr));
        System.out.println("13. Minimum Element: " + minElement(arr));
        System.out.println("14. Second Max: " + secondMax(arr));
        System.out.println("15. Second Min: " + secondMin(arr));

        System.out.println("\n16. Insert 99 at position 4:");
        arr = insertAtPosition(arr, 4, 99);
        System.out.println(Arrays.toString(arr));

        System.out.println("\n17. Delete at position 4:");
        arr = deleteAtPosition(arr, 4);
        System.out.println(Arrays.toString(arr));
    }

    public static void printElementsAndIndices(int[] arr) {
        for (int i = 0; i < arr.length; i++)
            System.out.println("Index " + i + " = " + arr[i]);
    }

    public static void printReverse(int[] arr) {
        for (int i = arr.length - 1; i >= 0; i--)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    public static void printAlternate(int[] arr) {
        for (int i = 0; i < arr.length; i += 2)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    public static int[] duplicateArray(int[] arr) {
        return Arrays.copyOf(arr, arr.length);
    }

    public static void splitOddEven(int[] arr) {
        List<Integer> odd = new ArrayList<>();
        List<Integer> even = new ArrayList<>();
        for (int num : arr) {
            if (num % 2 == 0) even.add(num);
            else odd.add(num);
        }
        System.out.println("Odd: " + odd);
        System.out.println("Even: " + even);
    }

    public static void sumAndProduct(int[] arr) {
        int sum = 0, product = 1;
        for (int num : arr) {
            sum += num;
            product *= num;
        }
        System.out.println("Sum = " + sum);
        System.out.println("Product = " + product);
    }

    public static int countOccurrences(int[] arr, int target) {
        int count = 0;
        for (int num : arr)
            if (num == target) count++;
        return count;
    }

    public static void checkSortType(int[] arr) {
        boolean asc = true, desc = true;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) asc = false;
            if (arr[i] > arr[i - 1]) desc = false;
        }
        if (asc) System.out.println("Sorted in Ascending Order");
        else if (desc) System.out.println("Sorted in Descending Order");
        else System.out.println("Not Sorted");
    }

    public static void countUniqueAndDuplicates(int[] arr) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : arr)
            map.put(num, map.getOrDefault(num, 0) + 1);

        int unique = 0, duplicate = 0;
        for (int val : map.values()) {
            if (val == 1) unique++;
            else duplicate++;
        }
        System.out.println("Unique elements = " + unique);
        System.out.println("Duplicate elements = " + duplicate);
    }

    public static boolean twoSumExists(int[] arr, int target) {
        Set<Integer> set = new HashSet<>();
        for (int num : arr) {
            if (set.contains(target - num)) return true;
            set.add(num);
        }
        return false;
    }

    public static boolean threeSumExists(int[] arr, int target) {
        Arrays.sort(arr);
        for (int i = 0; i < arr.length - 2; i++) {
            int l = i + 1, r = arr.length - 1;
            while (l < r) {
                int sum = arr[i] + arr[l] + arr[r];
                if (sum == target) return true;
                else if (sum < target) l++;
                else r--;
            }
        }
        return false;
    }

    public static int maxElement(int[] arr) {
        int max = Integer.MIN_VALUE;
        for (int num : arr)
            max = Math.max(max, num);
        return max;
    }

    public static int minElement(int[] arr) {
        int min = Integer.MAX_VALUE;
        for (int num : arr)
            min = Math.min(min, num);
        return min;
    }

    public static int secondMax(int[] arr) {
        int max = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > max) {
                second = max;
                max = num;
            } else if (num > second && num != max) {
                second = num;
            }
        }
        return (second == Integer.MIN_VALUE) ? -1 : second;
    }

    public static int secondMin(int[] arr) {
        int min = Integer.MAX_VALUE, second = Integer.MAX_VALUE;
        for (int num : arr) {
            if (num < min) {
                second = min;
                min = num;
            } else if (num < second && num != min) {
                second = num;
            }
        }
        return (second == Integer.MAX_VALUE) ? -1 : second;
    }

    public static int[] insertAtPosition(int[] arr, int pos, int val) {
        if (pos < 0 || pos > arr.length)
            throw new IllegalArgumentException("Invalid position");
        int[] result = new int[arr.length + 1];
        for (int i = 0; i < pos; i++)
            result[i] = arr[i];
        result[pos] = val;
        for (int i = pos; i < arr.length; i++)
            result[i + 1] = arr[i];
        return result;
    }

    public static int[] deleteAtPosition(int[] arr, int pos) {
        if (pos < 0 || pos >= arr.length)
            throw new IllegalArgumentException("Invalid position");
        int[] result = new int[arr.length - 1];
        for (int i = 0; i < pos; i++)
            result[i] = arr[i];
        for (int i = pos + 1; i < arr.length; i++)
            result[i - 1] = arr[i];
        return result;
    }
}
