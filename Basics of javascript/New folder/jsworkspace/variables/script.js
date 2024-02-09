// log a number
// console.log(123);

// log a string
// console.log('Hello World');

// Log multiple values
// console.log(123, 'Hello', true);

// log a variable
// let x = 100;
// console.log(x);

// console.error()
// console.error('This is an error');

// console.warn('This is a warning');

// console.table({ name: 'Indrajeet', city: 'Bangalore' });

/*
    Variables: variables are containers for pieces of data.

    Declaring a variable 
        1. var
        2. let
        3. const

    Naming conventions:
        1. only letters, numbers , underscores and dollar signs
        2. can not with a number
*/

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 25;
console.log(age);

// let first_name = 'Rahul';
// let firstname = 'Brock';

let x;
x = 100;
console.log(x);

const y = 45;
console.log(y);

const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);

const person = {
  name: 'Indrajeet',
};

person.name = 'John';
person.email = 'test@test.com';
console.log(person);
