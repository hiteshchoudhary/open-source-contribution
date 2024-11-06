#include <iostream>
#include <vector>

/** PROBLEM URL: https://leetcode.com/problems/two-sum/description/ */

class Solution {
public:
  std::vector<int> twosum(std::vector<int> &nums, int target);
};

std::vector<int> Solution::twosum(std::vector<int> &nums, int target) {
  std::vector<int> res;
  if (nums.empty()) {
    return res;
  } else {
    for (int i = 0; i < nums.size() - 1; i++) {
      for (int j = i + 1; j < nums.size(); j++) {
        if (nums[i] + nums[j] == target) {
          res.push_back(i);
          res.push_back(j);
          return res;
        }
      }
    }
  }
  return res;
}

int main(int argc, char *argv[]) {
  std::vector<int> nums{1, 22, 30, 44, 50};
  int target{31};
  Solution instance;
  auto res = instance.twosum(nums, target);

  for (const auto &p : res) {
    std::cout << p << std::endl;
  }

  return 0;
}
