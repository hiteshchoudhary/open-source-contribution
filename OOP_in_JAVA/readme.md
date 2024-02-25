# Object-Oriented Programming (OOP) Example in Java

This Java program demonstrates key concepts of Object-Oriented Programming (OOP), including encapsulation, inheritance, and polymorphism.

## Concepts Covered

### 1. Encapsulation:
- Attributes (`name`, `age`, `rollNumber`) are encapsulated within their respective classes (`Person` and `Student`), and access to these attributes is controlled through getter and setter methods.
- Data and methods are bundled together within classes, promoting data hiding and abstraction.

### 2. Inheritance:
- The `Student` class inherits from the `Person` class, establishing an "is-a" relationship (a student is a type of person).
- Inherited attributes and methods (`name` and `age`) are reused in the `Student` class without duplication.

### 3. Polymorphism:
- The `display()` method is overridden in the `Student` class to provide specialized behavior, demonstrating runtime polymorphism (dynamic method dispatch).
- Polymorphic behavior is showcased in the `main` method, where a `Student` object is assigned to a `Person` reference, and the `display()` method is called. The method invoked depends on the actual type of the object being referenced at runtime.
