//REVIEW 22 MARCH 2018


//Toy Problem

// Below is some broken code. Read over all the code below, at the end you will
// see that the results are not what you would expect. Look over the code and
// try and identify where the issue is caused. You will want to console log
// oldInventory and newInventory often to see how it changes.

let oldInventory = [
  ['calico', 'tabby'],
  ['lab', 'corgi', 'rottweiler'],
  ['goldfish', 'beta', 'angel fish', 'flounder']
];

// Write a function to count the number of animals in the pet shop's old inventory

function countInventory(arr) {
  let count = 0;

  arr.forEach(group => count += group.length);

  return count;
}
console.log('countInventory:', countInventory(oldInventory));

// All of the animals were very popular and were all sold in the past week
// these same animals were ordered for the next week
let newInventory = oldInventory.slice();

// some new, exotic animals were ordered for the next week as well.
newInventory.push(['gorilla', 'alligator', 'lion', 'humpback whale'])
console.log("New Inventory", newInventory)
console.log("Old Inventory", oldInventory);

// the pet store needs to know how many more pens they need for the new animals
// write a new function to count the number of animals in both the old and new inventory.
// this function should return the difference in number of animals between the old and new inventories (new - old)

function compareInventory(oldArr, newArr) {
  let oldCount = 0, newCount = 0;

  oldArr.forEach(group => oldCount += group.length)
  newArr.forEach(group => newCount += group.length)

  return newCount - oldCount
}
console.log('compareInventory:', compareInventory(oldInventory, newInventory))



// .map and .forEach

var arr = [1,3,56,7,3,2,4,6,3]

//let x = arr.forEach()
//x will always be undefined
//You can modify the original array, but you will need to take the three parameters (item, i, arr) and then modify arr[i]

//let y = arr.map()
//Whatever is looped through and returned by map will be in the corresponding index of the returned array.

//If you need to modify an object, make a copy with Object.assign 

//.filter

let filteredArray = arr.filter( n => n%2 === 0);
filteredArray;

//When you're trying to decide how to write the logic in filter:
//Should I keep this? Truthy means yes.


//REDUCE
// reduce((acc, cv, i, arr) => {}, 0)
//Might not use i and arr as much.

//Reduce takes care of accumulator, current value, index, and array each time. What we put after the curly braces
//Is what the accumulator will start at.

var redArray = arr.reduce((acc, cv, i, arr) => {return acc + cv}, 0);
redArray;


//Using reduce with array of objects:

var people = [{name: 'Lloyd', cash: 20}, {name: "Alan", cash: "50"}]

var filteredObj = people.reduce((acc, cv, i, arr) => {
    if(cv.name === 'Lloyd'){
        return acc + cv.cash;
    } else{
        return acc;
    }
}, 0)

filteredObj;


//Accumulator can be considered the running total.


//Class
//Syntactical sugar... Aka cookie cutter for new objects.

class User {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

var p = new User("Paul", 28, "iambatman@batman.com");
p;


class Teacher extends User {
    constructor(name, age, email, classesTaught){
        super(name, age, email)
        this.classesTaught = classesTaught;
    }
}

//extends means, use this class with extra stuff

var jer = new Teacher("Jeremy", 35, "j@dm.com", ["JavaScript I", "UI Stuff", "Web Dev Tricks 101"]);

jer;


//When extending from another class, the super() function needs to include all the parameters from the parent 