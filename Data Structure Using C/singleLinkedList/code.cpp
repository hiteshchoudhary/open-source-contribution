#include<iostream>
using namespace std;

class Node {

public: 
  int data;
  Node* next;

  Node(int data) {
    this->data = data;
    this->next = NULL;
  }

  // ~Node() {
  //   delete next;
  //   cout << "memory is free" << endl;
  // }
};

void insertAtFirst(int data, Node* &ptr) {
  
  Node* head = new Node(data);
  head->next = ptr;
  ptr = head;

  return;
  
}

void insertAtLast(int data, Node* ptr) {

  Node* tail = new Node(data);

  while(ptr->next != NULL) {
    ptr = ptr->next;
  }

  ptr->next = tail;

  return;
}


void insertAtParticularPostion(int data, Node* &head, int index) {

  int idx = 0;
  if (idx == index) {
    insertAtFirst(data, head);
  
  } else {

    Node* ptr = head;
    Node* newNode = new Node(data);
    
    while(idx != index - 1 && ptr != NULL) {
      ptr = ptr->next;
      idx++;
    }

    if (ptr != NULL) {
      newNode->next = ptr->next;
      ptr->next = newNode;

    } else {
      cout << "ERROR: your index is too large, it not be inserted at the given position!" << endl;
    }
  }

  return;
}


void deleteAtFirst(Node* &head) {
  Node* ptr = head;

  head = head->next;

  delete ptr;
  return;
}

void deleteAtLast(Node* head) {

  while(head->next->next != NULL) {
    head = head->next;
  }

  delete head->next;

  head->next = NULL;

  return;
}

void printLinkedList(Node* head) {

  while(head != NULL) {
    cout << head->data << " ";
    head = head->next;
  }

  cout << endl;

  return;
}


void deleteAtParticularPosition(Node* &head, int index) {

  int idx = 0;
  if (idx == index) {
    deleteAtFirst(head);

  } else {
    Node* ptr = head;
    while(idx != index - 1) {
      idx++;
      ptr = ptr->next;
    }
    Node* deleteAddress = ptr->next;
    ptr->next = ptr->next->next;
    delete deleteAddress;
  }

  return;
}


int main() {

  Node* head = new Node(7);

  // insertAtFirst(6, head);
  // insertAtFirst(5, head);
  // insertAtFirst(4, head);
  insertAtFirst(3, head);
  insertAtFirst(2, head);
  insertAtFirst(1, head);

  insertAtLast(8, head);
  // insertAtLast(9, head);
  // insertAtLast(10, head);
  // insertAtLast(11, head);
  // insertAtLast(12, head);
  // insertAtLast(13, head);
  // insertAtLast(14, head);

  insertAtParticularPostion(9, head, 2);
  insertAtParticularPostion(4, head, 6);
  insertAtParticularPostion(0, head, 0);
  // insertAtParticularPostion(25, head, 45);

  printLinkedList(head);

  deleteAtFirst(head);
  deleteAtFirst(head);
  printLinkedList(head);

  deleteAtLast(head);
  printLinkedList(head);

  deleteAtParticularPosition(head, 2);
  printLinkedList(head);

  return 0;
}