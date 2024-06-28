// This is a simple calculator code using cli in js 
const readline = require('readline-sync');

const add =(a,b)=>{
    console.log(a+b);
}
const sub =(a,b)=>{
    console.log(a-b);
}
const mul =(a,b)=>{
    console.log(a*b);
}
const div =(a,b)=>{
    if(a/0){
      console.log("0")
    }else{

        console.log(a/b);
    }

    const calculat = ()=>{
    const num1 = parseInt(readline.question("enter Your First number"));
    const num2 = parseInt(readline.question("enter Your second number"));
    const operator = readline.question("enter your Operator:+ ,- ,* ,/ ");
    switch (operator) {
        case "+": add(num1 , num2);
            
            break;
        case "-": sub(num1 , num2);
            
            break;
        case "*": mul(num1 , num2);
            
            break;
        case "/": div(num1 , num2);
            
            break;
    
        default:" not a valid key";
            break;
    }
    }
    calculat();
}
