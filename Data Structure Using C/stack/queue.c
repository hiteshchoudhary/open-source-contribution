#include <stdio.h>
#define SIZE 5

int queue[SIZE];
int front = -1, rear = -1;

int isFull()
{
  return rear == SIZE - 1;
}

int isEmpty()
{
  return front == -1;
}

void enqueue(int value)
{
  if (isFull())
  {
    printf("Queue is full! Cannot enqueue.\n");
    return;
  }
  if (front == -1)
  {
    front = 0;
  }
  rear++;
  queue[rear] = value;
  printf("%d enqueued to queue\n", value);
}

void dequeue()
{
  if (isEmpty())
  {
    printf("Queue is empty! Cannot dequeue.\n");
    return;
  }
  printf("%d dequeued from queue\n", queue[front]);
  front++;
  if (front > rear)
  {
    front = rear = -1;
  }
}

void display()
{
  if (isEmpty())
  {
    printf("Queue is empty!\n");
    return;
  }
  printf("Queue: ");
  for (int i = front; i <= rear; i++)
  {
    printf("%d ", queue[i]);
  }
  printf("\n");
}

int main()
{
  enqueue(10);
  enqueue(20);
  enqueue(30);
  display();

  dequeue();
  display();

  enqueue(40);
  enqueue(50);
  enqueue(60);
  display();

  return 0;
}
