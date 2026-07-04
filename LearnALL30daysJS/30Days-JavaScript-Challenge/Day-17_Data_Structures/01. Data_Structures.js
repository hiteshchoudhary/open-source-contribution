// Activity 1: Linked List ✅
// - Task 1:
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Reference to the next node
  }
}

console.log("***Task 1 Ended Here!✅***");

// - Task 2:
class LinkedList {
  constructor() {
    this.head = null; // Reference to the first node
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  remove() {
    if (this.head === null) return null;
    if (this.head.next === null) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
  }

  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

console.log("***Task 2 Ended Here!✅***");

// ********************************* //

// Activity 2: Stack ✅
// - Task 3:
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

console.log("***Task 3 Ended Here!✅***");

// - Task 4:
function reverseString(str) {
  let stack = new Stack();
  for (let char of str) {
    stack.push(char);
  }
  let reversedStr = "";
  while (stack.items.length > 0) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

console.log("***Task 4 Ended Here!✅***");

// ********************************* //

// Activity 3: Queue ✅
// - Task 5:
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) return "Underflow";
    return this.items.shift();
  }

  front() {
    if (this.items.length === 0) return "No elements in Queue";
    return this.items[0];
  }
}

console.log("***Task 5 Ended Here!✅***");

// - Task 6:
class PrinterQueue extends Queue {
  printJob() {
    while (this.items.length > 0) {
      console.log(`Printing: ${this.dequeue()}`);
    }
  }
}

console.log("***Task 6 Ended Here!✅***");

// ********************************* //

// Activity 4: Binary Tree ✅
// - Task 7:
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

console.log("***Task 7 Ended Here!✅***");

// - Task 8:
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }
}

console.log("***Task 8 Ended Here!✅***");

// ********************************* //

// Activity 4: Graph (Optional) ✅
// - Task 9:
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1)) {
      this.adjacencyList.get(vertex1).push(vertex2);
    }
    if (this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  }

  bfs(start) {
    let visited = new Set();
    let queue = [start];
    while (queue.length > 0) {
      let vertex = queue.shift();
      if (!visited.has(vertex)) {
        console.log(vertex);
        visited.add(vertex);
        queue.push(
          ...this.adjacencyList
            .get(vertex)
            .filter((neighbor) => !visited.has(neighbor))
        );
      }
    }
  }
}

console.log("***Task 9 Ended Here!✅***");

// - Task 10:
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.bfs("A");

console.log("***Task 10 Ended Here!✅***");
