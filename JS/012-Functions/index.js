'use strict';

// * What are functions?
// Function is executed when something invokes it, keeps code DRY
// Functions have global scope there allow use through out the code

function add(x, y) {
    return x + y;
}

// * Function Expression
//  Function expressions are stored as variables meaning they can exist locally, keeping code clean and concise

const sub = function(x, y){
    return x - y;
}

// * Function formatting 
// Function names may contain letters, digits, underscores and dollar signs (same as variables)
// The paranthesis may include paramaters seperated by coomas

// When JS reaches a return statement, the function stops executing. 
// The return value is often returned back to the caller. 

console.log(add(5,4));

// Using the () invokes a function when calling it. Accessing without paramaters returns the function as an object
console.log(add);

let x = 5;
let y = 7;

// Functions can also be used as variable values
let myStr = `The sum of ${x} + ${y} = ${add(x,y)}`;
console.log(myStr);

// * arrow functions 
// Arrow functions are a shorthand method of writing functions, to improve legibility. 

const helloFunc = function() {
    return "helloWorld";
}

// The function word has been removed
let helloArrow = () => {
    return "helloWorld";
}

// Can be made shorter if the function has exactly one statement
helloArrow = () => "helloWorldNew";

// Paramaters can be passed in as well
let paramArrow = (x) => `Hello ${x}`; 

console.log(helloFunc());
console.log(helloArrow());

console.log(paramArrow("reece"));

// Do the exercises pls