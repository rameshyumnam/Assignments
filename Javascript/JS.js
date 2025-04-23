// This is a console statement
console.log("My name is Ramesh Yumnam");

// This is an alert System
//alert("This is an alert message!")

// VARIABLES->Declaration of variables
// (reserved keywords) (variable name) (type of values)
let fullName = "Tomba Technologies";
console.log(fullName);

const randomNumber = 45678;
const favNumber = 75;
let num = 2;

//Basic math function
console.log(2+2);
console.log(randomNumber - favNumber);
console.log(favNumber * num);
console.log(randomNumber / favNumber); // find quotient
console.log(favNumber % num); // find remainder
console.log(--num); // substract 1
console.log(num++); // add 1

// BOOLEAN yes or no true or false 1 or 0
let isLoggedIn = NaN;
let numbers = 10;
console.log(numbers + undefined);

// false
// null
// undefined
// 0
// -0
// NaN
// '', "", ``, (enpty string);

// Comparision operators < > <= >=
console.log(10 > 10);
console.log(10 < 10);
console.log(10 <= 10);
console.log(10 >= 10);

// === strict equality (type + value)
// !== strict non-equality (type + value)
// == Loose equality (value)
// != loose non-equality (value)
console.log(10 === 10);
console.log(10 !== 10);
console.log(10 == 10);
console.log(10 != 10);

// Equality check
let a = "10";
let b = 10;
console.log(a !== b)

// STRING: Sequence of character used to represent text.
let firstName = "Optivoxx";
let lastName = "Technologies";
let fulName = firstName + lastName; 
console.log(firstName);
console.log(lastName);
console.log(fulName);

// 1. CONCATENATION
let finalName = firstName.concat(lastName);
console.log(finalName);

// 2. APPEND
let stringAppend = (finalName += "Tomba");
console.log(stringAppend);

// 3. LENGTH 
console.log(lastName.length);

// 4. CASES 
console.log(lastName.toUpperCase());
console.log(firstName.toLowerCase());

// 5. SLICE
console.log(firstName.slice(0, 4));

// 6. SPLIT AND JOIN
console.log(lastName.split(" ").join("_"));

// 7. INCLUDES 
console.log(lastName.includes("o"));

// 8. TRIM 
console.log(lastName.trim());

// TYPE CONVERSION
// converting data types to another, like string to number or number to boolen.
let amount = 100;
let money = "100";
let floatValue = "99.6"

// convert string to number
money = parseInt(money);
console.log(typeof money);

// number to string
amount = toString(amount);
console.log(typeof amount);

// Control Flow
// 1. Conditional statements if {} else {}
let x = 100;
let y = 100;
if (x > y) {
    console.log(`${x} is greater than ${y}`)
} else if (x == y) {
    console.log(`${x} and ${y} are equal`)
} else {
    console.log(`${y} is greater than ${x}`)
}

let time = 4;

if (time < 12) {
    console.log("Good Morning!");
} else if (time < 18) {
    console.log("Good Afternoon!");
} else {
    console.log("Goon Evening!");
};

// Check odd even of a number with conditionals statement
let number = 123459;

if (number % 2 == 0) {
    console.log(`${number} is even`);
} else {
    console.log(`${number} is odd`);
};

// Switch case
let day = "Sunday";

switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;

    case "Tuesday":
        console.log("Today is Tuesday");
        break;

    case "Wednesday":
        console.log("Today is Wednesday");
        break;

    case "Thursday":
        console.log("Today is Thursday")
        break;

    case "Friday":
        console.log("Today is Friday");
        break;

    case "Saturday":
        console.log("Today is Saturday");
        break;

    case "Sunday":
        console.log("Today is Sunday");
        break;
    
    default:
        console.log("Don't know what day is today.");
}

// For loop
let fruits = ["apple", "banana", "mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
};

for (let i = 0; i <= 10; i++) {
    console.log("Optivoxx Technologies" , i);
}

// While loop 
//let userClicked = false;
//while (!userClicked) {
//    console.log("Waiting for User to click....");
//};

let i = 10;

while (i <= 100) {
    console.log("Optivix Technologies ", i);
    i++;
};