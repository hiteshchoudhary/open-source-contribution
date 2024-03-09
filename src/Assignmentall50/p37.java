
package Assignmentall50;
// POLY = MANY.
// MORPHISM = FORMS. 
// POLYMORPHISM = MANY FORMS.

// PERSON = Can be a Student.
// PERSON = Driver.
// PERSON = Chef.

class Animal1 {
    public void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog1 extends Animal1 {
    public void sound() {
        System.out.println("Woof!");
    }
}

class Cat extends Animal1 {
    public void sound() {
        System.out.println("Meow!");
    }
}

public class p37 {
    
}
