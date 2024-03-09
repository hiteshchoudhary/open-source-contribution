
package Assignmentall50;

class AnimalOne {
    // PARENNT CLASS
    AnimalOne(String name){
        System.out.println(name + "I'm Animal's Constructor");
    }
//    abstract String help();
    public void sound(){
        System.out.println("Make a sound.");
    }
}

class Dog extends AnimalOne {
    
    // CHILD CLASS
    public Dog(String name) {
        super(name); // PARENT KE CONSTRUCTOR KO CALL KR RHA HA!
    }
    
//    Dog(String name){
//        System.out.println("I'm Dog's contructor");
//    }
    @Override
    public void sound() {
        System.out.println("Woof!");
    }
}

public class p35 {
    public static void main(String[] args){ 
       Dog d = new Dog("Faaiz");
       d.sound();
    }
}
