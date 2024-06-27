/*
Memoization is a technique for saving values returned by a function so that you don't have to repeat calculations you've already done. This strategy is convenient when we have a frequently called function whose analysis is time-consuming

*/




// const cache = {}

// function doHeavyCalculation(x) {

//     if(cache[x]) return cache[x]

//     const startTime = Date.now()
//     let currentTime = startTime
//     while(startTime + 1000 > currentTime) {
//         currentTime = Date.now()
//         console.log('Calculating...', (currentTime - startTime));
//     }

//     const result = + Math.sqrt(x).toFixed(3)
//     cache[x] = result
//     return result
// }


function getYourMemoizedFunction(){
    const cache = {}
    function doHeavyCalculation(x) {
    if(cache[x]) return cache[x]

    const startTime = Date.now()
    let currentTime = startTime
    while(startTime + 1000 > currentTime) {
        currentTime = Date.now()
        console.log('Calculating...', (currentTime - startTime));
    }

    const result = + Math.sqrt(x).toFixed(3)
    cache[x] = result
    return result
    }
    return doHeavyCalculation
}

const memoizedHeavyCalculation = getYourMemoizedFunction()

console.dir(memoizedHeavyCalculation(17))



function domemo(){
    let cache = {};

function doHeavyCalculations(x){
    if(cache[x]){
        return cache[x]
    }
    const start = Date.now()
    let current = start
    while(start + 100 > current){
        current = Date.now()
        console.log("calculating...");
        // return Math.sqrt(x)
        
    }
    let res =  Math.sqrt(x)
    cache[x] = res
    return res
}
    return doHeavyCalculations
}
// doHeavyCalculations()

const memo = domemo()