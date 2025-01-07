let x=100;
console.log(x);
console.log('Hii');
console.warn("WARN");
console.error("ERROR");
console.table({name: 'Khushi', email: 'khushiverma1504@gmail.com', phone: 8840530340})
console.group('Simple')
console.log('Hii');
// console.error("ERROR");
console.warn("WARN");
console.groupEnd();

const styles= 'padding: 10px; background-color: pink; color: green;';
console.log('%cHello World',styles);

//Primitive Data Types
//String
// const firstName='Sara';
//Number
const age=30;
//Null
const aptNum= null;
//Boolean 
const hasKids= true;
//Undefined
let score;
//Symbol
const id= Symbol('id');
//BigInt
const num=954454587574874584545875845n;

// Reference Types
const arr=[1,2,3,4];
const person={
    name: 'Brad'
};
function sayHello(){
    console.log('Hello');
}
const output= sayHello;
console.log(output, typeof output);


//Values stored on the stack
const name='Brad';
const age1=30;

//Values stored in heap
const persons={
    name: 'Khushi',
    age: 20
};

let newPerson= persons;
newPerson.name='Ashutosh';
const newName=name;
console.log(name, newName);
console.log(persons, newPerson);

//Type conversion
let amount='Hello';
//Covert string to number
amount= parseInt(amount);
// amount=+amount;
// amount=Number(amount); ->This is a number constructor

//Covert number to string 
// amount=amount.toString();
// amount=String(amount); ->This is a string constructor

//Covert string to decimal
// amount=parseFloat(amount);

//Covert number to Boolean
// amount= Boolean(amount);
console.log(amount, typeof(amount));
console.log(Math.sqrt(-1));
console.log(NaN+1);
console.log(NaN+undefined);
console.log('foo'/3);
console.log(undefined+undefined);


//Arithmetic Operators
let a;
a=5 + 5;
a=5 - 5;
a= 5*5;
a=5/5;
a=5%5;
//Concatenation
a='Hello '+'World';
//Exponent 
a=5**2;
//Increment
a++;
//Decrement
a--;
//Assignment Operator
a=5;
a-=2;
a*=2;
a/=2;
a%=2;

//Comaprison Operators
a=2==2;
a=5>8;
a=4<6;
a=2>=1;
a=5<=8;
a=2===2;
a=2!=2;
a=2!=='2';
console.log(a);

//Type Coercion
let b;
b=5+'10'; 
// b=5*'5';
// b=5/'2';
// b=5%'5';
// b=2-'1';
b='Hello'*2;
b=false+2;
b=true+2;
b=null+5;
b=5+undefined;
console.log(b,typeof(b));



//Strings
myName='Mitali';
str='Hello, my name is '+myName+' and I am ' +age+ ' years old.';
console.log(str);

//Template Literals
str1=`Hello, my name is ${myName} and my age is ${age} years.`;
console.log(str1);

// String Properties and Methods
s=new String('Hello World');
t=typeof(s);
len=s.length;
len=s.__proto__;
pr=s.toUpperCase();
pr=s.toLowerCase();
m=s.charAt(3);
m=s.indexOf('W');
m=s.substring(1,7);
m=s.slice(-11,-6);
console.log(pr);
console.log(s);
str="        THIS is great      ";
str=str.trim()+ '.';
rep=str.replace('THIS', 'This');
rep=str.includes('ist');
rep=s.valueOf();
console.log(s);
console.log(rep);



//Capitalize Challenge
const myString='developer';
let myNewString;
s1=myString.charAt(0);
s1=s1.toUpperCase();
myNewString=s1+ myString.substring(1);
console.log(myNewString);


//Working with Numbers
let op;
const numb=new Number(5.256);
op=numb.toString();
op=numb.toString().length;
op=numb.toFixed(2);
op=numb.toPrecision(2);
op=numb.toExponential(2);
op=numb.toLocaleString('en-US');
op=numb.valueOf();
op=Number.MAX_VALUE;
op=Number.MIN_VALUE;
console.log(typeof op);
console.log(op);



//Math Object
// console.log(Math);
let n;
n=Math.sqrt(9);
n=Math.pow(2,5);
n=Math.round(4.3);
n=Math.round(4.9);
n=Math.ceil(4.3);
n=Math.floor(4.8);
n=Math.abs(-385);
n=Math.max(4,2,6,8);
n=Math.min(4,2,6,8);
n=Math.floor(Math.random()*10+1);
// console.log(n);


//Number Challenge

x=Math.floor(Math.random()*100+1);
const y=Math.floor(Math.random()*50+1);
console.log(x);
console.log(y);
const sumOutput=`${x}+${y}=${x+y}`
const diffOutput=`${x}-${y}=${x-y}`
const productOutput=`${x}*${y}=${x*y}`
const diviOutput=`${x}/${y}=${x/y}`
const remainOutput=`${x}%${y}=${x%y}`
console.log(sumOutput);
console.log(diffOutput);
console.log(productOutput);
console.log(diviOutput);
console.log(remainOutput);


//Date and Time Object
let d=new Date();
d= new Date(2021,6,16,12,39,0,0);
d= new Date('06-16-2021');
d= new Date('06-16-2021 T 11:30:0');
d=Date.now();
d=new Date(1735970520127);
d=d.getTime();
d=d.valueOf();
d=Math.floor(Date.now()/1000);
d=new Date();
// // d=d.getFullYear();
// d=d.getMonth()+1;
// // d=d.getDate();
// d=d.getDay();
// // d=d.getHours();
// d=d.getMinutes();
// // d=d.getSeconds();
// d=d.getMilliseconds();
// d=`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
x=Intl.DateTimeFormat('hi').format(d);
x=Intl.DateTimeFormat('default',{month: 'long'}).format(d);
x=d.toLocaleString('default', {day:'numeric', month: 'short',year:'numeric', hour:'numeric', minute:'numeric',second:'numeric', timeZone:'Asia/Kolkata'});
console.log(x);


