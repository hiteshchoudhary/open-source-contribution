
package Assignmentall50;

class Person {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String newName) {
        name = newName;
    }
}

public class p31 {
    public static void main(String[] args){
    Person faaiz = new Person();
    
    faaiz.setName("Faaiz");
    System.out.println(faaiz.getName());
    }
}
