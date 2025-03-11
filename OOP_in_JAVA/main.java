// Base class representing a Person
class Person {
    protected String name;
    protected int age;

    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Getter and setter for name
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Getter and setter for age
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    // Method to display information
    public void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

// Derived class representing a Student, inheriting from Person
class Student extends Person {
    private int rollNumber;

    // Constructor
    public Student(String name, int age, int rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }

    // Getter and setter for rollNumber
    public int getRollNumber() {
        return rollNumber;
    }

    public void setRollNumber(int rollNumber) {
        this.rollNumber = rollNumber;
    }

    // Override display method to include roll number
    @Override
    public void display() {
        System.out.println("Name: " + name + ", Age: " + age + ", Roll Number: " + rollNumber);
    }
}

public class Main {
    public static void main(String[] args) {
        // Create a Person object
        Person person = new Person("John", 30);
        System.out.println("Person Details:");
        person.display();

        // Create a Student object
        Student student = new Student("Jane", 25, 12345);
        System.out.println("\nStudent Details:");
        student.display();

        // Polymorphism: Demonstrate dynamic dispatch
        Person polymorphicPerson = new Student("Alice", 22, 54321);
        System.out.println("\nPolymorphic Display:");
        polymorphicPerson.display();
    }
}
