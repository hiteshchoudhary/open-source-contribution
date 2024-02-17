# Day 2 - Fibonacci Series (Medium)

## Introduction
This is a simple problem to help you get started. You have to print the Fibonacci series.
- Difficulty: Medium

## Problem Statement
Write a program to print the Fibonacci series upto `n` terms.
```
0 1 1 2 3 5 8 13 21 34 ..n
```

## Input
The input will be a single integer `n` where `n` is the number of terms in the Fibonacci series.

## Output
The output should be the Fibonacci series upto `n` terms.

## Sample Input
```
10
```

## Sample Output
```
0 1 1 2 3 5 8 13 21 34
```

## Note
The Fibonacci series should be printed exactly as mentioned in the problem statement. Don't forget to add the base cases.

## Tags
- Loops
- Fibonacci
- Basics

## Date
11-02-2024

## Explanation
Create a loop that runs from 0 to n and print the Fibonacci series for each iteration.

```python
a, b = 0, 1
for i in range(n):
    print(a, end=' ')
    a, b = b, a + b
```
```java
int a = 0, b = 1;
for (int i = 0; i < n; i++) {
    System.out.print(a + " ");
    int c = a + b;
    a = b;
    b = c;
}
```

## Created By
- [Naman Saini / realpxd](https://github.com/realpxd)
