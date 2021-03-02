'use strict';

// * Dom Manipulation

// DOM represents the Document as nodes and objects, programming language connects to the page

// * Document Selector methods

// *QuerySelector() - Returns the first matching element

// Assigning header1 variable to first h1 (using CSS selector rules) in DOM
let header1 = document.querySelector('h1');

// element.textContent returns the inner html text of element
console.log(header1.textContent);

// style.color changes the style of the selected element
header1.style.color = 'red';

// * QuerySelectorAll()

// Assigner paraList to all Elements belonging to element p
let paraList = document.querySelectorAll('p');

// Element is a nodelist of corresponding elements
console.log(paraList);

// Simplified for loop using of. Modifies all elements of nodeList
for(let obj of paraList){
    obj.style.border = 'solid 5px purple';
}

// Query Selectors work for class and ID
let classEle = document.querySelector('.classHeader');
console.log(classEle.textContent);

let idEle = document.querySelector('#idHeader');
console.log(idEle.textContent);


// * Add Event Listeners
// Event Listeners listen for an event and do a function when that event is triggered

// Function called from HTML
function htmlButton() {
    console.log("Test");
    alert("Button clicked from HTML!");
}

// Assigning method 1 button to element
let button1 = document.querySelector('.method1');
let button2 = document.querySelector('.method2');

// .addEventListener takes in two params
// Event to listen to, click, submit etc. https://www.w3schools.com/jsref/dom_obj_event.asp
// Function that is called, either as an unnamed function
button1.addEventListener('click', function(){
    console.log("Button Clicked from JS"); 
});

// Function that is called, or as a named function
button2.addEventListener('click', myFunction );

function myFunction() {
    console.log("Button Clicked");
}

// * Create Element + Append Child
// Elements can be created and then appended to a chosen parent within the DOM

// Button to create a new element
let newParaBtn = document.querySelector('.newPara');

// Para button event listener, with newPara function assigned
newParaBtn.addEventListener('click', newPara);

// Source of new elements (div to add P's to)
let paragraphTarget = document.querySelector('.source');

// Function which creates a new p element, with innerText of New Paragraph
// Take new element source, use appendChild(newElement) to append newElement
function newPara() {
    let newParaTag = document.createElement('p');
    newParaTag.innerText = "This is a new Paragraph"
    paragraphTarget.appendChild(newParaTag);
}


// * Remove Child
// removeChild(); removes a specified child element from HTML that calls this method

// Finding removeHeader Button and adding event listener
// Event Listener adds the 'removeHeaderFunc' function
let removeHeader = document.querySelector('.removeHeader');
removeHeader.addEventListener('click', removeHeaderFunc);

// Finds the parent which contains the h3 to remove
let removeHeaderParent = document.querySelector('.headerParent');

// Finds the element to remove
let headerToRemove = document.querySelector('.headerToRemove');

// Function to remove the chosen element from the chosen parent
function removeHeaderFunc() {
    removeHeaderParent.removeChild(headerToRemove);
}

// * Replace Child
// Replaces an old child element with a new child element

// Finding removeHeader Button and adding event listener
// Event Listener adds the 'removeHeaderFunc' function
let replaceHeader = document.querySelector('.replaceHeader');
replaceHeader.addEventListener('click', replaceHeaderFunc);

// Create a Strong to replace the H3
let newChild = document.createElement('strong');
newChild.textContent = "Replaced Child!";

function replaceHeaderFunc() {
    removeHeaderParent.replaceChild(newChild, headerToRemove);
}

// * set Attribute
// Allows you to add a new or update the value of an existing ttribute with a HTML element

// Finding the element with the correct class
let header2 = document.querySelector('.HeaderAttribute');

// Using setAttribute sets the chosen elements attribute to a specific value
header2.setAttribute('contenteditable','');
header2.setAttribute('style','color:blue');

// * get Attribute
// Get Attribute allows you to return the value of a specific attribute

// Console Logging out the return of getAttribute('style')
console.log(header2.getAttribute('style'));

// * Remove Attribute
// Remove attribute removes a given attribute off of a specific HTML element

// removeAttribute('attribute') removes this specific attrbute and value
header2.removeAttribute('style');