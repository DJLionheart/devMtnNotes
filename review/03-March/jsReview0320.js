//JavaScript Review - Tuesday, 20 March - Morning


//When executing a method within an opject, do you reference the object name directly, or use the "this" keyword.
//
//Keyword this changes its meaning based on where it is. If you fire it in the wrong area, it can fire off on your whole app.

//We will cover context and binding (React) later.

var arr = [];
arr.forEach((val, i, arr) => {
    //val 
    //arr[i]
    //These two are mostly interchangeable, but you can only modify the array by using arr[i]
});

//Apply coding to real world situations. How do we represent the real world in code, and how do we solve real world problems with code?

// if( (person.isExtrovert && day.endsInDay)){
//     person.wantsToHangOut = true
// } else if(person.isExtrovert){
//     person.wantsToHangOut = true;
// } else if(person.isIntrovert 
//   && goodWeather 
//   && doesntHaveToDriveFar
//   && hasBeenMoreThan3DaysSinceHangingOut
//   || hasBeenLongerThan1Month){
//     return true;
// }

//TERNARY OPERATOR
var sizing = 7 < 10 ? "less than" : "greater than";
//The code will evaluate from the question mark back to the next previous block of code.
//It will then set the value of sizing to either the first or second options, depending on if it evaluates to true/false.
//Anything more or less than one if/else, you should just use regular if/else statements.
//You can invoke functions inside of ternary operations:
isTrue ? flow1() : flow2();

//For Loops
for(var i = 0; i < "hello"; i++) {} //You can compare anything... But this will yield false and the loop won't run.

//You can compare any piece of data to any other data type EXCEPT NaN / Not a Number

// - pop, shift, splice, slice
// pop is the opposite of PUSH? so it remove the end?
// shift is the opposite of UNSHIFT? so it removes from the start?
// splice does what
//Remove and/or insert values into the array.
// slice does what
//Makes a copy of some or all of the array, and doesn't update original.

//Before you slice, you should slice.
//Only splice what you've sliced.
//Slice, splice, replice.

//MAKE A COPY FIRST - this will lead to less bugs.
var array = [1,3,5,3,6,7,4];

let arr2 = array.slice()
let arr3 = array.splice(1,2);
array = arr3;
