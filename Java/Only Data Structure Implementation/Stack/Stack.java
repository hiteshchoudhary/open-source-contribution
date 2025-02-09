import java.util.EmptyStackException;

public class Stack<T> {
    private static class Node<T> {
        private T data;
        private Node<T> next;

        public Node(T data) {
            this.data = data;
        }
    }

    private Node<T> top; // Top of the stack
    private int size;    // Size of the stack

    // Push operation
    public void push(T item) {
        Node<T> newNode = new Node<>(item);
        newNode.next = top;
        top = newNode;
        size++;
    }

    // Pop operation
    public T pop() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        T item = top.data;
        top = top.next;
        size--;
        return item;
    }

    // Peek operation
    public T peek() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return top.data;
    }

    // Check if the stack is empty
    public boolean isEmpty() {
        return top == null;
    }

    // Return the size of the stack
    public int size() {
        return size;
    }

    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();

        stack.push(1);
        stack.push(2);
        stack.push(3);

        System.out.println("Size of stack: " + stack.size()); // 3
        System.out.println("Top element: " + stack.peek());   // 3

        System.out.println("Pop: " + stack.pop()); // 3
        System.out.println("Pop: " + stack.pop()); // 2

        System.out.println("Is stack empty? " + stack.isEmpty()); // false

        System.out.println("Pop: " + stack.pop()); // 1
        // System.out.println("Pop: " + stack.pop()); // Would throw EmptyStackException
        // System.out.println("Top element: " + stack.peek()); // Would throw EmptyStackException
    }
}
