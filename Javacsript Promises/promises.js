// promise ka kaam hota hai problem ko resolve krega ya reject!



const promiseOne = new Promise(function (resolve, reject) {
    // do async task 
    // DB calls , cryptography, network 
    setTimeout(function () {
        console.log('Aysnc task is complete');
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log('promise is consumed');
})




// Another method (easy)

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async 2 complete');
        resolve();
    }, 1000)
}).then(function () {
    console.log('promise-2 consumed');
})





new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async 3 actived');
        resolve({username:'XYZ', emailId: 'XYZ@example.com'})
    },1000)
}).then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'XYZ',password:123});
        }else{reject('ERROR: Something went wrong')}
    },1000)
})

const username = promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=> {console.log(error);}).finally(()=>console.log('the promise is either resolve or reject'));


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'Javascript',password:'123'});
        }else{reject('ERROR: JS went wrong')}
    },1000)
})

async function consumePrmomiseFive(){
    try {
       const response = await promiseFive
       console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePrmomiseFive()


async function getAllUser() {
    try {
        const response = await fetch('https://api.github.com/users/XYZ')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
}

getAllUser()

fetch('https://api.github.com/users/XYZ')
.then((Response)=> {return Response})
.then((data)=>console.log(data))
.catch((error)=>console.log(error))