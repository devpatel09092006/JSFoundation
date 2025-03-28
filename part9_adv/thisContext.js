const person = {
    name : "Dev",
    
    greet () {
        console.log(`Hello, I am ${this.name}`);
    },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "John" });
boundGreet();

// bind, call, and apply