#include<bits/stdc++.h>
using namespace std;
class Node {
    public:
    int data;
    Node* next ;
    Node(int data ) {
        this->data = data;
        this->next = NULL;
    }
};

void printLL (Node* head) {
    Node* temp = head ;
    while(temp !=NULL) {
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}

void insertAtHead(Node* &head , int ele) {
      Node* temp = new Node(ele);
      temp->next = head;
      head = temp;
}

void insertAtIndex(Node* &head , int index ,int ele) {
    Node* temp = head;
    int cnt  = 0;
    while(cnt<index-1) {
        temp = temp->next;
        cnt++;
    }
    Node* newNode = new Node(ele);
    newNode->next = temp->next;
    temp->next = newNode;

}

void insertAttail(Node* &head , int ele) {
    Node* temp = head ;
    while(temp->next != NULL) {
        temp = temp->next;
    }
    Node* newNode  = new Node(ele);
    temp->next = newNode;
    temp = newNode;
}

void deleteNodeAtHead(Node* &head) {
    Node* temp = head;
    head = head->next;
    delete(temp);
}

void deleteNodeAtIndex(Node* &head , int index) {
    Node* temp = head;
    int cnt = 0;
    while(cnt < index-1) {
        temp= temp->next;
        cnt++;
    }
    Node* deleteNode = temp->next;
    temp->next = temp->next->next;
   // delete(deleteNode);
}

void deleteLastNode(Node* &head) {
    Node* temp = head;
    while(temp->next->next != NULL) {
        temp = temp->next;
    }
    delete(temp->next);
    temp->next = NULL;
}

void deleteNodeByvalue(Node* head ,int ele) {
    Node* temp = head;
    while(temp->next->data != ele) {
        temp = temp->next;
    }

    if(temp->next->data == ele) {
        Node* deleNode = temp->next;
        temp->next = temp->next->next;
        delete(deleNode);
    }
   
}


void lenghtOfTheLL(Node* &head) {
    Node* temp = head ;
    int cnt =0;
    while(temp != NULL) {
        temp = temp->next;
        cnt++;
    }
    cout<<"Length of the Linked List is : " <<cnt<<endl;
}

void findEleInLL(Node* &head , int ele) {
    Node* temp = head;
    while( temp != NULL && temp->data != ele ) {
        temp= temp->next;
    }
    if(temp == NULL) {
        cout<<"Element is not present in the LInked LIst" <<endl;

    }
    else {
        cout<<"element is present in the Linked List : "<<ele<<endl;
    }
}

void Reverse_a_LL_by_Stack(Node* &head) {
    stack<int> st;
    Node* temp = head;
    while(temp!= NULL) {
        st.push(temp->data);
        temp= temp->next;
    
    }
    temp = head;
    while(temp != NULL) {
        temp->data = st.top();
        temp = temp->next;
        st.pop();
    }

}

void Reverse_a_LL(Node* &head) {
    Node* prev = NULL ;
    Node* curr = head;
    Node* next = NULL;
    while(curr != NULL) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;

    
}

void MiddleOfLinkedList(Node* &head) {
    Node* temp = head;
    int cnt = 0;
    while(temp != NULL) {
        cnt++;
        temp = temp->next ;
    }
    int mid = cnt/2;
    temp = head;
    for(int i =0 ;i<mid ; i++) {
        temp = temp->next;
    }
    cout<<"Middle of the linked list "<<temp->data<<" "<<endl;
    
}

void Middle_Node_twoPointer(Node* &head) {
   Node* slow = head;
   Node* fast = head;

   while(fast != NULL &&fast->next != NULL) {
    slow = slow->next;
    fast= fast->next->next;
   }
   cout<<"middle of the LL is BY SLOW/FAST: "<<slow->data<<endl;
}

bool detectLoop(Node* &head) {
    Node* slow = head;
    Node* fast = head;
    while(fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
        if(slow == fast) {
            return true;
        }
    }
    return false;
}


void createLoop(Node* &head , int pos) {
   
   Node* temp = head;
   int cnt = 0;
   Node* loopStart = NULL;
   Node* tail = NULL;
    while(temp->next != NULL) {
        if(cnt == pos) {
            loopStart = temp;
        }
         
        temp = temp->next;
        cnt++;
        
        
    }
    temp->next = loopStart;
}

void removeLoop(Node* head){
    Node* slow = head;
    Node* fast = head;
    while(fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;

        if(slow == fast) {
            break;
        }
    }

    slow = head;
    if(slow == fast) {
        while(fast->next != slow) {
            fast = fast->next;
        }
    }
    else {
        while(slow->next != fast->next) {
            slow = slow->next;
            fast = fast->next;
        }
    }

    fast->next = NULL;
   
}


Node* mergeTwoLinkedList(Node* head1 , Node* head2) {
    Node* mergeLL = new Node(-1);
    Node* tail = mergeLL;
    while(head1 && head2 ) {
    if(head1->data < head2->data) {
        tail->next = head1;
        head1 = head1->next;
    }
    else  {
        tail->next = head2;
        head2 = head2->next;
    }
    tail = tail->next;
}
    if(head1) {
        tail->next = head1;
    }
    if(head2) {
        tail->next = head2;
    }

    return mergeLL->next;
    
}

int  main() {
    Node* newNode = new Node(12);
    Node* head = newNode;
    printLL(head);
    insertAtHead( head , 23);
    insertAtHead( head , 52);
    insertAtHead( head , 78);
    printLL(head);
    insertAtIndex(head , 2 , 57);
    printLL(head);
    insertAttail(head , 89);
    printLL(head);
    deleteNodeAtHead(head);
    printLL(head);
    deleteNodeAtIndex(head ,2);
    printLL(head);
    deleteLastNode(head);
    printLL(head);
    deleteNodeByvalue(head , 57);
    printLL(head);
    insertAtIndex(head , 2 , 57);
    insertAtIndex(head , 1 , 78);
    insertAtIndex(head , 2 , 32);
    insertAtIndex(head , 2 , 98);
    printLL(head);
    lenghtOfTheLL(head);
    findEleInLL(head , 98);
    printLL(head);
    Reverse_a_LL(head);
    printLL(head);
    Reverse_a_LL_by_Stack(head);
    printLL(head);
    MiddleOfLinkedList(head);
    Middle_Node_twoPointer(head);

    // printLL(head);
    // if (detectLoop(head))cout<<"Loop detected in a Linked List: ";
    // else cout<<"No Loop is detected in a Linked List: ";
    
    printLL(head);
    createLoop(head , 3);
    
   // printLL(head);  // do not print after create a loop because this will cause you a infinte loop
    if (detectLoop(head))cout<<"Loop detected in a Linked List: "<<endl;
    else cout<<"No Loop is detected in a Linked List: "<<endl;
    
    removeLoop(head);
    printLL(head);
    if (detectLoop(head))cout<<"Loop detected in a Linked List: "<<endl;
    else cout<<"No Loop is detected in a Linked List: "<<endl;



        Node* newNode1 = new Node(89);
        Node* head1 = newNode1;
        insertAtHead(head1 , 50);
        insertAtHead(head1 , 42);
        insertAtHead(head1 , 39);
        insertAtHead(head1 , 13);
        insertAtIndex(head1 , 4 , 60);
        
        Node* newNode2 = new Node(65);
        Node* head2 = newNode2;
        insertAtHead(head2 , 52);
        insertAtHead(head2 , 46);
        insertAtHead(head2 , 35);
        insertAtHead(head2 , 15);
        insertAtIndex(head2 , 4 , 54);
        
        
        
        printLL(head1);
        printLL(head2);

    printLL(mergeTwoLinkedList(head1,head2));

}