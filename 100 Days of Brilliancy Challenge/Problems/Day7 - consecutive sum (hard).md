# Day 6 - Consecutive Sum (hard)

## Introduction 
You are given an array of integers. Your task is to find the maximum sum of a consecutive subarray.
- Difficulty: Hard

## Problem Statement
You have to write a program to find the maximum sum of a consecutive subarray in a given array.

## Input
- The first line of the input contains an integer t which represents the number of test cases.
- The input will be an integer n, the size of the array.
- The second line will contain n integers representing the elements of the array.

## Output
- The output should be an integer which represents the maximum sum of a consecutive subarray.


## Constraints
- 1 <= t <= 100
- 1 <= n <= 1000
- -1000 <= arr[i] <= 1000
- The input will be such that the maximum sum of a consecutive subarray will be less than or equal to 10^6.
- The input will be such that the number of test cases will be less than or equal to 10^5.

## Sample Input
```
2
5
1 -2 3 -4 1
6
2 -1 2 3 -9 1
```

## Sample Output
```
3
6
```

## Note
The maximum sum of a consecutive subarray should be printed.

## Tags
- Arrays
- Dynamic Programming

## Date
16-02-2024

## Explanation
Create a function to find the maximum sum of a consecutive subarray.
```python
def maxConsecutiveSum(arr):
    max_sum = float('-inf')
    current_sum = 0
    for num in arr:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum

t = int(input())
for _ in range(t):
    n = int(input())
    arr = list(map(int, input().split()))
    print(maxConsecutiveSum(arr))
```
```java
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int t = input.nextInt();
        for (int i = 0; i < t; i++) {
            int n = input.nextInt();
            int[] arr = new int[n];
            for (int j = 0; j < n; j++) {
                arr[j] = input.nextInt();
            }
            System.out.println(maxConsecutiveSum(arr));
        }
    }
    public static int maxConsecutiveSum(int[] arr) {
        int max_sum = Integer.MIN_VALUE;
        int current_sum = 0;
        for (int num : arr) {
            current_sum = Math.max(num, current_sum + num);
            max_sum = Math.max(max_sum, current_sum);
        }
        return max_sum;
    }
}
```


## Created By
- [Naman Saini / realpxd](https://github.com/realpxd)
