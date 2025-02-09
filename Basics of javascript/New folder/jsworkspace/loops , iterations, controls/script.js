const x = 20; // global scope variable

// if (x > 5) {
//   console.log(`${x} is greater than 5`);
// }

// if (x === 10) {
//   console.log(`${x} is equal to 10`);
// }

// if (x > 5) {
//   console.log(`${x} is greater than 5`);
// } else {
//   console.log(`${x} is less than or equal to 5`);
// }

if (x > 5) {
  const y = 10; // block scope variable
  var z = 30;
  //   console.log(`${x} is greater than 5`);
  //   console.log(`${y} is greater than 5`);
}
// we can acess  var anywhere in program but not const and let
// console.log(z);

const d = new Date();
const hour = d.getHours();
 //date and hours  for getting output of realtime
 //console.log(d);

// if (hour < 12) {
//   console.log('Good Morning!');
// } else if (hour < 18) {
//   console.log('Good Afternoon!');
// } else {
//   console.log('Good Night!');
// }

// Multiple conditions

// if (hour >= 7 && hour < 15) {
//   console.log('its work time');
// }

// if (hour >= 21 && hour < 24) {
//   console.log('Dinner time');
// }

const d1 = new Date();
const month = d1.getMonth();

switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('It is June');
    break;
  default:
    console.log('it is not jan , feb or june');
}

const age = 15;
//  syntax-: condition ? true : false
age >= 18 ? console.log('You can vote!') : console.log('you cannot vote!');

// for-loop
for (let i = 1; i <= 10; i++) {
  console.log('Number ' + i);
}

for (let i = 0; i <= 100; i += 5) {
  const message = 'Number' + i;
  console.log(message);
}

  
for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log('7 is my favourite number');
  }
  console.log('Number' + i);
}

// Looping over arrays
const names = ['Brock', 'Shane', 'Warne', 'Micheal', 'Clark'];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let i = 0; i < names.length; i++) {
  if (i === 2) {
    console.log(names[i] + ' is the best');
  } else {
    console.log(names[i]);
  }
}

// while-loop
let i = 0;
while (i <= 20) {
  console.log('Number ' + i);
  i++;
}

const arr = [10, 20, 30, 40];

let j = 0;

while (j < arr.length) {
  console.log(arr[j]);
  j++;
}

// For Of Loop
/*
    for(variable of iterable)
*/

const arr1 = [1, 2, 3, 4, 5];
for (const number of arr1) {
  console.log(number);
}

const greet = 'Hello world';

for (const letter of greet) {
  console.log(letter);
}

const map = new Map();
map.set('name', 'Indrajeet');
map.set('age', 25);

for (const [key, value] of map) {
  console.log(key, value);
}

// For In Loop
/*
    for(let key in object)
*/

const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'green',
  color4: 'yellow',
  color5: 'orange',
  color6: 'purple',
};
// for getting key
for (let key in colorObj) {
  console.log(key);
}
// for getting value
for (let key in colorObj) {
  console.log(colorObj[key]);
}
// for..in loop for arrays
const colors = ['Red', 'Yellow', 'Green'];

for (let key in colors) {
  console.log(colors[key]);
}

// for Each method

const socials = ['Facebook', 'Twitter', 'Instagram', 'Linkedin'];

socials.forEach(function (item) {
  console.log(item);
});
// => is arrow function (used a lot)
socials.forEach((item) => console.log(item));

// Filter Method - Arrays method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

//map method
const doubleNumbers = numbers.map((number) => number * 2);

console.log(doubleNumbers);
