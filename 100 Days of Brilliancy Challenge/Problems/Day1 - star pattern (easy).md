# Day 1 - Star Pattern (Easy)

## Introduction
This is a simple problem to help you get started. You have to print a pattern of stars.
- Difficulty: Easy

## Problem Statement
Write a program to print the following pattern:
```
*
**
***
****
*****
```

## Input
There is no input for this problem.

## Output
The output should be the pattern mentioned in the problem statement.

## Sample Input
```
```

## Sample Output
```
*
**
***
****
*****
```

## Note
The pattern should be printed exactly as mentioned in the problem statement.

## Tags
- Loops
- Patterns
- Basics

## Date
10-02-2024

## Explanation
Create a loop that runs from 1 to 5 and print `*` for each iteration.

```python
for i in range(1, 6):
    print('*' * i)
```
```java
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("*");
    }
    System.out.println();
}
```

## Created By
- [Naman Saini / realpxd](https://github.com/realpxd)


