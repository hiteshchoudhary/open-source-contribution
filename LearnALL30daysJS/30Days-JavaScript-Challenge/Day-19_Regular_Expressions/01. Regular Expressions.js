// Activity 1: Basic Regular Expressions ✅
// - Task 1:
let str = "This is a 30 Days JavaScript Challenge. I Love JavaScript";
let regex = /JavaScript/g;
let matches = str.match(regex);
console.log(matches);

console.log("***Task 1 Ended Here!✅***");

// - Task 2:
let str2 = "Random Digits are 123 456 789";
let regex2 = /\d/g;
let matches2 = str2.match(regex2);
console.log(matches2);

console.log("***Task 2 Ended Here!✅***");

// ********************************* //

// Activity 2: Character Classes and Quantifiers ✅
// - Task 3:
let str3 = "JavaScript is a Programming Language.";
let regex3 = /\b[A-Z][a-z]*\b/g;
let matches3 = str3.match(regex3);
console.log(matches3);

console.log("***Task 3 Ended Here!✅***");

// - Task 4: Linear Search
let str4 = "30 Days JavaScript Challenge by Hitesh Sir 123.";
let regex4 = /\d+/g;
let matches4 = str4.match(regex4);
console.log(matches4);

console.log("***Task 4 Ended Here!✅***");

// ********************************* //

// Activity 3: Grouping and Capturing ✅
// - Task 5:
let str5 = "(123) 456-7890";
let regex5 = /\((\d{3})\) (\d{3})-(\d{4})/;
let matches5 = str5.match(regex5);
console.log(matches5);

console.log("***Task 5 Ended Here!✅***");

// - Task 6:
let str6 = "user@example.com";
let regex6 = /(\w+)@(\w+\.\w+)/;
let matches6 = str6.match(regex6);
console.log(matches6);

console.log("***Task 6 Ended Here!✅***");

// ********************************* //

// Activity 4: Assertions and Boundaries ✅
// - Task 7:
let str7 = "Hello world!";
let regex7 = /^\w+/;
let matches7 = str7.match(regex7);
console.log(matches7);

console.log("***Task 7 Ended Here!✅***");

// - Task 8:
let str8 = "Hello world!";
let regex8 = /\w+$/;
let matches8 = str8.match(regex8);
console.log(matches8);

console.log("***Task 8 Ended Here!✅***");

// ********************************* //

// Activity 5: Practical Applications ✅
// - Task 9:
let password = "Passw0rd!";
let regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
let isValid = regex9.test(password);
console.log(isValid);

console.log("***Task 9 Ended Here!✅***");

// - Task 10:
let url = "https://www.urlinfo.com";
let regex1 = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/?]?.*)$/;
let isValid2 = regex1.test(url);
console.log(isValid2);

console.log("***Task 10 Ended Here!✅***");
