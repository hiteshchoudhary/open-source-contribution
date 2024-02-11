// Leetcode link: https://leetcode.com/problems/sort-colors/description/ 

// SORT COLORS

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.

// Solution:

#include <bits/stdc++.h>
using namespace std;

void sortColors(vector<int>& nums) {
    int n = nums.size();
    int low = 0;
    int mid = 0;
    int high = n-1;

    while(mid<=high) {
        if(nums[mid]==0) {
            swap(nums[low],nums[mid]);
            low++;
            mid++;
        }
        else if(nums[mid]==1) {
            mid++;
        }
        else if(nums[mid]==2) {
            swap(nums[mid],nums[high]);
            high--;
        }
    }
    
    // for(int i=0;i<n;i++) {
    //     cout<<nums[i]<<" ";
    // }
    
}

int main() {
    int n;
    cin>>n;
    
    vector <int> a(n);
    
    for(int i=0;i<n;i++) {
        cin>>a[i];
    }
    sortColors(a);
    return 0;
}

