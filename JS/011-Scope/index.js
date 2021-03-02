// 'use strict';

// * Scope
// JS there are two types of scope, Local and Global
// Scope determines accessibility and visibility of variables

// * Local Scope
// Variables declared inside a function are only accessible within the functions and when clg the function

function plantFunc(){
    let plant = "Fern Plant"
    console.log(`my ${plant} from within the function`);
    return plant;
}

// Calls function, returns from within function
plantFunc();

// Calls Function which does console.log and prints out the return of the function
console.log(plantFunc());

// Errors as plant is within plantFunc 
// console.log(plant);

// * Global Scope
// Variables declared outside of a function are accessible within and outside of functions

let colour = "teal";

function colourFunc(){
    let colourStr = `My colour is ${colour}`;
    console.log(colourStr);
    return colour;
}

colourFunc();
console.log(colourFunc());
console.log(colour);

// * Automatically Global
// If a variable isn't declared in a file but is referenced inside a function it is automatically added to the global scope
// This is stopped by 'use strict' 
// The value can now be altered anywhere within the file now

function globalFunc() {
    test = "Internal Value";
}

// Test is not available UNTIL globalFunc has been called

//console.log(test);
globalFunc();
console.log(test);

// test is now a global value and can be manipulated within the file.
test = "External Value";
console.log(test);

// * Variable Hierarchy
// When referencing variables, we look for local variables first then global variables
// Without use strict, if none are found a global variable is added. 
