
package Assignmentall50;

class Peerson{
    String name;
    int id;
    public Peerson(){
        System.out.println("Hello");
    }
    public Peerson(String name) {
        this.name = name;
        System.out.println(this.name);
    }
    public Peerson(String name, int ID){
        this.name = name;
        id = ID;
        System.out.println(name + " " + ID);
    }

}

public class p34 {
    public static void main(String[] args){
        
     Peerson c = new Peerson("faaiz", 10);
     Peerson a = new Peerson("Fayyaz");
     Peerson d = new Peerson();
     
//     Circle c = new Circle();
     
    }
    
}
