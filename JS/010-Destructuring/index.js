'use strict';

// * Destructuring
// Destructuring allows you to extract data from arrays, objects, maps and sets

// Without Destructuring
const numArray = [1,2,3,4,5,6,7,8];
console.log(numArray[0]);
console.log(numArray[1]);
console.log(numArray[2], numArray[3], numArray[4], numArray[7]);

// With Desturcturing
// const [a,b,c,d,e,f,g,h] = numArray;
// console.log(a);
// console.log(b);
// console.log(c,d,e,h);

// Spread Operators allow you to assign the tail of an array to a single variable name rest
// const [a,b,...rest] = numArray;
// console.log(a);
// console.log(b);
// console.log(rest);

// Skip elements, allows you to leave a blank space using a comma
const [a,,b,c,,...rest] = numArray;
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

// * Destructuring Objects
// Objects can be destructured as well to break them down to smaller parts
const movie = {
    title: "Starship Troopers",
    quote: "Do you want to know more?",
    rating: 10,
    genre: "Sci-Fi"
};
// let {title,quote} = movie;
// console.log(`My favourite movie is ${title} and its famous quote is "${quote}"`);

// Default Values for Objects
let {title,quote, length = 129} = movie;
console.log(`My favourite movie is ${title} and its famous quote is "${quote}". Length of film is ${length} minutes`);

// The original object can then be modified to take in the new attribute (length in this case)

// * Using different Variable names
// When destructuring objects taking the original name and adding : new name, you can assing a new variable name

const pizza = {
    name: "American Hot",
    rating: 8,
    spicy: true
};

let {name: pizzaName, rating, spicy} = pizza;
console.log(`${pizzaName} ${rating} ${spicy}`);

//exercises pls