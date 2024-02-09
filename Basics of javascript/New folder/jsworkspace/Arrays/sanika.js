/*arrays and method
const fruits = ['apples', 'oranges', 'mango'];
console.log(fruits);
console.log(fruits.length);
fruits[fruits.length] = 'banana';
console.log(fruits);
const arr = new Array(12, 34, 53,35 ,45,67);
console.log(arr)

const mixed = [true, null, 'hello', [1, 2, 3], 1]
console.log(mixed)

const arr3 = [1, 2, 3, 4, 5];
arr3.push(6);
console.log(arr3);
arr3.pop();
console.log(arr3);
arr3.unshift(55);
console.log(arr3);
arr3.shift();
console.log(arr3);
arr3.reverse();
console.log(arr3);
console.log(arr3.includes(5));
console.log(arr3.indexOf(4));
console.log(arr3.toString());
const newArr = arr.slice(1, 4);
console.log(newArr);
const fruits1 = ['apple', 'pear', 'orange'];

const berries = ['strawberry', 'blueberry', 'rasberry'];

fruits1.push(berries);
console.log(fruits1);
console.log(fruits1[3][1]);

const allFruits1 = [fruits1,berries];
console.log(allFruits1);
console.log(allFruits1[1][2]);
const newArr6 = fruits1.concat[berries];
console.log(newArr6);
const newArr5 = [...fruits1, ...berries];
console.log(newArr5);
const arr7 = [1, 2, [3, 4, [5, 6, [7, 8, 9]]]];
console.log(arr7.flat());
let y;
const a = 1;
const b = 2;
const c = 3;
y = Array.of(a, b, c);
console.log(y);*/
/* strings and method
const firstName = 'sanika';
const age = 19;
console.log('hello, my name is ' + firstName + ' and i am ' + age + ' years old');
console.log(`hello , my name is ${firstName} and I am ${age} years old`);
//strings method
const str = new String('hello world');
console.log(str);
console.log(str[4]);
console.log(str.charAt(3));

const greeting = 'namsate world';
console.log(greeting.length);
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf('l'));
console.log(greeting.substring(0, 4));
console.log(greeting.slice(0, 4));
console.log(greeting.split(' '));
let x = '   hello world   ';
x = x.trim();
console.log(x);
const person = {
    name:'sanuka'
}
person.name = 'sanika';
person.email = 'sanikakachare11@gail.com';
console.log(person);*/

