let computer = {cpu : 12};
let mac = { 
    screen : "Liquid Retina XDR",
    __proto__ : computer
};
let tomHardware = {};

// console.log('mac', mac.__proto__);


let genericCars = {tyres : 4};

let tesla = {
    driver : "AI"
}

Object.setPrototypeOf(tesla, genericCars);

console.log('tesala', Object.getPrototypeOf(tesla));