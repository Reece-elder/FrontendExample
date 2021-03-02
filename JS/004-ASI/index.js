//ASI Automatic Semi Colon Insertion

//1. Adds ; when two lines are seperated by a line break

let jamesBond = "actor";
let pierce
Brosnan
= "actor";

console.log(jamesBond);
console.log(pierceBrosnan);

//2. Adds ; when two statements are seperated by a closing brace

//3. Adds ; if line terminator follows BREAK, RETURN, THROW or Continue

function helloWorld() {
    return
    {
        "Hello There.";
    }
}