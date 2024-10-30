function userMessage(userName){
    if(!userName){
        console.log("Please enter your username");
        return;
    }
    return `${userName} is logged in`;
}
const message = userMessage("thunderOp9069");
console.log(message);
