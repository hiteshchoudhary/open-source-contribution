# Day 4 - Spiderman (Easy)

## Introduction
Suppose you're the spiderman and you have 10 suits. Each suit has a different power. You have to choose the best suit for the given situation. You have to write a program to choose the best suit for the given situation.
- Difficulty: Easy

## Problem Statement
You have to write a program to choose the best suit for the given situation 
- If the situation is "fighting with a villain", then the best suit is "Iron Spider Suit".
- If the situation is "swinging through the city", then the best suit is "Classic Suit".
- If the situation is "fighting with a villain and swinging through the city", then the best suit is "Black Suit".
- If the situation is "none of the above", then the best suit is "Homecoming Suit".

## Input
- The input will be a string which represents the situation.

## Output
- The output should be a string which represents the best suit for the given situation.


## Sample Input
```
```

## Sample Output
```
```

## Note
The best suit should be printed exactly as mentioned in the problem statement.

## Tags
- Conditional Statements
- Basics

## Date
13-02-2024

## Explanation
Create a conditional statement to check the situation and print the best suit for the given situation.

```python
situation = input()
if situation == "fighting with a villain":
    print("Iron Spider Suit")
elif situation == "swinging through the city":
    print("Classic Suit")
elif situation == "fighting with a villain and swinging through the city":
    print("Black Suit")
else:
    print("Homecoming Suit")
```
```java
String situation = input.nextLine();
if (situation.equals("fighting with a villain")) {
    System.out.println("Iron Spider Suit");
} else if (situation.equals("swinging through the city")) {
    System.out.println("Classic Suit");
} else if (situation.equals("fighting with a villain and swinging through the city")) {
    System.out.println("Black Suit");
} else {
    System.out.println("Homecoming Suit");
}
```

## Created By
- [Naman Saini / realpxd](https://github.com/realpxd)





