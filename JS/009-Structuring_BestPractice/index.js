'use strict';

// * Structuring JS Code

/* 
JS has little restrictions (lots of silent errors)
Important to structure it to prevent confusion and human mistakes

Also important to wrap any script within function, to keep scope limited as possible.

*/

// Bad Code
let x = 5;
let y = 7;
let value; 

value = x * y;
console.log(`Value of sum is ${value}`);

// Good code
let mySum = function (x,y) {
    return x * y;
}

console.log(`Value of sum is ${mySum(5,7)}`);

// * Function formatting

// Within Scripts break up code into three sections:
// Variables
// Methods
// Initialisations + Event Listeners

let exampleFunc = function () {

    // * Variables 
   let element = document.querySelector('#app');


   // * Methods 
   let handleClicks = function(event){
       console.log(event.target);
   }


   // * Inits & Event Listeners 
   element.addEventListener('click',handleClicks);
}

// * Modular Code

// Do not keep all tyour JS code in one file! 
// JS Directory within project










