# Day 5 - Array (Medium)

## Introduction
This is a simple problem to help you get started. You have to figure out the minimum sum of the array.
- Difficulty: Medium

## Problem Statement
You are given an array of integers. You have to find the minimum sum of the array. You can perform the following operations:
- Choose any two elements of the array and replace them with their sum.
- The sum of the two elements will be added to the total sum of the array.


# Input
- The first line of the input contains an integer `t` denoting the number of test cases.
- The first line of each test case contains an integer `n` denoting the number of elements in the array.
- The second line of each test case contains `n` space-separated integers denoting the elements of the array.

# Output
- For each test case, print the minimum sum of the array.

# Constraints
- 1 <= t <= 100
- 1 <= n <= 100
- 1 <= arr[i] <= 100

# Sample Input
```
2
3
1 2 3
4
1 2 3 4
```

# Sample Output
```
6
19
```

# Note
- You have to perform the above operation until the array has only one element left.
- For the first test case, the array will be `[1, 2, 3]` -> `[3, 3]` -> `[6]`.
- For the second test case, the array will be `[1, 2, 3, 4]` -> `[3, 3, 4]` -> `[6, 4]` -> `[10]` -> `[14]` -> `[19]`.

# Tags
- Arrays
- Basics
- Medium

# Date
15-02-2024

# Explanation

```python
def min_sum(arr):
    while len(arr) > 1:
        arr.sort()
        arr[0] += arr[1]
        arr.pop(1)
    return arr[0]

t = int(input())
for _ in range(t):
    n = int(input())
    arr = list(map(int, input().split()))
    print(min_sum(arr))
```
```java
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            while (n > 1) {
                Arrays.sort(arr);
                arr[0] += arr[1];
                for (int i = 1; i < n - 1; i++) {
                    arr[i] = arr[i + 1];
                }
                n--;
            }
            System.out.println(arr[0]);
        }
    }
}
```


## Created By
- [Naman Saini / realpxd](https://github.com/realpxd)

