'use strict';

// * Objects
// Objects are unordered collections of related data in the form of key:value pairs.
// An Object is a data type
// Difference between java objects, JS ones are mutable.

// Traditional Object creation 

let luna = new Object();
luna["name"] = "Luna"
luna["colour"] = "Ginger";
luna["fluffy"] = true;
luna["goodCatRating"] = 8;

console.log(luna);
console.log(luna.colour);
console.log(luna.fluffy);
console.log(luna.goodCatRating);

//Object can have new properties added as expando property
luna.chonky = false;
console.log(luna.chonky);

//Objects created more simply using literal notation
let Zaph = {name: "Zaph", colour: "Ashy Black", fluffy: true, goodCatRating: 9, chonky: true};
console.log(Zaph);

//Literal notion to create complex arrays of objects
let cattery = [
    {name: "Oliver", colour: "Cinnamon", fluffy: false, goodCatRating: 7, chonky: true},
    {name: "Hazel", colour: "Beige Fawn", fluffy: true, goodCatRating: 8, chonky: false},
    {name: "Oliver2", colour: "Cinnamon", fluffy: false, goodCatRating: 7, chonky: true},
    {name: "Hazel2", colour: "Beige Fawn", fluffy: true, goodCatRating: 8, chonky: false}
]
console.log(cattery);

//To Loop through an array of objects use a for loop
for (let i = 0; i < cattery.length; i++) {
    console.log(cattery[i]);
}

// * arrays
// Arrays can be:
// Rezised at any time even after initiliasing them
// They index at 0; Array(3) would have elements with indexes 0,1 and 2
// Can be sparsely filled, leaving undefined indexes
// Created in shorthand using square brackets

// 4 ways to create arrays!
let array = Array(); // empty array
let arrayWithSize = Array(10); // array with 10 
let arrayWithVals= Array(1,2,3,4,5,6);
let numbers =[1,2,3,4,5,6];
let phones =["Samsung", "iPhone", "Blackberry", "Nokia"];
let numArray =[,1,,2,3,5];

console.log(array);
console.log(arrayWithSize);
console.log(arrayWithVals);
console.log(numbers);
console.log(phones);
console.log(numArray);

//Arrays can be accessed using the square brackets
let drinkList = [,,,,];
drinkList[0] = "Pepsi";
drinkList[1] = "Dr Pepper";
drinkList[2] = "Fanta";
drinkList[3] = "Sprite";

//To loop through an array use a for loop
for (let i =0; i <drinkList.length; i++){
    console.log(drinkList[i]);
}

// * Array methods

let animalList = ["Dog", "Penguin", "Ostrich", "Snake", "Eel", "Bat"];

//Length of an array
console.log(numbers.length);

//Sorts an array
console.log(animalList.sort());

// Reverses an Array
console.log(animalList.reverse());

// Joins all elements into a single String
console.log(animalList.join());

// Pushes a new element to the end of the array
console.log(animalList.push("Lemur"));

// Pop removes the last element from the array
console.log(animalList.pop());

// Unshift adds a new element to the beginning of the array
console.log(animalList.unshift("Tardegrade"));

// Shift removes the first element from the beginning of the array
console.log(animalList.shift());

// * JSON Formatting

// JSON - Java Script Object Notation 
// Collection of Name/Value Pairs realised as an object (Associative Array)
// Ralised as an array

// JSON formatted as:

let exampleJSON = {
    "key1": "value1",
    "key2": true,
    "key3": 123
};

// Parse method takes a string and converts it to an object
let obj = JSON.parse('{"example":"value"}');
console.log(obj);
console.log(typeof obj);

// Stringify takes JS Objects and returns a string
let str = JSON.stringify({example: "value"});
console.log(str);
console.log(typeof str);

//Exercises pls