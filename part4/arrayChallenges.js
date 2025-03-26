/* 
1. Declare an array named 'teaFavors' taht contains the string `"green tea"`, `"black tea"`, `"oolong tea"`.
    Access the first element of the array and store it in a variable named `firstTea`.

*/
    
let teaFlavors = ["green tea", "black tea", "oolong tea"];

const firstTea = teaFlavors[0];
// console.log(firstTea);


/*
2. Declare an array named `cities` contining `"London"`, `"Tokyo"`, `"New York"`, `"Paris"`.
   Access the third element in the array and store it in a variable named `favoriteCity`.

*/

let cities = ["London", "Tokyo", "New York", "Paris"];

const favoriteCity = cities[2];

// console.log(favoriteCity);


/*
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`.
   Change the second element of the array to `"jasmine tea"`.

*/

let teaTypes = ["herbal tea", "white tea", "masala chai"];
 
teaTypes[1] = "jasmine tea";

// console.log(teaTypes);


/*
4. Declare an arrya named `citiesVisited` containing `"Mumbai"`, and `"Sydney"`.
   Add `"Berlin"` to the array using the `push` method.

*/


let citiesvisited = ["Mumbai", "Sydney"];
citiesvisited.push("Berlin");

// console.log(citiesvisited);



/*
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, `"earl grey"`.
   Remover the last elemeny of the array using the `pop` method and store it in a variable named `lastOrder`.

*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lostOrder = teaOrders.pop();

// console.log(teaOrders);
// console.log(lostOrder);




/*
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`.
   Create a soft copy of this array named `softCopyTeas`.

*/

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop()


// console.log(softCopyTeas);
// console.log(popularTeas);



/*
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, `"New York"`.
   Create a new hard copy of this array named `hardCopyCities`.

*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
// let hardCopyCities = topCities.slice();

topCities.pop();

// console.log(hardCopyCities);



/*
8. You have two arrays : `europeanCities` containing `"Paris"` and `"Rome"`,
   and `asianCities` containing `"Bangkok"` and `"Tokyo"`.
   Combine these arrays into a new array named `worldCities`.

*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Bangkok", "Tokyo"];
let worldCities = europeanCities.concat(asianCities);

// console.log(worldCities);





/*
9. You have an array anmed `teaMenu` containing `"Masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`.
   Find the length of the array and store it in a variable named `menuLength`.

*/

let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length; 

// console.log(menuLength);





/*
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`.
    Check if `"London"` is in the array and store the result in a variable named `isLondonInlist`.

*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInlist = cityBucketList.includes("London");

// console.log(isLondonInlist);   