//Creating Array object

//Using array literal
const numbers=[12,26,36,20];
console.log(numbers);

//Using array constructor
// const fruits= new Array('apple', 'ananas', 'banana', 'guava');
// console.log(fruits);

// x=fruits[3]+fruits[1];
// x=`My favourite fruit is ${fruits[0]}`;
// const mixed= ['hello', 245, true, null, undefined];
// console.log(mixed.length);
// fruits[1]='grapes';
// x=fruits;
// // fruits.length=2;
// fruits[fruits.length]='blueberry'
console.log(x);


//Array methods
const ar=[36,26,54,78,69];
ar.push(25);
ar.pop();
ar.unshift(25);
ar.shift();
// ar.reverse();
x=ar.indexOf(21);
x=ar.includes(364);
x=ar.slice(1,3)
x=ar.splice(1,3).reverse().toString().charAt(1);
console.log(x);
console.log(ar);


//Nested Arrays
const fruits=['apple', 'ananas', 'banana', 'guava'];
const berries=['raspberry', 'blueberrry', 'blackberry', 'strawberry'];
// fruits.push(berries);
// x=fruits[4][1];
const allfruits=[fruits, berries];
x=allfruits[0][3];
// x=fruits.concat(berries);

//Use of spread Operator
x=[...fruits, ...berries];
const ab=[1, 2, [3,4], 5, [6,7], 8];

//Flatten Operator
x= ab.flat();
console.log(ab);

//Static Methods on Array Objects
x=Array.isArray('Hello');
x=Array.from('Helllo');
const p=1;
const q=2;
const r=3;
x=Array.of(p,q,r);
console.log(x);


//Array Challenge 1
const array=[1,2,3,4,5];
array.reverse();
array.unshift(6);
array.push(0);
console.log(array);

//Array Challenge 2
const arr1=[1,2,3,4,5];
const arr2=[5,6,7,8,9,10];
arr1.splice(4);
x=arr1.concat(arr2);
console.log(x);


//Object Literals
const per={
    name:'Jane Doe',
    age:30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'boston',
        state: 'MA'
    },
    hobbies: ['painting','singing']
};
x=per;
x=per.address;
x=per.address.city;
x=per.hobbies;
x=per.hobbies[0];
delete per.isAdmin;
per.name='John Doe';
x=per;
console.log(x);

// Creating Object using constructor
const todo= new Object();
todo.task= 'Buy Milk';
todo.id=1;
todo.completed=true;

const person1={
    adress: {
        coord:{
            lat:42.938,
            lon:-72.321
        }
    }
};
x=person1.adress.coord.lat;
console.log(x);

const obj1={a:1, b:2};
const obj2={c:3, d:4};
// const obj3={...obj1, ...obj2}; Spread Operator
const obj3=Object.assign({},obj1, obj2);  //Using assign method 
console.log(obj3);


const todos=[{id:1, name: 'Buy Milk'}, 
    {id:2, name: 'Take out trash'}, 
    {id:3, name: 'Bring children from school'}, 
];
x=todos[0].name;
x=Object.keys(todo);
x=Object.values(todo);
x=Object.keys(todo).length;
x=Object.values(todo).length;
x=Object.entries(todo);
x=todo.hasOwnProperty('name');
console.log(x);


//Naming in an object
const firstName='Jane';
const lastName='Doe';

const person2={
    firstName,
    lastName,
    age
};

//Destructuring in Objects
todo.user={
    names:'Ashutosh'
};
const {task: todoID,completed, user: {names}}= todo;

console.log(todoID, completed, names);


//Destructuring in Arrays
number1=[12,36,64,98,52];
const [first, second, ...rest]=number1;
console.log(first, second, rest);

//Converting Object literal into JSON file
const post={
    id: 1,
    title: 'Post 1',
    body: 'This is a post'
};

//Convert to JSON string
const str2= JSON.stringify(post);
console.log(str2);

// Parsing a JSON string
const obj4= JSON.parse(str2);
console.log(obj4);


//Onject Challenge

// Step 1: Creation of array of objects
const library=[obj5={
    title: 'The Secret of the Nagas',
    author: 'Amish Tripathi',
    status: {
        own: true,
        reading: false,
        read: false
    }
}, obj6={
    title: 'It ends with us',
    author: 'Collen Hover',
    status: {
        own: true,
        reading: false,
        read: false
    } 
}, obj7={
    title: 'The immortals of Meluha',
    author: 'Amish Tripathi',
    status: {
        own: true,
        reading: false,
        read: false
    }
}];

// Step 2: Changing the read status 
library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;


// Step 3: Destructuring the variable and renaming it
const {title: firstBook}= library[0];

// Step 4: Turn the library object into a JSON string
const str3=JSON.stringify(library);
console.log(str3);


//Function
function sayHii(){
    console.log("Hello World");
}
sayHii();

function add(num1, num2){
    console.log(num1+num2);
}
add(5,10);

function subtract(num1, num2){
    return num1-num2;
    console.log("After return");
}
const result= subtract(15,10);
console.log(result);


//Setting Default Parameters
function registerUser(user='Bot'){
    return user + ' is registered.';
}
// console.log(user);
console.log(registerUser());