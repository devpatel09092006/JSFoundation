let car = {
    make: "Tata",
    model: "Altroz",
    year: 2022,

    start: function () {
        return `${this.make} car got started in ${this.year} year.`; 
    },

};

// console.log(car.start());



function Person (name , age) {
    this.name = name
    this.age = age
}

let john = new Person("John Doe", 20);
// console.log(john.name);


function Animal (type) {
    this.type = type
}

Animal.prototype.speak = function () {
    return `${this.type} makes a sound`;
}

Array.prototype.dev = function () {
    return `Custom method ${this}`;
}

let myArray = [1, 2, 3];
// console.log(myArray.dev());
let myNewArray = [4, 5, 6];
// console.log(myNewArray.dev());



class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model 
    }

    start () {
        return `${this.model} is a car from ${this.make}.`;
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make} : This is an inheritance example`;
    }
}

let myCar = new Car ("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());


let vehOne = new Vehicle("Toyota", "Corolla")
// console.log(vehOne.make);




// Encapsulation

class bankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance
    }

    getBalance () {
        return `$ ${this.#balance}`;
    }
}

let acccount = new bankAccount ();
// console.log(acccount.getBalance());








// Abstraction

class CoffeeMachine {
    start() {
        //call Db
        //filter value
        return `Strating the machine...`; 
    }

    brewCoffee () {
        // complex calculation
        return `Brewing coffee`;
    }

    pressStartButton () {
       let masg1 = this.start()
        let mag2 = this.brewCoffee()
        return `${masg1} + ${mag2}`
    }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());




// Polymorphism

class Bird {
    fly() {
        return `flying...`;
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguins can't fly`;
    }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());




// static method


class calculator {
    add(a, b) {
        return a + b;
    }
}

// let miniCalc = new calculator();
// console.log(miniCalc.add(2, 3));

// console.log(calculator.add(2, 3));




// Getters and Setters

class Employee { 
    #salary
    constructor(name, salary) {
        if (salary < 0) {
            throw new Error("Invalid salary");
        }
        this.name = name
        this.#salary = salary
    }

    get salary () {
        return `You are not allowed to see salary`;

    }

    set salary (value) {
        if (value < 0){
            console.error("Invalid salary!");
        }
        else {
            this._salary = value
        }
    }
}
let emp = new Employee("Alice", -50000);
console.log(emp.salary);
emp.salary = 10000;
