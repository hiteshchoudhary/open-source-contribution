// using inheritance
#include <iostream> 
#include <string> 
using namespace std; 

// Base class 
class base 
{ 
	protected: 
		virtual string concatenate(string &str1, 
								string &str2) = 0; 
}; 

// Derive class
class derive: protected base { 
	public: 
		string concatenate (string &str1, 
							string &str2) 
		{ 
			string temp; 
			temp = str1 + str2; 
			return temp; 
		} 
}; 

// Driver code
int main() 
{ 
	string init("this is init");
	string add(" added now"); 
	
	// Create string object 
	derive obj; 
	
	// Print string 
	cout << obj.concatenate (init, add); 
	
	return 0; 
}
