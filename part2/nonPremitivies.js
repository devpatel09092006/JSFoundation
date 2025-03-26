const userName = { 
    firstname : "Dev",
    isLoggedin : true,
    "first name" : "John Patel"
};

userName.firstname = "Dev Patel";
userName.lastname = "Amitkumar";

// console.log(userName["first name"]); // John Patel
// console.log(userName.firstname); // Dev
// console.log(userName.lastName); // Amitkumar 
// console.log(userName);
// console.log(typeof userName); // object


let today = new Date();
// console.log(today.getDate()); // 11




// Array (Arrys is a collection of things)

let anotherUser = ["Dev", true];

console.log(anotherUser[0]); // Dev

let isValue = true;

// console.log(isValue + 1); // 2
// console.log(1 + "1"); // 11
// console.log("1" + 1); // 11


// JavaScript considers true as value of 1 and false as value of 0.

let value = "2abc";
console.log(Number (value)); // NaN
console.log(typeof Number(value)); // number

console.log(Numer(null)); // 0
console.log(Number(undefined)); // NaN
