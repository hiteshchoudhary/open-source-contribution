class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert a node at the end of the linked list
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Insert a node at the beginning of the linked list
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Insert a node at a specific position in the linked list
    insertAt(data, position) {
        if (position === 0) {
            this.prepend(data);
        } else {
            const newNode = new Node(data);
            let current = this.head;
            let count = 0;
            while (count < position - 1 && current.next) {
                current = current.next;
                count++;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    // Remove a node from the linked list
    remove(data) {
        if (!this.head) {
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let previous = null;

        while (current && current.data !== data) {
            previous = current;
            current = current.next;
        }

        if (current) {
            previous.next = current.next;
        }
    }

    // Print the linked list
    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' -> ';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);
linkedList.insertAt(4, 2);
linkedList.remove(1);
linkedList.print();