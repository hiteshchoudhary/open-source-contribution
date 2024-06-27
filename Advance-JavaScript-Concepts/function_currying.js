/*
 currying is a technique in JavaScript that allows you to transform functions with multiple arguments into a sequence of functions, each taking one argument at a time. It promotes code reusability, comparability, and flexibility

*/



// function multiply(x, y, z) {
//     return x * y * z
// } 

// multiply(2, 3, 5)

// multiply(2)(3)(5)


// function multiply(x){
//     return function(y){
//         return function(z){
//             return x * y * z
//         }
//     }
// }

// console.log(multiply(4)(2)(5))

//infinity curring

// function multiply(x){
//     return function(y){
//         if(y) return multiply(x*y)
//             return x //else
//     }
// }

// console.log(multiply(1)(2)(3)());


// function multiplyByTwo(x) {
//     return x * 2
// }

// function multiplyByFour(x) {
//     return x * 4
// }

// function multiplyByNine(x) {
//     return x * 9
// }

// function multiplyByN(x){
//     return function(y){
//         return x*y
//     }
// }

// const multiplyByFour = multiplyByN(4)

//with bind function

function multiply(a, b){
    return a * b
}

const multiplyByTwo = multiply.bind(this, 2)



