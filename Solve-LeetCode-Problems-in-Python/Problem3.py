'''
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1
'''

class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        totalCount = {}
        for i in nums:
            if i in totalCount:
                totalCount[i] += 1
            else:
                totalCount[i] = 1
        min_key = min(totalCount, key=totalCount.get)
        return min_key
result = Solution()
print(result.singleNumber([1]))
    