// Activity 1: Median of Two Sorted Arrays ✅
// - Task 1:
function findMedianSortedArrays(nums1, nums2) {
  let merged = [];
  let i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i++]);
    } else {
      merged.push(nums2[j++]);
    }
  }
  while (i < nums1.length) merged.push(nums1[i++]);
  while (j < nums2.length) merged.push(nums2[j++]);

  let len = merged.length;
  if (len % 2 === 0) {
    return (merged[Math.floor(len / 2) - 1] + merged[Math.floor(len / 2)]) / 2;
  } else {
    return merged[Math.floor(len / 2)];
  }
}

console.log(findMedianSortedArrays([1, 3], [4])); // 3
console.log(findMedianSortedArrays([2, 3], [4, 5])); // 3.5
console.log(findMedianSortedArrays([], [3])); // 3
console.log(findMedianSortedArrays([2], [])); // 2

console.log("***Task 1 Ended Here!✅***");

// ********************************* //

// Activity 2: Merge k Sorted Lists ✅
// - Task 2:
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    let a = lists.shift();
    let b = lists.shift();
    let merged = mergeTwoLists(a, b);
    lists.push(merged);
  }

  return lists[0];
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode();
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

  if (l1 !== null) current.next = l1;
  if (l2 !== null) current.next = l2;

  return dummy.next;
}

// Create test case lists and log results
let l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let l3 = new ListNode(2, new ListNode(6));

let mergedList = mergeKLists([l1, l2, l3]);
while (mergedList !== null) {
  console.log(mergedList.val);
  mergedList = mergedList.next;
}

console.log("***Task 2 Ended Here!✅***");

// ********************************* //

// Activity 3: Trapping Rain Water ✅
// - Task 3:
function trap(height) {
  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
}

console.log(trap([0, 3, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 12
console.log(trap([4, 2, 0, 3, 4, 5])); // 7

console.log("***Task 3 Ended Here!✅***");

// ********************************* //

// Activity 4: N-Queens ✅
// - Task 4:
function solveNQueens(n) {
  let result = [];
  let board = Array.from({ length: n }, () => Array(n).fill("."));

  function isSafe(board, row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }
    return true;
  }

  function placeQueens(board, row) {
    if (row === n) {
      result.push(board.map((r) => r.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(board, row, col)) {
        board[row][col] = "Q";
        placeQueens(board, row + 1);
        board[row][col] = ".";
      }
    }
  }

  placeQueens(board, 0);
  return result;
}

console.log(solveNQueens(4)); // Output all distinct solutions for 4-queens
console.log(solveNQueens(1)); // [["Q"]]

console.log("***Task 4 Ended Here!✅***");

// ********************************* //

// Activity 5: Word Ladders ✅
// - Task 5:
function ladderLength(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];

  while (queue.length > 0) {
    let [word, length] = queue.shift();

    if (word === endWord) return length;

    for (let i = 0; i < word.length; i++) {
      for (let charCode = 97; charCode <= 122; charCode++) {
        let newWord =
          word.slice(0, i) + String.fromCharCode(charCode) + word.slice(i + 1);

        if (wordSet.has(newWord)) {
          queue.push([newWord, length + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }

  return 0;
}

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
); // 5
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0

console.log("***Task 5 Ended Here!✅***");
