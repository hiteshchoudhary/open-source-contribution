/*

Object is real entity.

Map(blueprint) - class
house - object

Design of car - class
car - object

constructor function
classes 
class Inheritance

## The 4 Basic Principles of OOP
    - Abstraction
    - Encapsulation
    - Inheritance
    - Polymorphism

Abstraction - 
Abstraction is where we hide all but the relevant parts of an object in order to reduce complexity and increase efficiency.

*/

/*
 Encapsulation - Encapsulation is the process of wrapping up data and methods into a single unit such as class or function.
*/

class Circle {
  #radius;
  constructor(value) {
    this.#radius = value;
  }

  get area() {
    return Math.PI * Math.pow(this.#radius, 2);
  }
}

/* 
 Inheritance : Inheritance is the process of inheriting the properties and methods from parent class. 
 This is way to reuse code and reduce redundancy(repetion). we can create a parent class with
  some properties and methods , and then create child classes that inherit those properties and
   methods as well as have their own.
*/
// Parent class
class User {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }

  add(a, b, c) {
    console.log(a + b + c);
  }

  add(a, b) {
    console.log(a + b);
  }
}
// sub-class or child class
class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => u.name !== user.name);
  }

  sayHello() {
    console.log(`polymorphism`);
  }
}

/* 
    Polymorphism - Poly + morph , Doing the same thing in a multiple way.

    Example of polymorphism - method overriding and method overloading

    method overloading - same function but different parameters (complie time polymorphism)

    method overriding - same function name and same parameter (run time polymorphism)
     if there is inheritance then we can use method overriding
*/

// const rect1 = {
//   name: 'Rectangle 1',
//   width: 10,
//   height: 20,
//   area: function () {
//     console.log('Show area');
//   },
// };

// this keyword : the this keyword is used to refer the current object.

const rect1 = {
  name: 'Rectangle 1',
  width: 10,
  height: 20,
  area: function () {
    return this.width * this.height;
  },
};

function test() {
  console.log(this);
}
test();
console.log(rect1.area());

/* 
    Object Literals are very useful in many ways, if you need to create multiple instances of the same object. This is where constructor function comes in.

    Constructor functions : Constructor functions are functions that are essentially blueprints to create new objects. They define properties and behaviors that will belong to the new object
*/

const now = new Date();

// const rect1 = new Rectangle('Rectangle 1', 10, 10);
// console.log(rect1);

// console.log(rect1.name);

/*
    When we use the new keyword , the following things happen :
    1. A new empty object is created
    2. The constructor function is called with the argument that we passed in
    3. The this keyword is set to new empty object
    4. The new object is returned from the constructor function.
*/

const rect2 = new Rectangle('Rectangle 2', 20, 30);
console.log(rect2);

console.log(rect2.area());

console.log(rect2.constructor);

console.log(rect2 instanceof Rectangle);

// const strLit = 'Hello';
// const strObject = new String('Hello');

// console.log(strLit, typeof strLit);
// console.log(strObject, typeof strObject);

// // boxing - converting literal to object
// console.log(strLit.toUpperCase());

// // unboxing - converting object to literal
// console.log(strObject.valueOf(), typeof strObject.valueOf());

// const numLit = 20;
// const numObj = new Number(20);

// const boolLit = true;
// const boolObj = new Boolean(true);

// const arrLit = [1, 2, 3, 4, 5];
// const arrObj = new Array(1, 2, 3, 4, 5);

// const funcLit = function (x) {
//   return x * x;
// };

// const funObj = new Function('x', 'return x*x');

// function Rectangle(name, width, height) {
//   this.name = name;
//   this.width = width;
//   this.height = height;
//   this.area = function () {
//     return this.width * this.height;
//   };
// }

// const rect1 = new Rectangle('Rectangle 1', 10, 10);
// // console.log(rect1);
// // Add property to obj
// rect1.color = 'Red';
// // Removing property
// delete rect1.color;
// console.log(rect1);
// // hasOwnProperty
// console.log(rect1.hasOwnProperty('color'));
// console.log(rect1.hasOwnProperty('name'));

// console.log(Object.keys(rect1));

// console.log(Object.values(rect1));

// console.log(Object.entries(rect1));

// for (let entry of Object.entries(rect1)) {
//   console.log(entry);
// }

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   area() {
//     return this.height * this.width;
//   }

//   perimeter() {
//     return 2 * (this.height + this.width);
//   }

//   isSquare() {
//     return this.height === this.width;
//   }

//   logArea() {
//     console.log('Rectangle Area: ' + this.area());
//   }
// }

// // const square = new Rectangle(10, 10);

// // console.log(square.area());
// // console.log(square.perimeter());
// // console.log(square.isSquare());
// // square.logArea();

class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log(this.name);
  }

  getClassName() {
    return 'Shape';
  }
}
//using super keyword you can use constructor of parent class
class Rectangle extends Shape {
  constructor(name, height, width) {
    super(name);
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
// static is used to meomory management
  static getClassName() {
    return 'Rectangle';
  }
}

class circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const square = new Rectangle('Square', 10, 10);
// square.logName();
console.log(Rectangle.getClassName());

const circle1 = new circle('Circle', 5);

// circle1.logName();
// console.log(circle1.area());

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return this.capitalizeFirst(this._firstName);
  }

  set firstName(value) {
    this._firstName = this.capitalizeFirst(value);
  }

  get lastName() {
    return this.capitalizeFirst(this._lastName);
  }

  set lastName(value) {
    this._lastName = this.capitalizeFirst(value);
  }

  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person = new Person('john', 'doe');

console.log(person.firstName);

console.log(person.lastName);
