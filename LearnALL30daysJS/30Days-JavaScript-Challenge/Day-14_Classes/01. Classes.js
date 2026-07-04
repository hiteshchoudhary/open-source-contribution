// Activity 1: Class Definition ✅
// - Task 1:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person("Chinmay Kaitade", 24);
console.log(person1.greeting());

console.log("***Task 1 Ended Here!✅***");

// - Task 2:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }
}

const person2 = new Person("Chinmay Kaitade", 24);
person2.updateAge(32);

console.log("***Task 2 Ended Here!✅***");

// ********************************* //

// Activity 2: Class Inheritance ✅
// - Task 3:
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return this.studentId;
  }
}

const firstStudent = new Student("Anushka Patil", 22, "S12345");
console.log(firstStudent.getStudentId());

console.log("***Task 3 Ended Here!✅***");

// - Task 4:
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  greeting() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

const secondStudent = new Student("Anushka Patil", 22, "S12345");
console.log(secondStudent.greeting());

console.log("***Task 4 Ended Here!✅***");

// ********************************* //

// // Activity 3: Static Methods and Properties ✅
// Task 5:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static genericGreeting() {
    return "Hello from the Person class!";
  }
}

console.log(Person.genericGreeting());

console.log("***Task 5 Ended Here!✅***");

// Task 6:
class Student extends Person {
  static studentCount = 0;

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount++;
    console.log(`Total number of students: ${Student.studentCount}`);
  }
}

const student1 = new Student("Rohan Kumar", 20, "3");
const student2 = new Student("Saurabh Singh", 22, "4");

console.log("***Task 6 Ended Here!✅***");

// ********************************* //

// Activity 4: Getters and Setters ✅
// - Task 7:
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person3 = new Person("Chinmay", "Kaitade", 23);
console.log(person3.fullName);

console.log("***Task 7 Ended Here!✅***");

// - **Task 8:
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person4 = new Person("Chinmay", "Kaitade", 30);
person4.fullName = "Aman Sharma";
console.log(person4.fullName);

console.log("***Task 8 Ended Here!✅***");

// ********************************* //

// Activity 5: Private Fields (Optional) ✅
// Task 9:
class Account {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Insufficient funds or invalid amount.");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account1 = new Account(1000);
account1.deposit(500);
account1.withdraw(300);
console.log(`Final balance: $${account1.getBalance()}`);

console.log("***Task 9 Ended Here!✅***");

// Task 10:
class Account {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposit: $${amount}`);
      this.logBalance();
    } else {
      console.log("Deposit amount must be positive");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdraw: $${amount}`);
      this.logBalance();
    } else {
      console.log("Invalid withdraw amount");
    }
  }

  logBalance() {
    console.log(`Balance: $${this.balance}`);
  }
}

// Create an instance of the Account class
let myAccount = new Account("Chinmay Kaitade", 1000);

// Test the deposit method
myAccount.deposit(200);

// Test the withdraw method
myAccount.withdraw(400);

// Test deposit with a negative amount
myAccount.deposit(-300);

// Test withdraw with an amount greater than the balance
myAccount.withdraw(2000);

// Test withdraw with a negative amount
myAccount.withdraw(-300);

console.log("***Task 10 Ended Here!✅***");
