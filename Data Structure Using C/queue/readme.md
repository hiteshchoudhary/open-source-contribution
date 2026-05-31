# Queue Data Structure Implementation in C

## Overview
This is a simple array-based implementation of a Queue data structure using C.

## Concepts
A Queue is a linear data structure that follows the **FIFO** (First In First Out) principle:
- Elements are added at the **rear** (back)
- Elements are removed from the **front**

## Operations

### 1. **Enqueue** (Insert)
- Adds an element to the rear of the queue
- Time Complexity: O(1)
- Checks for overflow condition

### 2. **Dequeue** (Delete)
- Removes an element from the front of the queue
- Time Complexity: O(1)
- Checks for underflow condition

### 3. **Display**
- Displays all elements currently in the queue
- Time Complexity: O(n)

## Code Structure

```
queue[maxsize]     - Array to store queue elements
front              - Pointer to the front element (-1 if empty)
rear               - Pointer to the rear element (-1 if empty)
```

## Usage

Compile and run the program:
```bash
gcc queue.c -o queue
./queue
```

Then use the menu to perform operations:
- Press 1 to enqueue (add element)
- Press 2 to dequeue (remove element)
- Press 3 to display queue
- Press 4 to exit

## Example
```
1. Enqueue 10, 20, 30
   Queue: [10, 20, 30]

2. Dequeue
   Deleted item: 10
   Queue: [20, 30]

3. Enqueue 40
   Queue: [20, 30, 40]
```

## Limitations
- **Fixed Size**: Maximum queue size is limited to `maxsize` (currently 10)
- **Memory Wastage**: Once elements are dequeued, that memory space cannot be reused (addressed by circular queues)
- **No Dynamic Allocation**: Uses static array allocation

## Improvements (for future enhancements)
- Implement **Circular Queue** to address memory wastage
- Use **dynamic memory allocation** for variable queue size
- Implement **Linked List based Queue** for better memory management
