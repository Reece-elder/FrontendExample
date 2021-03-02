'use strict';

// * Promises

// A promise is a placeholder for some data that will be available: immediately, some time in the future or possibly not at all
// When data is needed and not available straight away, we wait for the data to be availble
// There must be a method to execute the code when the data is available

// Promises come in 3 states:
// ? Pending - Not fulfilled or rejected yet
// ? Fulfilled/Success - The action Relating to the promise succeeded
// ? Rejected/Failed - The action relating to the promise failed

// .then() If succesful what should happen next
// .catch() If failed/rejected what should happen next

let newPromise = new Promise( (resolve,reject) => {  // Promise takes in two paramaters, resolve and reject
    let a = 1+0;
    if (a==2){
        // What happens in the success outcome
        resolve("Succeeded :) ");  //newPromise Message (if Succeeded)
    } else {
        // What happens in the reject outcome
        reject("Failed :( ");  //newPromise Message (if Failed)
    }
});

newPromise.then((message) => {  // Arrow Function taking in message from lines 21 + 24
    console.log(`This is in the .then block and the status is: ${message}`);  
    // .catch() is executed if rejected/failed
}).catch((message) => {
    console.log(`This is in the .catch block and the status is ${message}`); 
}).then(() => {
    console.log(`This will be called regardless of the outcome`);
});

// * Callbacks

// Callbacks are functions passed into other function as an argument, it is then invoked inside the outer function to complete some kind of action

// The function being called back
const message = (text) => {
    alert(`Hello ${text}`);
}

// The function doing the callback 
const processInput = (callback) => {
    let text = prompt(`Please put your name`);
    callback(text);
}

// Invoking the function which does the callback, passing in the callbacked function as a paramter
processInput(message);
