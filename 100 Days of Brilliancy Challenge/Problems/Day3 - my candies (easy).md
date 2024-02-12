# Day 3 - My Candies (Medium)

## Introduction
You have to distribute candies among students in such a way that each student gets the same number of candies except for the last student who gets the remaining candies. 
- Difficulty: Easy

## Problem Statement
Write a program to find the number of candies each student gets and the number of candies the last student gets. You have to take two inputs, the number of students and the number of candies.

## Input
The input will be two integers `N` and `M` where `N` is the number of students and `M` is the number of candies.

## Output
The output should be two integers, the number of candies each student gets and the number of candies the last student gets.

## Sample Input
```
3 10
```

## Sample Output
```
3 1
```

## Note
Must try to solve the problem using the modulus operator.

## Tags
- Basics
- Operators

## Date
12-02-2024

## Explanation
Divide the number of candies by the number of students to get the number of candies each student gets and take the modulus to get the number of candies the last student gets.

```python
n, m = map(int, input().split())
print(m // n, m % n)
```
```java
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        System.out.println(m / n + " " + m % n);
    }
}
```

## Created By
- [Naman Saini / realpxd](https://github.com/realpxd)