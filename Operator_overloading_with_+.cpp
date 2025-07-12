#include <iostream>
using namespace std;
class Complex
{
    int real, img;
public:
    Complex ()
    {
        real = 0;
        img = 0;
    }
    Complex (int r, int i)
    {
        real = r;
        img = i;
    }
    void display ()
    {
        cout << "The complex number is: " << real << " + " << img << " i " << endl;
    }
    // The overloading function has to be written inside the class to enable class objects to use it

    Complex operator +(Complex c)
    // Datatype (here, class) -> operator keyword -> operator to be overloaded -> (arguments) (here, argument is an obj of class Complex
    {
        Complex temp;
        temp.real = real + c.real;                       // real corresponds to real part of c1 and c.real corresponds to real part of c2
        temp.img = img + c.img;
        return temp;
    }
};

int main()
{
    int x = 5;                                           
    int y = 4;
    int z = x + y;
    cout << "Value of z: " << z << endl;

    Complex c1 (5,4);                                   
    Complex c2 (2,5);
    Complex c3;

    c3 = c1 + c2;                                       // compiler sees this as c3 = c1.add(c2) , c2 is being passed to obj c1
    c3.display();

    Complex c4 (1,1);
    Complex c5;
    c5 = c1 + c2 + c4;                                  // firstly, addition of c2+c4 takes place, then the result is added to c1, then value is given to c5
                                                        // if we had created a separate add() fun as in function overloading, we would have had to make
                                                        // another add func which can use 3 arguments. The advantage of op overloading is that we dont
                                                        // have to do that
    c5.display();
    return 0;
}