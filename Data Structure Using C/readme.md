# Data Structures Using C

A comprehensive collection of data structure implementations in C programming language.

## 📚 Table of Contents

| Data Structure | Description |
|----------------|-------------|
| [Arrays](#arrays) | Linear collection of elements |
| [Linked Lists](#linked-lists) | Sequential nodes with pointers |
| [Stacks](#stacks) | LIFO data structure |
| [Queues](#queues) | FIFO data structure |
| [Trees](#trees) | Hierarchical data structure |
| [Graphs](#graphs) | Network of nodes and edges |
| [Hash Tables](#hash-tables) | Key-value pair storage |
| [Heaps](#heaps) | Complete binary tree structure |

---

## Arrays

A collection of elements stored in contiguous memory locations.

- **Static Arrays** - Fixed size at compile time
- **Dynamic Arrays** - Resizable at runtime

| Operation | Time Complexity |
|-----------|-----------------|
| Access | O(1) |
| Search | O(n) |
| Insertion | O(n) |
| Deletion | O(n) |

---

## Linked Lists

A sequence of nodes where each node contains data and a pointer to the next node.

### Types
- **Singly Linked List** - One-way traversal
- **Doubly Linked List** - Two-way traversal
- **Circular Linked List** - Last node points to first

| Operation | Time Complexity |
|-----------|-----------------|
| Access | O(n) |
| Search | O(n) |
| Insertion | O(1) |
| Deletion | O(1) |

---

## Stacks

A **LIFO** (Last In, First Out) data structure.

### Operations
- `push()` - Add element to top
- `pop()` - Remove element from top
- `peek()` - View top element
- `isEmpty()` - Check if stack is empty

### Applications
- Function call management
- Expression evaluation
- Undo operations
- Backtracking algorithms

---

## Queues

A **FIFO** (First In, First Out) data structure.

### Types
- **Simple Queue** - Basic FIFO
- **Circular Queue** - Efficient memory usage
- **Priority Queue** - Elements with priorities
- **Deque** - Double-ended queue

### Applications
- CPU scheduling
- Print spooling
- BFS traversal
- Buffer management

---

## Trees

A hierarchical data structure with a root node and subtrees.

### Types
- **Binary Tree** - Max 2 children per node
- **Binary Search Tree (BST)** - Ordered binary tree
- **AVL Tree** - Self-balancing BST
- **Red-Black Tree** - Balanced BST with color properties
- **B-Tree** - Multi-way search tree

| Operation (BST) | Average | Worst |
|-----------------|---------|-------|
| Search | O(log n) | O(n) |
| Insertion | O(log n) | O(n) |
| Deletion | O(log n) | O(n) |

---

## Graphs

A non-linear structure consisting of vertices and edges.

### Types
- **Directed / Undirected**
- **Weighted / Unweighted**
- **Cyclic / Acyclic**

### Representations
- Adjacency Matrix
- Adjacency List

### Algorithms
- BFS (Breadth-First Search)
- DFS (Depth-First Search)
- Dijkstra's Algorithm
- Kruskal's & Prim's Algorithm

---

## Hash Tables

A data structure that maps keys to values using a hash function.

| Operation | Average | Worst |
|-----------|---------|-------|
| Search | O(1) | O(n) |
| Insert | O(1) | O(n) |
| Delete | O(1) | O(n) |

---

## Heaps

A complete binary tree satisfying the heap property.

### Types
- **Max Heap** - Parent ≥ Children
- **Min Heap** - Parent ≤ Children

### Applications
- Priority queues
- Heap sort
- Graph algorithms (Dijkstra's)

---

## 🛠️ How to Compile and Run

```bash
gcc filename.c -o output
./output
```

## 📁 Directory Structure

```
Data Structure Using C/
├── Arrays/
├── Linked Lists/
├── Stacks/
├── Queues/
├── Trees/
├── Graphs/
├── Hash Tables/
├── Heaps/
└── readme.md
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new data structure implementations
- Improve existing code
- Fix bugs
- Add documentation

## 📄 License

This project is open source and available for educational purposes.