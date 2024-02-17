# Day 8 - Unique Subarrays (medium)

## Introduction 
You are given an array of integers. Your task is to find the number of unique subarrays with the maximum sum among all possible subarrays.
- Difficulty: Medium

## Problem Statement
Given an array of integers, find the number of unique subarrays with the maximum sum. A subarray is a contiguous sequence of elements within the array.

Write a function or program to calculate the count of unique subarrays with the maximum sum.

## Input
- The input consists of an integer n (1 ≤ n ≤ 100), representing the size of the array.
- The next line contains n space-separated integers, each representing an element of the array.

## Output
- Output a single integer representing the count of unique subarrays with the maximum sum.

## Example
### Sample Input 1
```
5
1 2 3 -2 5
```

### Sample Output 1
```
3
```
### Sample Explanation 1
- The subarrays with the maximum sum are: [1, 2, 3], [3, -2, 5], and [1, 2, 3, -2, 5].

### Sample Input 2
```
4
-1 -2 -3 -4
```

### Sample Output 2
```
1
```
### Sample Explanation 2
- The only subarray with the maximum sum is [-1].

## Constraints
- The array elements are integers in the range [-100, 100].
- The input array will have at least one positive element.
- The maximum sum of a subarray will not exceed 10^5.
- There will always be at least one subarray with the maximum sum.

## Tags
- Arrays
- Dynamic Programming
- Subarrays

## Date
17-02-2024

## Created by
- [Naman Saini / realpxd](https://github.com/realpxd)