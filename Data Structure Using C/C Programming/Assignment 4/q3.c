#include<stdio.h>
int main()
  {
  int a = 4;
  float f = 7.45;
  char c = 'g';
  double d = 998.987897890;

  printf("size of int is %ld\n", sizeof(a));
  printf("size of float is %ld\n", sizeof(f));
  printf("size of char is %ld\n", sizeof(c));
  printf("size of double is %ld\n", sizeof(d));
  
  printf("\n");
  return 0;
  }