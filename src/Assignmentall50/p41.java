/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Assignmentall50;

 class Employee {
    private String name;
    private int age;

    public void setName(String newName) {
        name = newName;
    }

    public String getName() {
        return name;
    }

    public void setAge(int newAge){
        this.age = newAge;
    }
    
    public int getAge(){
        return age;
    }
}

public class p41 {
    public static void main(String[] args){
        Employee faaiz = new Employee();
        
        faaiz.setName("Faaiz Amir");
        System.out.println(faaiz.getName());
    }
}
