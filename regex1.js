// Task 1

//Part 1

const numberRegex = /^\+994(\s?|\-?)5[0-9]{8}$/;

const phoneNumber = "+994553209707";
const phoneNumber1 = "+994553209707213";

const phoneNumberValidation = (phoneNumber) => numberRegex.test(phoneNumber);

console.log(phoneNumberValidation(phoneNumber)); //true
console.log(phoneNumberValidation(phoneNumber1)); //false

//Part 2
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const email = "xasiyevkenan@gmail.com";
const email1 = "xasiyevkenangmail.com";

const emailValidation = (email) => emailRegex.test(email);

console.log(emailValidation(email)); //true
console.log(emailValidation(email1)); //false

//Part 3
const passwordRegex = /^(?=.*[A-Za-z\d@$!%*#?&]).{8,}$/;

const password = "123456a.A";
const password1 = "123456";

const passwordValidation = (password) => passwordRegex.test(password);

console.log(passwordValidation(password)); //true
console.log(passwordValidation(password1)); //false

//Part 4
const ageRegex = /^(1[8-9]|[2-5]\d|65)$/; //for 18-65 age average

const age = 19;
const age1 = 8;

const ageValidation = (age) => ageRegex.test(age);

console.log(ageValidation(age)); //true
console.log(ageValidation(age1)); //false

// Part 5
const nameRegex = /^[A-Za-z\s]+$/;

const name1 = "Kenan";
const name2 = "1kenan2";

const nameValidation = (name) => nameRegex.test(name);

console.log(nameValidation(name1)); //true
console.log(nameValidation(name2)); //false
