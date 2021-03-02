// * test
// ! test
// ? test
// TODO test

// 3 ways we can declare variables
let a = "Deep dish"; //Will change over time!
const b = "Pepperoni"; //Something we do not want to change
var c = "Mushrooms"; //Don't use, has global scope by default

//What not to do
d = "pasta";

// * Variable name rules:

//  Starts with letter, `_`, `$`
//  let £nope = "it aint gonna work";

// Can include digits
// let 123abc = "yep, this is chill";

// are case sensitive
// let caseSensitive = "this is one variable";
// let CaseSensitive = "this is another variable";

// best practice is to use camelCase
// let camelCase = "camelCaseIsTheBest";

// cannot use reserved words:
// let int / else / case = "reserved";

// * JS Dyanmically Typed:
// Data types not declared until runtime / Variable types can mutate

// * JS Data types
// * Boolean, Number, BigInt, String, Undefined, Null, Symbol, Object

//datatypes in JS
const stringExample = "This is a String!";
const numberExample = 20; // we dont have int,double,float....
const bigNumber = 904567665546576867563n; // Bigint
const bool = true;// boolean
const nullExample = null; // object - stating explicitly that it will be empty (no data type)
const undefExplicit = undefined;
let undef;
const obj ={fName:"vinesh",sName:"ghela"};
const myNum = 24.01;
const arrayExample = ["Hawiaan", "Pepperoni", "Four Seasons"];

// * Use typeof to test what the variable is

console.log(typeof stringExample);// String
console.log(typeof numberExample);// number
console.log(typeof bigNumber);// bigint?
console.log(typeof bool);// boolean?
console.log(typeof nullExample);// string? object!
console.log(typeof undefExplicit);// undefined
console.log(typeof undef);// undefined
console.log(typeof obj);// object
console.log(typeof myNum);// number
console.log(typeof arrayExample);

// * Datatypes come in Primitive or Object
// Primitives are immutable, value is stored in location variable accesses, fixed length, quick to look up 
// Objects are collections of properties, value stored in variable is a reference to object in memory, is mutable 

// * String Concatenation
// Strings can be added together using + 

let string1 = "a, b, c, ";
let string2 = "d, e";
let concatString = string1 + string2;
console.log(concatString);

//Strings can be combined with other values, such as num
let string3 = "10 + 10 = ";
let sum1 = 10 + 10;
let finalString = string3 + sum1;
console.log(finalString);

console.log("String3: " + typeof string3)
console.log("sum1: " + typeof sum1)
console.log("finalString: " + typeof finalString)


// * Template literals
// allow for strings to be declared with JS expressions inserted within, using ${} notation
let lameNum1 = 5 + 5;
let lameString1 = "This Sucks";
let lameFinalString = "Is it really worth it " + lameNum1 + " to have this? " + lameString1 + " eurgh.";

// `` around string, variables are ${}
console.log(lameFinalString);
let string4 = "times quicker";
let coolNewString = `gee, this is the future. Its like ${5 * 5} ${string4}`;
console.log(coolNewString);

// Variables exercises pls







