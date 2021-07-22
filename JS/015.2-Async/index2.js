'use strict';

let test = async () => {
    return Promise.resolve("Hello There");
}

test().then(console.log);