//FUNCTIONS
/*function subtract(x, y) {
    return x - y;
}
const sub = subtract(10, 5);
console.log(sub);

const x = 100;  //global varible
function run(){
    console.log(x);

}
run();
function multiply() {
    const x = 6;
    const y = 4;
    console.log( x * y);
}
multiply();
if (true) {
    const a = 400;
    let b = 200;
    var c = 300;
}
//console.log(a);
//console.log(b);
console.log(c);
console.log(window);
for (var i = 0; i <= 10; i++) {
  console.log(i);
}
console.log(i);

function runAgain() {
    var d = 900;
    console.log(d);
}
runAgain();
 
function first() {
    const x = 100;
    function second() {
        const y = 200;
        console.log(x);
    }
    second();
}
const money = addDollarSign('60');
console.log(money);



function addDollarSign(value) {
    return '$' + value;
}
console.log(addDollarSign(10));

const addPlusSign = function (value) {
    return '+' + value;
};
console.log(addPlusSign(20));
//shorthand proprety
const add = (a, b) => a + b;
console.log(add(4, 5));

const subtract1 = (a) => a - 10;
console.log(subtract1(20));
//for each method
const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(function (number1){
    console.log(number1);
});
// by shorthand 
numbers1.forEach((number1) => console.log(number1));

/*function getCelsius(fahrenheit) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return Math.round(celsius);
};*/
//by shorthand
/*
const getCelsius = (fahrenheit) => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return Math.round(celsius);
}
console.log(getCelsius(65));


if (x > 5) {
  const y = 10; // block scope variable
  var z = 30;
     console.log(`${x} is greater than 5`);
     console.log(`${y} is greater than 5`);
}
// we can acess  var anywhere in program but not const and let
console.log(z);
const d = new Date();
const hour = d.getHours();
console.log(d);
if (hour < 12) {
    console.log('good morning');
}
else if (hour < 18) {
    console.log('good afternoon');
}
else {
    console.log('good night');
}
//multiple conditions
if (hour >= 5 && hour < 15) {
    console.log('its work time');
}
if (hour >= 21 && hour < 24) {
    console.log('its dinner time');
}
const d1 = new Date();
const month = d1.getMonth();
switch (month) {
    case 1:
        console.log('its jan');
        break;
    case 2:
        console.log('its feb');
    case 3:
        console.log('its march');
        break;
    default:
        console.log('its not jan , feb or march');
}
const age = 25;
age >= 18 ? console.log('you can vote') : console.log('you cannot vote');

//loops
for (let k = 0; k <= 100; k++){
    const message = 'number' + k;
    console.log(message);
}
for (let i = 1; i <= 10; i++){
    if (i == 7) {
        console.log('7 is my favaourite');
    }
    console.log('number ' + i);
}
const arr3 = ['john', 'paper', 'doja', 'michale', 'tom'];
for (let i = 0; i < arr3.length; i++){
    console.log(arr3[i]);
}
for (let i = 0; i < arr3.length; i++){
    if (i == 2) {
        console.log(arr3[i] + ' is my best friend');
    }
    console.log(arr3[i]);
}
//while loop
let j = 0;
const arr4 = [10, 20, 30, 40];
while (j <= arr4.length) {
    console.log(arr4[j]);
    j++;
}
let i1 = 0;
while (i1 <= 20) {
    console.log('Number' + i1);
    i1++;
}
//for of loop
const arr5 = [1, 2, 3, 4, 5];
for (const number of arr5) {
    console.log(number);
}
const greet = 'hello world';
for (const letter of greet) {
    console.log(letter);
}
const map = new Map();
map.set('name', 'sanika');
map.set('age', 19);
for (const [key, value] of map) {
    console.log(key, value);
}
//for in loop
const colorObj = {
    color1: 'red',
    color2: 'yellow',
    color3: 'blue',
    color4: 'pink',
    color5:'orange'
}
for (let key in colorObj) {
    console.log(key);
}
for (let key in colorObj) {
    console.log(colorObj[key]);
}
//foreach loop
const socials = ['facebook', 'instagram', 'twitter', 'koo'];
socials.forEach(function (item) {
    console.log(item);
});
socials.forEach((item) => console.log(item)); 
//filter mehtod
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers3 = numbers3.filter((number3)=> number3%2==0);
console.log(evenNumbers3);

//map method
const doubleNumbers3 = numbers3.map((number3) => number3 * 2);
console.log(doubleNumbers3);*/
//OBJECTS
/*const person = {
    name: 'sanika',
    age: 19,
    location: 'pune',
    hobbies: ['movies', 'music'],
    isAdmin: false
};
let x;
x = person.name;
console.log(x);

x = person['location'];
console.log(x);
x = person.hobbies[1];
console.log(x);
person.email = 'sanikakachare11@gmail.com';
console.log(person);
person.age = 20;
delete person.isAdmin;
console.log(person);
person.greet = function () {
    console.log('hello, my name is ' + this.name);

};
person.greet();
console.log(person);
const person1 = {
    address: {
        coordinates: {
            lat: 34.6201,
            lng: -54.05,
        },
    },
};

console.log(person1.address.coordinates.lng);
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 1, d: 4 };
//const obj3 = { obj1, obj2 };
//console.log(obj3);
const obj3 =Object.assign({}, obj1, obj2);
console.log(obj3);
//spread operator
const obj4 = { ...obj1, ...obj2 };
console.log(obj4);

const person2 = {
    name: 'sanika',
    age: '19',
    hoobies: ['movies', 'music'],
    isAdmin: true
}
console.log(person2);
//key method
console.log(Object.keys(person2));

console.log(Object.keys(person2).length);
//values method
console.log(Object.values(person2));
//entries method
console.log(Object.entries(person2));
//destrucring
// destruring in arrays
const numbers = [10,20,30,40,50,60,70];
const [firstNumber, secondNumber, ...rest] = numbers;
console.log(firstNumber, secondNumber);
console.log(rest);
//destruring in objects
const todo1 = {
    id: 1,
    title: 'go to classes',
};
const { id, title } = todo1;
console.log(todo1);
//json
 //Turn object into JSON string
const obj = {
    name: 'sanika',
    age: '19',
    city: 'pune',
};
const string = JSON.stringify(obj);
console.log(string);
//turn json string to object
const ob = JSON.parse(string);
console.log(ob);
console.log(string.name);
console.log(string[0]);

class Circle  {
    #radius;
    constructor(value){
        this.#radius = value;
    }
    get area() {
        return Math.PI * Math.pow(this.#radius, 2);
    }


}
class User{
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`hello, my name is ${this.name}`);
    }
    add(a, b, c) {
        console.log(a + b + c);
    }
    add(a, b) {
        console.log(a + b);
    }
}*/
//DOM
/*console.log(window);
console.log(window.document);
console.log(document);
console.dir(document);
console.log(document.body);
console.log(document.links[0]);
document.write('hello from js');*/
console.log(document.getElementById('main'));
//document.getElementById('main').innerHTML = '<h1>hello world</h1>';

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').getAttribute('class'));
//class name is added here
document.getElementById('app-title').className = 'title';
const title = document.getElementById('app-title');
console.log(title);
//change content
//console.log(title.textContent);
title.textContent = 'I am learing dom manipulation';
title.innerText = 'DOM Manipulation';
title.innerHTML = '<em>Document Object Model</em>';
//styling using js
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';
//queryselector()
/*console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.app-title'));
console.log(document.querySelector('input[type=text]'))
console.log(document.querySelector('li:nth-child(2)'));
const secondItem = document.querySelector('li:nth-child(2)');
secondItem.style.color = 'red';
const thirdItem = document.querySelector('li:nth-child(3)');
thirdItem.style.color = 'green';*/
//queryselectorAll
//console.log(document.querySelectorAll('li'));
//console.log(querySelectorAll('h1'));
const items = document.querySelectorAll('li');
items[0].style.color = 'red';
items[1].style.color = 'green';
items.forEach(function (item) {
   item.style.color = 'red';
});
items.forEach((item) => (item.style.color = 'green'));

//getelementByClassName()

console.log(document.getElementsByClassName('item'));
const items1 = document.getElementsByClassName('item');
const list = Array.from(items1);
list.forEach((item) => (item.style.color = 'blue'));
//getelementByTagName()
console.log(document.getElementsByTagName('li'));
//createElement()
const div = document.createElement('div');
console.log(div);
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'my-element');
const text = document.createTextNode('Hello World');
div.appendChild(text);
//document.body.appendChild(div);
document.querySelector('ul').appendChild(div);