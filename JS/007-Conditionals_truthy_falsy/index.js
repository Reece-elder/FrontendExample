'use strict';

// Each value has inherent boolean value known as truthy or falsey
// All values are truthy UNLESS they are defined as falsey

// What do we think is falsey? 

// * Falsey values: 

let falseyBool = false;
let falseyNum = 0;
let falseyStr = "";
let falseyUndef = undefined;
let falseyNull = null;
let falseyNaN = NaN;

// * Truthy Values: 

let truthy1 = '0';
let truthy2 = 'false';
let truthy3 = [];
let truthy4 = {};
let truthy5 = function(){};

// * Conditionals

let bool1 = true; //1
let bool2 = false; //0

// check for equality
//  when we use == we only check the value - WE DONT CARE ABOUT THE TYPE
console.log(bool1 == bool2); //false
console.log(1 == 1);
console.log(1 == "1"); //true?
console.log([1] == "1"); //true
console.log(bool1 == 1); //true
console.log(bool1 == "1"); // true

//Strict equality
// when we use === it check the value and the type
console.log(1 === "1"); // false
console.log(1 === 1); //true
console.log(bool1 === true); //true
console.log(bool1 === 1); //false

//inequality
//When using ! we're saying is not equal to this.
console.log(1=="1");//true
console.log(1!="1");// false
console.log(1!=="1");// true!!!
console.log([10]!="10");// false
console.log([10]!=="10");// true

// * If statement

// If something is x do y

// if ([boolean condition = true]) {
//     do this thing;
// } else if ([other condition is this]) {
//     do this thing;
// } else {
//     do this thing;
// }

let pizzaEaten = false; 
let pizzaFlavour = "BBQ Chicken";

if (pizzaEaten){
    console.log("No pizza left.. sad face.")
} else if (pizzaFlavour == "Pepperoni"){
    console.log ("Pepperoni pizza left!");
} else {
    console.log(`There is ${pizzaFlavour} left!`);
}

// * Ternary if statement
// Common if statement is with a simple condition that has 2 possible outcomes. 

const myAge = 25;

if (myAge > 18) {
    console.log(`Sad times, you're ${myAge}, you have to adult now.`);
} else {
    console.log(`Congrats, youre ${myAge}, you can just play video games all day.`)
}

//ternary method
// ([condition] ? value1 : value2);

let adultString = `Sad times, you're ${myAge}, you have to adult now.`;
let childString = `Congrats, youre ${myAge}, you can just play video games all day.`
let ageString = (myAge > 18 ? adultString : childString);
console.log(ageString);

// Do the exercises pls



