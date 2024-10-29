let arr = [34,87,13,233,284,8778]
let sum = arr.reduce((acc,curr)=>{
    return acc + curr;
},0)
console.log(sum);
