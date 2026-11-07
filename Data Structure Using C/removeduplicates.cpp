#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        // Handle edge case for empty array
        if (nums.empty()) return 0;
        
        int i = 0; // Slow pointer for unique elements
        
        // Fast pointer 'j' scans through the array
        for (int j = 1; j < nums.size(); j++) {
            if (nums[j] != nums[i]) {
                i++; // Move to the next unique position
                nums[i] = nums[j]; // Copy the new unique value
            }
        }
        
        // The number of unique elements is the index + 1
        return i + 1;
    }
};

int main() {
    Solution solution;
    
    // Sample input with duplicates
    vector<int> nums = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};
    
    cout << "Original array: ";
    for (int num : nums) {
        cout << num << " ";
    }
    cout << "\n";

    // Call the function
    int k = solution.removeDuplicates(nums);
    
    // Print results
    cout << "Number of unique elements (k): " << k << "\n";
    cout << "Modified array (first " << k << " elements): ";
    for (int i = 0; i < k; i++) {
        cout << nums[i] << " ";
    }
    cout << "\n";
    
    return 0;
}
