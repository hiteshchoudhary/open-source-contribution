#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from __future__ import annotations
from typing import List


# PROBLEM URL: https://leetcode.com/problems/two-sum/description


class Solution(object):
    def two_sum_naive(self, nums: List[int], target: int) -> List[int]:
        # Brute forcee solution using nested loops
        # Time Complexity: O(n^2), Space Complexity: O(1)
        if not nums:
            return []
        for i in range(len(nums) - 1):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return []

    def two_sum_efficient(self, nums: List[int], target: int) -> List[int]:
        # using hashtable for efficiently check the sum equal to the target
        # Time Complexity: O(n), Space Complexity: O(n)
        table = {}
        for i, num in enumerate(nums):
            remaining = target - num

            if remaining in table:
                return [i, table[remaining]]
            else:
                table[num] = i
        return []


def main() -> None:
    nums = [1, 22, 30, 40, 43, 45, 66, 69, 70, 72, 79, 80]
    target = 71  # [0, 8] or [8, 0]

    instance = Solution()
    res = instance.two_sum_efficient(nums, target)
    print(res)


if __name__ == "__main__":
    main()
