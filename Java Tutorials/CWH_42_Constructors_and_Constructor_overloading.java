class MyEmploye1{
    private int id;
    private String name;
    private int salary;

    // private properties can only be accessed in the methods declared in this class.

    // CONSTRUCTOR
    // Same name as the Class
    // Constructors have no return type
    public MyEmploye1(){
        id = 45;
        name = "Default name";
    }

    public MyEmploye1(int myid, String myName){
        id = myid;
        name = myName;
    }

    public MyEmploye1(int myid, String myName, int mySalary){
        id = myid;
        name = myName;
        salary = mySalary;
    }


    // GETTERS SETTERS
    public void set_id(int id){
        id = id;
    }

    public void set_name(String n){
        this.name = n;
    }

    public int getId(){
        return id;
    }

    public String getName(){
        return name;
    }

    public int getSalary(){
        return salary;
    }

}


public class CWH_42_Constructors_and_Constructor_overloading {

    public static void main(String[] args) {

        //MyEmploye1 Soham = new MyEmploye1();
        //Soham.set_name("Soham");
        //System.out.println(Soham.getName());

        // cant be writing set methods for all the properties

        // Constructors --> A member function used to initialize an object while creating it

        MyEmploye1 Soham = new MyEmploye1(12,"Arjun"); // When ever an object is made method with the same name [Constructor] is invoked and
                                             // does the job what ever is written inside it
        System.out.println(Soham.getId());
        System.out.println(Soham.getName());

        // CONSTRUCTORS YES AND NOS
        // Arguments can be Passed to the constructors

        // Constructor Overloading is same as Method over loading Same name, class name in this case, but the arguments will change.
        // CONSTRUCTOR
        /*
        public MyEmploye1(){
                id = 45;
                name = "Default name";
            }

        public MyEmploye1(String myName){
                id = 45;
                name = myName;
        }*/

        // Two methods with the same name can exist but the arguments should change... --> Constructor Overloading

        MyEmploye1 Default = new MyEmploye1(); // No argument passed so it will invoke the method [constructor] with no Arguments

        System.out.println(Default.getId());
        System.out.println(Default.getName());

        MyEmploye1 Swara = new MyEmploye1(16,"Bheem", 8000); // No argument passed so it will invoke the method [constructor] with no Arguments
        System.out.println(Swara.getId());
        System.out.println(Swara.getName());
        System.out.println(Swara.getSalary());

        System.out.println(Soham.getSalary()); // as while creating the object Soham the value of salary was not passed
    }
}
