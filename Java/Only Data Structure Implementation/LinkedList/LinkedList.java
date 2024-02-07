import java.util.*;
public class LinkedList {

    //Creating a Node Class.
    public static class Node{
        //define the Node properties.
        int data; //a node contain data.
        Node next; // next is pointer which will pointing the next node.

        //creating Constructor.
        Node(int data){
            this.data = data; //here this ref the curr object.
            this.next = null;
        }
    }

    public static Node head;
    public static Node tail;

    //Creating the methords of LinkedList.

    //1st Methord Create() 
    public void create(){
        Scanner sc = new Scanner(System.in); //creating the Scanner object for taking the input from user.
        System.out.print("Enter the number of nodes you want to create: ");
        int n = sc.nextInt(); //taking the input from user how many nodes he want to create.
        for(int i=1; i<=n; i++){
            System.out.print("Enter the " + i + " Node data: ");
            int data = sc.nextInt(); //take data as input from user.

            //Here creating the new Node.
            Node newNode = new Node(data);

            //if only one node is created then head and tail both are pointing the same node.
            //so, that node is be my head as well as tail.
            if(head == null){
                head = newNode;
                tail = newNode;
            }else{ //if more than one node create then i move my tail. DON'T DO ANYTHING WITH HEAD.!!!!
                tail.next = newNode;
                tail = newNode; //tail will be pointing the last create node.
            }
        }
    }

    //2nd Methord Display()
    public void display(){
        Node curr = head; //take a pointer on head node
        while(curr != null){ //if curr is not null. 
            System.out.print(curr.data + " -> "); //then print the data of curr node.
            curr = curr.next; //move the curr to the next node.
        }
        System.out.println("NULL"); //when curr is null then print NULL.
    }




    public static void main(String[] args) {
        
        LinkedList ll = new LinkedList(); //creating the object of LinkedList.
        
        int choice;
        do{
            System.out.println();

            System.out.println("Welcome to LinkedList Program.");
            
            System.out.println();

            System.out.println("--------------------------------");
            System.out.println();
            System.out.print("1. Create the LinkedList.\n");
            System.out.print("2. Display the LinkedList.\n");
            System.out.print("3. Exit.\n");
            System.out.println();
            System.out.println("---------------------------------");



            
            System.out.print("Enter your choice: ");
            Scanner sc = new Scanner(System.in);
            choice = sc.nextInt();
            switch(choice){
                case 1:
                    ll.create();
                    break;
                case 2:
                    ll.display();
                    break;
                case 3:
                    System.out.println("Exit from the Code");
                    break;
                default:
                    System.out.println("Invalid choice.");
            }
        }while(true); //i want to run the loop infinite time.
    }
}