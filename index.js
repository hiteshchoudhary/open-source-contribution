// console.log("LMAO")

let counterstart = 10;
let counterstop = 0;

function timer(){
    console.log(counterstart);
    counterstart--;
    if(counterstop <= counterstart){
        setTimeout(timer,1000);
    }
    else{
        console.log("Merry Christmas");
    }
}

timer()