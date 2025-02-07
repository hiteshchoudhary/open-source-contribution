console.log("LMAO")

// Inheritance code taught by Hitesh Choudhary Sir 
class User{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher("chai", 'chai@gmail.co','123')

chai.addCourse()