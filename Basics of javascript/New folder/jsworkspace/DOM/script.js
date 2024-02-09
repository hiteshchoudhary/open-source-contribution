/*
    DOM - Document Object Model
    it's programming interface which is manipulate web/HTML Documents.

    The DOM is the structure of the web page that we can interact with using javaScript.
    

*/

// console.log(window);
// console.log(window.document);

// console.log(document);
// console.dir(document);

// console.log(document.body);
// console.log(document.links[0]);

// document.write('Hello from JS');

console.log(document.getElementById('main'));

 document.getElementById('main').innerHTML = '<h1>Hello World!</h1';

/* getElementByID - This method takes a string as an argument and returns the element with the matching id attribute. if no element is found , it returns null
 */

// console.log(document.getElementById('app-title'));

// console.log(document.getElementById('app-title').id);


// console.log(document.getElementById('app-title').getAttribute('class'));
// to add extra property in 2 ways
//1. document.getElementById('app-title').className = 'title';
// second method to create class
// 2.document.getElementById('app-title').setAttribute('class', 'app-title');

const title = document.getElementById('app-title');

// console.log(title);

// change content
// console.log(title.textContent);
//title.textContent = 'I am Learning DOM Manipulation';
title.innerText = 'DOM Manipulation';
title.innerHTML = '<em>Document Object Model</em>';

// Styling Element From JS
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

/*
    querySelector() - This method is very similar to getElementByID(), but it allows us to select elements using CSS Selectors. This means we can select elements by their class, tag name or even by their attributes.
*/
// By Tag
console.log(document.querySelector('h1'));

// By Id
// console.log(document.querySelector('#app-title'));

// By class
// console.log(document.querySelector('.app-title'));

// By Attribute
// console.log(document.querySelector('input[type="text'));

// By Pseudo class
// console.log(document.querySelector('li:nth-child(2)'));

const secondItem = document.querySelector('li:nth-child(2)');

secondItem.style.color = 'red';

/* querySelectorAll()
    -> This method takes a string as an argument and returns a NodeList of all the elements that match the selector. if no element are found , it returns empty NodeList
    - NodeList - it's list of elements that is formatted like an array
*/

// console.log(document.querySelectorAll('li'));

// console.log(document.querySelectorAll('h1'));

const items = document.querySelectorAll('li');

items[0].style.color = 'blue';
items[1].style.color = 'green';

items.forEach(function (item) {
  item.style.color = 'red';
});

items.forEach((item) => (item.style.color = 'green'));

// getElementsByClassName()

// console.log(document.getElementsByClassName('item'));

const items1 = document.getElementsByClassName('item');

// Convert into an array
const list = Array.from(items1);

list.forEach((item) => (item.style.color = 'blue'));

// getElementsByTagName()
// console.log(document.getElementsByTagName('li'));

/*
    document.createElement() - This is the main method we will use to create elements. it takes one argument, which is the tag name of the element we want to create
*/

const div = document.createElement('div');
console.log(div);
// Add a class
div.className = 'my-element';
// Add an id
div.id = 'my-element';

div.setAttribute('title', 'My Element');
/*
  using innerText is not the best way to do this when creating a new element. it is basically meant to get and change the text of already existing elements
  div.innerText = 'Hello world';
*/

// creating a text Node
const text = document.createTextNode('Hello World');

// add the text node to the div
div.appendChild(text);

//for displaying div element  (hello world) on webpage using js

// document.body.appendChild(div);

document.querySelector('ul').appendChild(div);
