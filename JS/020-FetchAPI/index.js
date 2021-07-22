'use strict';

// C - Create - POST
// R - Read - GET
// U - Update - Put
// D - Delete - Delete

// * Fetch
// Fetch allows us to send and recieve requests utilising promises 

// * Basic Use case for a Get request

fetch(`https://jsonplaceholder.typicode.com/comments`) // 1
    .then((response) => {
        if (response.status !== 200) {  //  2
            console.error(`status: ${reponse.status}`);
            return;
        }
        response.json() // 3
        .then((data) => console.info(data)) // 4
    }).catch((err)=> console.error(`${err}`)); // 5

// 1 - Start using the fetch method and give it a target
// 2 - Check if request is anything but status code of 200. If true log status code and continue to execute
// 3 - Take the response from the fetch and convert to JSON using .json ()
// 4 - Log the data to the console as console.info
// 5 - Fifth line will execute if there is an error

// * Fetch Get by ID

let id = 2 // ID of item you want to retrieve
console.log(`the id is ${id}`);
fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
  .then((response) => {
    if (response.status !== 200) {
      console.error(`status ${response.status}`);
      return;
    }
    response.json().then((data) => {
        console.info(data);
        postData(data);
    });
  })
  .catch((err) => console.error(err));

// Div on HTML chosen as target
let targetDiv = document.querySelector('div');

// Function to post data to website

  let postData = (data) => {
      let newData = document.createElement('p');
      let bodyData = data.body;
      let idData = data.id;
      newData.innerHTML = `body = ${bodyData} id = ${idData}`;
      targetDiv.appendChild(newData);
  }


// * Fetch Post

const myObj = {
    "userId": 100,
    "title": "this is a test",
    "body": "This is the body"
}

fetch(`http://jsonplaceholder.typicode.com/posts`,{ // fetch URL to use
    method:`POST`, // Method to use POST here
    headers:{ // Needs to be added to post
        "Content-type":"application/json"
    },
    body: JSON.stringify(myObj) // What you want to post (JSON Object)
})
.then((response)=>response.json()) // Response turned to JSON
.then((data)=>console.info(`Request was all good with json response ${data}`)) // Response to say you managed to POSt
.catch((err)=> console.error(err)); //Error Response if you failed

// * Fetch Delete

fetch(`http://jsonplaceholder.typicode.com/posts/1`,{ // What ID you want to delete
    method:`DELETE` // What Method
})
.then((data)=>console.info(`Request was all good with json response ${data}`))
.catch((err)=> console.error(err));


