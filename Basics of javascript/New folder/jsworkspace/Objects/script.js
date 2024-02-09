const person = {
  name: 'Indrajeet',
  age: 25,
  location: 'Bangalore',
  hobbies: ['movies', 'music'],
  isAdmin: false,
};

let x;

// Dot Notation
x = person.location;

// Bracket Notation
x = person['name'];

x = person.hobbies[0];
person.email = 'indrajeet@test.com'; // Add a new property

person.isAdmin = true; // update an existing property

// Remove the property
delete person.isAdmin;

// Adding functions to objects
person.greet = function () {
  console.log('Hello, my name is ' + this.name);
};
person.greet();

 console.log(person);

const todo = new Object();
todo.id = 1;
todo.title = 'Buy Milk';
todo.completed = false;

const person1 = {
  address: {
    coordinates: {
      lat: 34.6201,
      lng: -54.05,
    },
  },
};

console.log(person1.address.coordinates.lat);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 1, d: 4 };

// const obj3 = { obj1, obj2 };

const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3);

// Spread operator
const obj4 = { ...obj1, ...obj2 };
 console.log(obj4);

// Object Methods

const person2 = {
  name: 'Indrajeet',
  age: 25,
  location: 'Bangalore',
  hobbies: ['movies', 'music'],
  isAdmin: false,
};

 console.log(person2);
// keys Method
 console.log(Object.keys(person2));

// Getting the length of object
console.log(Object.keys(person2).length);

// values method
// console.log(Object.values(person2));

// entries method
 console.log(Object.entries(person2));

// Destructuring
// 1. Destructuring an array

const numbers = [10, 20, 30, 40, 50, 60, 70];

const [firstNumber, secondNumber, ...rest] = numbers;

console.log(firstNumber, secondNumber);

console.log(rest);

// 2. Destructuring an Object

const todo1 = {
  id: 1,
  title: 'teach online class',
};

const { id, title } = todo1;
console.log(id, title);

// JSON Object
/*
 * JSON Stands for JavaScript Object Notation
 * It's lightweight data-interchange format
 * it is essentially a way of storing data in simple, human-readable format
 *
 *
 *
 *
 */

const obj = {
  name: 'Indrajeet',
  age: '25',
  city: 'Bangalore',
};

// Turn object into JSON string
const str = JSON.stringify(obj);
console.log(str);

// Turn JSON String into object
const ob = JSON.parse(str);
console.log(ob);

// we cannot access properties from a JSON string
console.log(str.name);

console.log(str[0]);
//In string every charter is index so at index 0
// '{'is there so it printed it
