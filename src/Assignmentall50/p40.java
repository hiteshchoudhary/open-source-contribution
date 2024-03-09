
package Assignmentall50;

 class Animal2 {
    public void sound() {
        System.out.println("Animal makes a sound");
    }
}
class Dog2 extends Animal2 {
    public void sound() {
        System.out.println("Woof!");
    }
}

class Puppy extends Dog2 {
    public void sound() {
        System.out.println("Puppy makes a cute sound");
    }
}

public class p40 {
    public static void main(String[] args){
    
    Puppy doggie = new Puppy();
    
    doggie.sound();
    }
}
