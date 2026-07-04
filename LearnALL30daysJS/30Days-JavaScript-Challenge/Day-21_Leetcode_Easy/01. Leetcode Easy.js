// Activity 1: Two Sum ✅
// - Task 1: Solve the "Two Sum" problem on LeetCode.

// Function to solve Two Sum problem
function twoSum(nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]

console.log("***Task 1 Ended Here!✅***");

// ********************************* //

// Activity 2: Reverse Integer ✅
// - Task 2: Solve the "Reverse Integer" problem on LeetCode.

// Function to reverse an integer
function reverseInteger(x) {
  const isNegative = x < 0;
  let reversed = parseInt(Math.abs(x).toString().split("").reverse().join(""));
  if (reversed > 2 ** 31 - 1) return 0; // Handle overflow for 32-bit integer
  return isNegative ? -reversed : reversed;
}

// Test cases
console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-456)); // Output: -654
console.log(reverseInteger(130)); // Output: 31
console.log(reverseInteger(0)); // Output: 0

console.log("***Task 2 Ended Here!✅***");

// ********************************* //

// Activity 3: Palindrome Number ✅
// - Task 3: Solve the "Palindrome Number" problem on LeetCode.

// Function to check if an integer is a palindrome
function isPalindrome(x) {
  if (x < 0) return false;
  const str = x.toString();
  return str === str.split("").reverse().join("");
}

// Test cases
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
console.log(isPalindrome(0)); // Output: true

console.log("***Task 3 Ended Here!✅***");

// ********************************* //

// Activity 4: Merge Two Sorted Lists ✅
// - Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.

// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Function to merge two sorted linked lists
function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  current.next = l1 !== null ? l1 : l2;

  return dummy.next;
}

// Test cases
function printList(node) {
  const values = [];
  while (node) {
    values.push(node.val);
    node = node.next;
  }
  console.log(values.join(" -> "));
}

const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const mergedList = mergeTwoLists(l1, l2);
printList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

console.log("***Task 4 Ended Here!✅***");

// ********************************* //

// Activity 5: Valid Parentheses ✅
// - Task 5: Solve the "Valid Parentheses" problem on LeetCode.

// Function to check if a string of parentheses is valid
function isValid(s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    if (map[char]) {
      stack.push(map[char]);
    } else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true

console.log("***Task 5 Ended Here!✅***");
