// Activity 1: Two Sum ✅
// - Task 1:
// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}

// Test cases
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result = addTwoNumbers(l1, l2);

while (result !== null) {
  console.log(result.val);
  result = result.next;
}

console.log("***Task 1 Ended Here!✅***");

// ********************************* //

// Activity 2: Reverse Integer ✅
// - Task 2:
function lengthOfLongestSubstring(s) {
  let map = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(map.get(s[right]) + 1, left);
    }
    map.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abkl")); // Output: 4
console.log(lengthOfLongestSubstring("ccdd")); // Output: 2
console.log(lengthOfLongestSubstring("qwerty")); // Output: 6

console.log("***Task 2 Ended Here!✅***");

// ********************************* //

// Activity 3: Palindrome Number ✅
// - Task 3:
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    let currentArea = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, currentArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); // Output: 1

console.log("***Task 3 Ended Here!✅***");

// ********************************* //

// Activity 4: Merge Two Sorted Lists ✅
// - Task 4:
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Test cases
console.log(threeSum([-2, 0, 6, 2, -1, -6])); // Output: [ [ -6, 0, 6 ], [ -2, 0, 2 ] ]
console.log(threeSum([])); // Output: []
console.log(threeSum([0])); // Output: []

console.log("***Task 4 Ended Here!✅***");

// ********************************* //

// Activity 5: Valid Parentheses ✅
// - Task 5:
function groupAnagrams(strs) {
  let map = new Map();

  for (let str of strs) {
    let sorted = str.split("").sort().join("");
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }

  return Array.from(map.values());
}

// Test cases
console.log(
  groupAnagrams(["cat", "dog", "god", "act", "rat", "bat", "tar", "tab"])
);
/* Output: [
    [ 'cat', 'act' ],
    [ 'dog', 'god' ],
    [ 'rat', 'tar' ],
    [ 'bat', 'tab' ]
  ]
*/
console.log(groupAnagrams([""])); // Output: [[""]]
console.log(groupAnagrams(["a"])); // Output: [["a"]]

console.log("***Task 5 Ended Here!✅***");
