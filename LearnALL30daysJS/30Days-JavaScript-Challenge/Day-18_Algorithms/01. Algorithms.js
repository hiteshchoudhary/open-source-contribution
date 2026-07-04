// Activity 1: Sorting Algorithms ✅
// - Task 1: Bubble Sort
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log("Bubble Sorted Array:", arr);
}

bubbleSort([74, 54, 25, 42, 22, 12, 80]);

console.log("***Task 1 Ended Here!✅***");

// - Task 2: Selection Sort
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap arr[i] and arr[minIndex]
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  console.log("Selection Sorted Array:", arr);
}

selectionSort([74, 54, 25, 42, 22, 12, 80]);

console.log("***Task 2 Ended Here!✅***");

// - Task 3: Quicksort
function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[Math.floor(arr.length / 2)];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== Math.floor(arr.length / 2)) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

let sortedArray = quicksort([74, 54, 25, 42, 22, 12, 80]);
console.log("Quicksort Sorted Array:", sortedArray);

console.log("***Task 3 Ended Here!✅***");

// ********************************* //

// Activity 2: Searching Algorithms ✅
// - Task 4: Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log("Linear Search Index:", i);
      return i;
    }
  }
  console.log("Target not found");
  return -1;
}

linearSearch([64, 34, 25, 12, 22, 11, 90], 25);

console.log("***Task 4 Ended Here!✅***");

// - Task 5: Binary Search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      console.log("Binary Search Index:", mid);
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log("Target not found");
  return -1;
}

binarySearch([11, 12, 22, 25, 34, 64, 90], 25);

console.log("***Task 5 Ended Here!✅***");

// ********************************* //

// Activity 3: String Algorithms ✅
// - Task 6: Count Character Occurrences
function countCharacterOccurrences(str) {
  let counts = {};
  for (let char of str) {
    counts[char] = counts[char] ? counts[char] + 1 : 1;
  }
  console.log("Character Occurrences:", counts);
}

countCharacterOccurrences("javascript challenge");

console.log("***Task 6 Ended Here!✅***");

// - Task 7: Longest Substring Without Repeating Characters
function longestSubstringWithoutRepeating(str) {
  let maxLength = 0;
  let start = 0;
  let seen = {};

  for (let end = 0; end < str.length; end++) {
    if (seen[str[end]] !== undefined && seen[str[end]] >= start) {
      start = seen[str[end]] + 1;
    }
    seen[str[end]] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  console.log(
    "Length of Longest Substring Without Repeating Characters:",
    maxLength
  );
}

longestSubstringWithoutRepeating("abbccdefgh");

console.log("***Task 7 Ended Here!✅***");

// ********************************* //

// Activity 4: Array Algorithms ✅
// - Task 8: Rotate Array by k Positions
function rotateArray(arr, k) {
  k = k % arr.length;
  let rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
  console.log("Rotated Array:", rotatedArray);
}

rotateArray([1, 2, 3, 4, 5, 6, 7], 3);

console.log("***Task 8 Ended Here!✅***");

// - Task 9: Merge Two Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  console.log("Merged Sorted Array:", mergedArray);
}

mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]);

console.log("***Task 9 Ended Here!✅***");

// ********************************* //

// Activity 5: Dynamic Programming (Optional) ✅
// - Task 10: Fibonacci Sequence using Dynamic Programming
function fibonacciDP(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log("Fibonacci Sequence:", fib);
  return fib[n];
}

fibonacciDP(10);

console.log("***Task 10 Ended Here!✅***");

// - Task 11: Knapsack Problem using Dynamic Programming
function knapsack(weights, values, capacity) {
  let n = weights.length;
  let dp = Array(n + 1)
    .fill()
    .map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  console.log("Maximum value in Knapsack:", dp[n][capacity]);
  return dp[n][capacity];
}

knapsack([1, 3, 4, 5], [1, 4, 5, 7], 7);

console.log("***Task 11 Ended Here!✅***");
