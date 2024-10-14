// O(log n) time complexity refers to an algorithm runtime that grows logarithmically with the size of the input (represented by n). In simple words,as the input size increases, the time it takes for the algorithm to run increases slowly.

// Suppose we have an array as below and we wanna search for the first item.
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Operation-1 :
// we use divide and conquer as :
//  half1 = [1, 2, 3, 4];
//  half2 = [5, 6, 7, 8];

// Operation-2 :
// we use if condition to ask whether the element we r looking for is in the half or not,we get half1 as yes
// we further divide and conquer
// half1.1=[1,2]
// half2.2=[3,4]

// Operation-3 :
// we get half1.1 as yes and repeat again:
// half1.1.1=[1]
// half2.2.2=[2]

// In this way we get our required element

// here log8 is equal to 3 where 8 is the total no. of elements in our array and 3 is the total no. of operations we need to get the required element
