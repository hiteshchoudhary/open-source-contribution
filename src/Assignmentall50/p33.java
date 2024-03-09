
package Assignmentall50;
class Vehicle {
    protected String brand;

    public void honk() {
        System.out.println("Honk honk!");
    }
}

class Car extends Vehicle{
    private int numberOfDoors;

    public void setNumberOfDoors(int doors) {
        numberOfDoors = doors;
    }

    public int getNumberOfDoors() {
        return numberOfDoors;
    }
}

public class p33 {
    public static void main(String[] args){
    Car honda = new Car();
    
    honda.honk();
    }
}
