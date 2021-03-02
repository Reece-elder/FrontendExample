'use strict';

//Iteration allows us to modify variables to add functionality, such as a counter or list of items.

let counter = 1;
console.log(`counter value is ${counter}`);
console.log(counter++);
console.log(`counter value is ${counter}`);
// Counter is read first, then it is incremented by 1


let counter2 = 1;
console.log(`counter2 value is ${counter2}`);
console.log(++counter2);
console.log(`counter2 value is ${counter2}`);
// Counter is read second, then it is incremented by 1


// * More complex iteration can be done through loops

// * For loop
// for([initial variable]; [condition]; [increment];){
//     what we want to do
// }

for(let i = 0; i < 10; i++){
    console.log(i);
}

console.log("=================")

for(let i = 0; i <= 10; ++i){
    console.log(i);
}

console.log("=================")
for(let i = 0; i < 10; ++i){
    console.log(`i is equal to ${i}`);
}

// * While Loop
// Loop that runs while the declared boolean is = true. May not run ever if the boolean begins as false

//  while([declared boolean = true]) {
//     what we want to do
// }

let notEnoughPizza = true;
let pizzaSlices = 0;

while(notEnoughPizza) {
    console.log(`Theres only ${pizzaSlices} pizza slices :( `);
    pizzaSlices+=8;

    if (pizzaSlices > 40) {
        notEnoughPizza = false; 
    }
}
console.log(`I think ${pizzaSlices} pizza slices is enough..`)

// * Do While Loop
// Loop that runs once before checking the declared boolean = true, will always run at least once

// do {
//     what you want to do;
// } while ([declared boolean = true]);

let myBool = false;
do{
    console.log("Whats going on friends!!!!");
}while(myBool)

// * Switch Case
// Evaluates an expression matching a caselabel
// I.e, allows you to loop through a series of different statements rather than nested if/else statements. 

// switch ([variable to test]) {
//     case 0:
//         statement1;
//     case 1:
//         statement2;
//     case 2:
//         statement3;
// }

// When the variables matches a case label control is passed to that specific case.
// This will continue to run until flow is terminated with `break` or `return`
// if no case is matched, control passes to the default case.

const dayNumber = 1;
let day;

switch(dayNumber){
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5: 
        day = "Friday";
        break;

    default:
        console.log("no clue!!!");
}

console.log(`The day of the week is ${day}`);

// Do the Exercises!