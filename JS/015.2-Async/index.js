'use strict';

const test = ()=>{
    return  Promise.resolve("hello my friendssss");
}

test().then((message)=> console.log(message));

const test2 = async () =>{
    let Prom = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("we are done!!!")
        },3000)
    });
    let result = await Prom;
    console.log(result);
}

test2();

const bob = async () =>{
    let Prom = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("I AM Bob")
            resolve()
        },1000)
    });
}
    
const root = async () =>{
    let Prom = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("I AM ROOT")
            resolve()
        },3000)
    });
  
}
const Groot = async () =>{
    let Prom = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("I AM Groot")
            resolve()
        },2000)
    });
  
}

const doThings=async()=>{
    await bob(); // 1000
    await Groot(); // 2000
    await root(); // 3000
}


doThings();