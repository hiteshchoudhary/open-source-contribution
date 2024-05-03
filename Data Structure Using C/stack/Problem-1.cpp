// LeetCode Problem 
// https://leetcode.com/problems/powx-n/

Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25



Solution in C++ 
  class Solution {
public:
    double myPow(double x, int n) {
        long long N = n; 
        double result = 1.0;
        if (N < 0) {
            x = 1 / x;
            N = -N;
        }
        double current_product = x;
        for (long long i = N; i > 0; i /= 2) {
            if (i % 2 == 1) {
                result *= current_product;
            }
            current_product *= current_product;
        }
        return result;
    }
};


