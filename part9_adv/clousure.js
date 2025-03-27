function outer() {
    let counter = 4;
    return function () {
        counter++;
        return counter;
    };
}

let counter = outer();
console.log(counter());
console.log(counter());
console.log(counter());