/*
The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array. It accepts a function executed on all the items of the specified array in the left-to-right sequence. The returned single value is stored in the accumulator.

*/



const users = [
    {fName: "Ryan", lName: "Dahl", age: 43},
    {fName: "Brendan", lName: "Eich", age: 62},
    {fName: "Jacky", lName: "Chan", age: 70},
    {fName: "Elon", lName: "Musk", age: 52},
];


const output = users.reduce((acc, crr) =>{
    
    if(crr.age < 30){
        acc.push(crr.fName)
    }
    return acc
},[])

console.log(output);