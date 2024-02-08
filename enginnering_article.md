## Introduction
Before understanding what is async programming and what is the need of async programming we need to understand the basic difference between sync and async and even before that we need to understand what does it mean when we say that javascript is single threaded.

## Single threaded nature of js
Programming languages can be of 2 types based on their threaded nature.

1.Multi-threaded: (Java, C++, C#, Golang, etc.)

2.Single-threaded: (JavaScript, etc.)

The single-threaded nature of JavaScript means that it processes one task at a time, and tasks are executed in a sequential manner.

What the heck is a main thread in js?
The main thread is like a worker doing one task at a time. It's the only worker in our example.

This worker (main thread) reads your JavaScript code line by line and does each task one after another. It's diligent but can only focus on one thing at a time.

In the world of web browsers, this worker not only runs your code but also takes care of updating what you see on the screen (HTML and CSS stuff). This means, when you click a button or load a page, the worker is responsible for making it happen.

## Difference between synchronous and asynchronous
In programming terms, Synchronous means together or sequential but one thing at a time and Asynchronous means parallel, context switching between tasks.

This means sync operations are done one after another (main thread) without context switching between operations and if one operation is a time-consuming operations that could potentially block the main thread and lead to a slower code execution.



## What is asynchronous programming?
Async programming is basically managing tasks that might take some time to complete, such as I/O operations, file reading, network request, fetching data from a server, converting data into JSON, or waiting for a user to click a button, without blocking the execution of the rest of the code.

Some operations are not completed immediately and require some time to be completed, these operations are completed in the future, could be after 1 second, or 2 second, or 20 seconds, or even more, and since we are not sure when these tasks will be completed we make sure that these tasks are async in nature.

Because these tasks if taking too long might block the execution of the main thread so they are delegated so that the main thread is able to continue its work.

But who controls this behaviour of thread?

The answer is "runtime environment". It handles context switching between tasks to ensure efficient execution of the code. It can be in nodejs, browser or bun whatever.

How does javascript being single threaded does operations in parallel?
With the help of async functions such as setTimeout(), fs.readFile(), fs.writeFile(), fetch() and so more.

Example of a sync vs. async operation using built-in async functions 👇


COPY

COPY
//flow of the code execution is denoted with numbers in bracket.
const a = 10; // (1)
for(let i = 0; i < a; i++) {
    i += a;
} // (2)
const arr = [1,2,3,4,5]; // (3)
console.log(arr); // (4)
now let's see how async operations gets executed in js.


COPY

COPY
//flow of the code execution is denoted with numbers in bracket.
console.log('hello'); // (1)
setTimeout(function(){
    console.log('Async operation finished!');
},5000) // (4)
console.log('world!'); // (2)
console.log('hehe'); // (3)
In above example, We have used setTimeout() function which is an async function, it does performs something after a certain period of time which is given in milliseconds (5000ms = 5 seconds).

Let's see the full flow of the code execution 👇

hello is printed at first,

then the setTimeout function is read by the thread and since it is an async operation it is delegated and thread continues to do the next operation.

world! is printed on screen, after that it continues on next line

hehe is printed.

and once all the sync tasks are completed, thread becomes idle and now it's free to take back the task which it delegated and now after 5 seconds, it prints Async operation completed.

How can we write our own async function?
By wrapping up the in-built js async functions inside our own created functions.

By using Promises.

Here I will talk about the first approach only.

for example:


COPY

COPY
const delay = 5; // 5 seconds
function printsHelloAfterDelay(callbackFn, delay) {
  setTimeout(function() {
      callbackFn();
    },delay*1000);
}
printsHelloAfterDelay(printHello, delay);
function printHello() {
  console.log('Hello User!')
}
console.log('This is printed first');
Here, I created a sync function but inside there is an async operation happening.

That operation is delegated and once finishe it is pushed onto the callback queue, untill the thread is free it just waits there, and once thread is idle, it is invoked.

