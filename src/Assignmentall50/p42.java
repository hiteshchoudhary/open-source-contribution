
package Assignmentall50;

 class Animal3 {
    public void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog3 extends Animal3 {
    @Override
    public void sound() {
        System.out.println("Woof!");
    }
}
class Cat1 extends Animal3 {
    @Override
    public void sound() {
        System.out.println("Meow!");
    }
}

public class p42 {
    public static void main(String[] args){
    Dog3 dog = new Dog3();
    dog.sound();
    }
}
