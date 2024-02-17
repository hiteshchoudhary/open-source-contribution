# Day 5 - Dices (medium)

## Introduction 
You are given t test cases. Each test case contains two integers n and x. You have to find the number of ways to get the sum x by rolling n dices. 
- Difficulty: Medium

## Problem Statement
You have to write a program to find the number of ways to get the sum x by rolling n dices.
- A dice has 6 faces with numbers from 1 to 6.
- You have to find the number of ways to get the sum x by rolling n dices.

## Input
- The first line of the input contains an integer t which represents the number of test cases.
- The input will be two integers n and x.
- The first integer n represents the number of dices.
- The second integer x represents the sum.

## Output
- The output should be an integer which represents the number of ways to get the sum x by rolling n dices.

## Sample Input
```
2
2 7
3 6
```

## Sample Output
```
6
10
```

## Note
The number of ways to get the sum x by rolling n dices should be printed.

## Tags
- Recursion
- Leveling Up

## Date
14-02-2024

## Explanation
Create a recursive function to find the number of ways to get the sum x by rolling n dices.
```python
def findWays(n, x):
    if n == 0:
        return 0
    if x == 0:
        return 1
    if x < n or x > 6 * n:
        return 0
    ways = 0
    for i in range(1, 7):
        ways += findWays(n - 1, x - i)
    return ways
t = int(input())
for _ in range(t):
    n, x = map(int, input().split())
    print(findWays(n, x))
```
```java
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int t = input.nextInt();
        for (int i = 0; i < t; i++) {
            int n = input.nextInt();
            int x = input.nextInt();
            System.out.println(findWays(n, x));
        }
    }
    public static int findWays(int n, int x) {
        if (n == 0) {
            return 0;
        }
        if (x == 0) {
            return 1;
        }
        if (x < n || x > 6 * n) {
            return 0;
        }
        int ways = 0;
        for (int i = 1; i <= 6; i++) {
            ways += findWays(n - 1, x - i);
        }
        return ways;
    }
}
```

## Constraints
- 1 <= t <= 100
- 1 <= n <= 100
- 1 <= x <= 600
- The input will be such that the number of ways to get the sum x by rolling n dices will be less than or equal to 10^9.
- The input will be such that the number of test cases will be less than or equal to 10^5.
- The input will be such that the number of dices will be less than or equal to 10^5.
- The input will be such that the sum will be less than or equal to 10^5.

## Created by 
- [Naman Saini / realpxd](https://github.com/realpxd)