
function generatePassword(length){
    const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for(let i = 0; i < length; i++){ 
        const randomIndex = Math.floor(Math.random() * str.length);
        password += str[randomIndex];
    }
    return password;
}


console.log(generatePassword(10));