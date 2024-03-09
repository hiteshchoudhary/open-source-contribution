
package Assignmentall50;

interface Shape {
    void calculateArea();
//    double calculatePerimeter();
}
interface ShapeOne {
    void mymethod();
}

class Circle1 implements Shape, ShapeOne{
//    System.out.print("Hello");
    String name;

    @Override
    public void calculateArea(){
        System.out.println("Calculating area");
    }
    public void mymethod(){
        System.out.println("Calculating method");
    }
    
    public void shpae(){
        System.out.println("Hello");
    }
}

public class p36 {
    public static void main(String[] args){
    
        Circle1 c1 = new Circle1();
        c1.shpae();
        c1.mymethod();
        c1.calculateArea();
    }
}
