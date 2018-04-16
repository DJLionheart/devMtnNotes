//LECTURE 21 March 2018


//TEMPLATE STRINGS
let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`;

//The ${} escapes JavaScript - within the back ticks ` ` (go back to JavaScript, get the variable firstName...)
//Escape means you're in the middle of something, but you need to go back to the parent or something else.

//"Jane said, "Hello Dave, I missed you" "
//This is incorrect, because JavaScript will see the the quotes and end the string.
//You can 'escape' the quotation marks within the string by using a back-slash
//"Jane said, \"Hello Dave, I missed you\" "
//OR just use template strings.

//If you try to use multiline strings with regular quotations, you have to use + between each line.
//With back ticks, you don't have to do that! Multi lines are just fine. AND you don't have to escape ' or "

//ARROW FUNCTIONS

var add = (x, y) => x + y;
var sum = add(3, 2)
sum;

//One line Arrow functions 
// - remove need for curly braces
// - automatically return your line of code
// - Can only do 1 line of code

//multi line arrow functions
var add = (x, y) => {
    x = x;
    y = y;
    return x + y;
}
var sum = add(3, 8)
sum;

//multi line Arrow functions 
// - Use curly braces
// - Still need a return statement
// - Can do many lines of code

//If I'm not on an object, not on a class, and am not a callback being passed in... 
//I am not an arrow function

//You are fine to use arrow functions in objects, in classes, and as callbacks.
//This is due to hoisting...
//I hope they explain this phrase because I keep hearing it.

//Expression values are never hoisted.

//Declarations are hoisted all the way anyway...


//ADDITIONAL ARRAY METHODS

//.indexOf

//DOES NOT WORK WITH OBJECTS OR ARRAYS.

var things = [2,4,5,6,7,4,2,2,5,10]; 

things.indexOf(10, 3) //Returns the index of 10, but only starts looking at index 3.

//How to find multiple indexes of using a while loop.

var ar1 = [3,5,6,2,2,5,3,4,2,2,62];
var first = ar1.indexOf(2) // >3

var nextIdx = 0;
var all2s = []
while(nextIdx >= 0){
    var idx = ar1.indexOf(2);
    if(idx >= 0){
        all2s.push(idx);
        nextIdx = idx + 1;
    }
}


//str.split() works with all types of strings - even template strings.
//Order of operations, the computer will evaluate everything on the left of the dot before the right.


//HIGHER ORDER FUNCTIONS
//a fancy name for functions that use callbacks.
//High order function: the golfer
//Callback: the caddy

//Callbacks are functiions that go in,
//Closures are functions that go out...


//Array.forEach()

//Used to verify things.

//gives the callback function each item 1 at a time
`array.forEach( function( item ) { } )`
`array.forEach( ( item ) => { } )`

//This is doing a for loop, index/i, etc. You don't have to worry about managing that.

//Again -- DON'T delete things from arrays using a regular for loop, run it backwards.

//item, index, arr are all there, whether or not you use them...
//must use the arr parameter to change the original array
`array.forEach( function( item, index, arr) { arr[index] = 7 } )`

`array.forEach( ( item, index, arr) => arr[index] = 7 )`

//.forEach will only alter the original array if you tell it to do so.

//Most Mid-Level/Senior Developers prefer .forEach - beacuse it's easier to read. More succint.

//Good Example of .forEach
//You have five email addresses,
//Split the email address into an array.
//.forEach to send emails to each email in the array.


//GUIDELINES FOR NAMING

// 1. Function Names always start with a verb ('checkAge' not 'ageCheck')

// 2. Arrays should always be plural (don't call it 'person' call it 'people')

// 3. Objects and other data types are singular nouns ('eployee' not 'employees)


//Array.map()
//Used to update things.
//The callback must return a new value. In a .forEach you don't have to, because it's not looking for it.
// .map will look for something to be changed.

//In .map the callback is used to change/alter/re-map the item

`array.map( function(item){ return item + ", eh"})`

`array.map( function(item){ return item + 27})`

array.map( function(item){ 
    if(item.isDemoted){
      item.isAdmin = false;
    }
    if(item.isDavidBlaine){
      item.lovesCheezits = true;
    }
    return item;
})

//anything returned by the callback function is added to a new array

`var array = [1, 2, 4, 10]`

`var mapResult = array.map( function( item ) { return item + 10} )`

`var mapResult = array.map( ( item ) => item + 10 )`

`mapResult === [ 11, 12, 14, 20]`

`array === [1, 2, 4, 10]`


//Array.filter()
//Works just like a for each, but is given an if statement/condition.

//The callback is used to check if the item goes into the new array
`array.filter( function(item){ return item > 21})` //take the item, return 
`array.filter( (item) => item > 21 )`


//return truthy = included.  return falsy = excluded.
`var array = [1, 2, 4, 10, 11]`

`var filterResult = array.filter( function( item ) { return item % 2 === 0 } )`

`var filterResult = array.filter( ( item ) => item % 2 === 0 )`

`filterResult === [ 2, 4, 10]`

`array === [1, 2, 4, 10, 11]`

//For large data that doesn't fit the mold, for loops are still useful.


//Array.reduce()
//Similar to for each, but not the same. Will add an extra parameter in the front.
//This parameter represents what was returned from the previous function as part of the reduce.
//First item "accumulator" or "previous", etc.

`array.reduce( function( prev, item, index, arr) { } )`

`array.reduce( ( prev, item, index, arr) => { } )`

//adds a starting value after the function
`array.reduce( function( prev, item, index, arr) { }, startingValue )`

`array.reduce( ( prev, item, index, arr) => { }, startingValue )`

//prev is whatever value the previous invocation returned

`array.reduce( function( prev, item, index, arr) { return prev + next }, 0 )`

`array.reduce( ( prev, item, index, arr) => prev + next, 0 )`

//Reduce takes in prev (nonexistent or 0), adds/combines the first time, then passes it in for the next time...

//Reduce is useful when you have a flat structure and want to turn it into a hierarchy / or take a hierarchy and flatten it.


var string = "Your poopy face smells like chihuha";
var badWords = ["poopy", "chihuha"];

var filtered = badWords.reduce((prev, item) => prev.replace(item, "gumdrops"), str)

//putting str at the end gives us the starting place.

var arry = [3,5,2]
arry.reduce((prev, next) => {}) //first call: prev = 3, next = 5
arry.reduce((prev, next) => {}, 10) //first call: prev = 0, next = 3
//STUDY REDUCE.



//KNOW .forEach .map and .filter


//FOR IN LOOPS.
//Like a hybrid of a forEach and a for loop.

//Use the for key word

`for() {}`

//use the in keyword to indicate they are a different kind of for loop

`for(... in ...) {}`

//need a variable to the left of the in

`for(var key in ...) {}`

//place the object you are looping over to the right of the in

`for(var key in object){}`

var obj = {
    x: 7,
    y: 2,
    z: 2
}

for(var key in obj){
    key === x / y / z
}

//Are used to loop over all of the keys of an object
//Commonly paired with square bracket notation.
for(var key in obj){
    var value = obj[key]; //key is a string representing each object 1 at a time

    obj[key] = newValue; //square bracket is also used to assign
}


//OBJECT ASSIGN

//Object.assign is a function used to copy properties from one object to another

`Object.assign( destination, source )`

`Object.assign( { }, { name: "Me" } )`

//Object.assign copies from the right to the left and returns the final copy

Object.assign( { age: 27 }, { name: "Myself"}) 
//-> returns 
//{ age: 27, name: "Myself"}

//Can copy multiple times 
var result = Object.assign( { age: 27 }, { name: "Myself"}, { color: "Red"}, { food: "Wings" }) 

//Put it on a variable and you can use the result.


//OBJECT delete

//delete is a reserved keyword

`delete`

//delete will remove a property from an object, permanently

`delete obj.prop` //- Will remove prop from obj

//delete removes the key and the value.
//setting something = to null does not remove the key and value.

//works with square bracket notation

`delete person["name"]` //- removes the name key and value from person



//DESTRUCTURING

//Destructuring is a shortcut for pulling properties off of an object

//move the property name(s) from the dot notation on the right into the curly braces on the left

var name = employee.first_name;
//becomes
var {first_name} = employee


//can get multiple variables

var { first_name
    , last_name
    , age
    , city
    , state
    } = person;

    //LEARN DESTRUCTURING so as to not have to have crazy long dot notation chains.


//CUrly braces after a code block  - function/for loop
//Curly braces to the right of an equal sign - object 
//Curly braces on the left-hand side of an equal sign - it's destructuring, NOT an object.

//Yup 
var { x } = object; 

//Nope
var { newX } = object;

//Destructuring is triggered by curly braces on the left side of an assignment

//for var & let

`var { age } = person;`

`let { age } = person;`

//in function parameters

function isOldEnough({age}){}

isOldEnough({name: "Higel", age: 20, eyeColor: 'brown'})

//When it's passed in, it's an object
//when it's received, it's destructuring.

//For an assignment (or left hand of equals)

//Main way.... I'm going to interact with react or some big library... I only care about these three properties...



//CLASSES

//Classes are a construct to help us build objects

//The class syntax allows us to define a template and then use that template repeatedly.

//The keyword to define a class is `class`

//The keyword to use an already defined class and to make an object is `new`

class Music {}

var pop = new Music()

//Reuseable Shortcuts for making new objects, using the keys defined in the curly braces.

//ALWAYS capitalize a class.

//Example:

class Animal{
    constructor(sound, species){
        this.sound = sound;
        this.species = species;
    }

    makeSound(){
        return "The " + this.species + " says " + this.sound
    }
}

var genny = new Animal("hhoooof", "giraffe")
var zenny = new Animal("whoop whoop", "zebra")
var lenny = new Animal("good day to you sir", "lion")

var giraffeSound = genny.makeSound();
//giraffeSound;
var zebraSound = zenny.makeSound();
//zebraSound;
var lionSound = lenny.makeSound();
//lionSound;


//The 'this' keyword is basically a pronoun (a reference for whoever is left of the dot)


//Extends keyword ------> subclass. 

//React builds components by using the Class constructs.

class Movie{
    constructor(title, year, director){
        this.title = title;
        this.year = year;
        this.director = director;
        this.ratings = []
    }

    addRating(score){
        this.ratings.push(score)
    }

    averageRating(){
        var sum = this.ratings.reduce((sum, next) => sum + next)
        return sum / this.ratings.length;
    }
}

var harryPotter = new Movie("Harry Potter", 1998, "J.K.");
harryPotter.addRating(5)
harryPotter.addRating(5)
harryPotter.addRating(3)
var avg = harryPotter.averageRating()
//avg;


//NESTED FOR LOOPS.

var workplaceAccidents = [12, 56, 44, 3, 29, 56, 56, 3, 7, 12];
//Write a function that gets rid of duplicates and returns the updated array using for loops.

function removeDuplicates(){
    for(let i = 0; i < workplaceAccidents.length; i++){
      for(let j = workplaceAccidents.length - 1; j >=0 ; j--){
        if(workplaceAccidents[i] == workplaceAccidents[j] && i != j){
          workplaceAccidents.splice(j, 1);
          console.log("number", i, "array", workplaceAccidents);
        }
      }
    }
    return workplaceAccidents;
  }

  //Originally, in the workplaceAccidents.splice() line of code, I tried to include workplaceAccidents[j] as an argument.
  //I didn't realize that it would evaluate to 12, because the value at index 9 was 12...
  //Then I worried about stopping the loop before it got to where I was in the outer for loop.
  //BUT, as long as I include a conditional for i and j to not be equal (ie i != j), I'm good to go.