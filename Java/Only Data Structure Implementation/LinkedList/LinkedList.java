import java.util.Scanner;

public class LinkedList<T> {

    static class Node<T> {
        T data;
        Node<T> next;

        Node(T data) {
            this.data = data;
        }
    }

    static Node<?> head;
    static Node<?> tail;

static void create() {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter the number of nodes you want to create: ");
    int n = sc.nextInt();
    for (int i = 1; i <= n; i++) {
        System.out.print("Enter data for node " + i + ": ");
        Object data = sc.next();
        Node<Object> newNode = new Node<>(data);
        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            @SuppressWarnings("unchecked")
            Node<Object> temp = (Node<Object>) tail;
            temp.next = newNode;
            tail = newNode;
        }
    }
}


    static Node<?> createNode(Object data) {
        return new Node<>(data);
    }

    static void display() {
        Node<?> curr = head;
        while (curr != null) {
            System.out.print(curr.data + " -> ");
            curr = curr.next;
        }
        System.out.println("NULL");
    }

    public static void main(String[] args) {
        LinkedList<?> ll = new LinkedList<>();
        int choice;
        Scanner sc = new Scanner(System.in);
        do {
            System.out.println("\nWelcome to LinkedList Program.\n");
            System.out.println("--------------------------------");
            System.out.println("1. Create the LinkedList");
            System.out.println("2. Display the LinkedList");
            System.out.println("3. Exit");
            System.out.println("--------------------------------");
            System.out.print("Enter your choice: ");
            choice = sc.nextInt();
            switch (choice) {
                case 1:
                    ll.create();
                    break;
                case 2:
                    ll.display();
                    break;
                case 3:
                    System.out.println("Exiting the program");
                    break;
                default:
                    System.out.println("Invalid choice");
            }
        } while (choice != 3);
    }
}
