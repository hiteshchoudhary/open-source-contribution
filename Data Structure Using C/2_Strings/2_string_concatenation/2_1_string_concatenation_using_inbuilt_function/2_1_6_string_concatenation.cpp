// using friend function and strcat() 
#include <iostream> 
#include <string.h> 
using namespace std; 

// Base class 
class Base { 
	public: 
	char init[100] = "this is init";
	char add[100] = " added now"; 
			
	friend void myfun(Base b);	 
}; 

void myfun (Base b) 
{ 
	// Pass parameter to concatenate 
	strcat (b.init, b.add); 
	
	cout << b.init; 
} 

// Driver code
int main() 
{ 

	// Create object of base class 
	Base b; 
		
	// pass b object to myfun() to print 
	// the concatenated string 
	myfun(b); 
	
	return 0; 
}
