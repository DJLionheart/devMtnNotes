//RETURNING OBJECTS FROM A FUNCTION --
//I don't have to declar a new variable object in the function and then return that variable at the end.
//I can simply write: return {} to return the object and fill out the values within. Example:

var gemInfo = (type, size, weight) => {
    return {
        gemType: type,
        gemSize: size,
        gemWeight: weight
    }
}

//This also works when using high order functions like filter and map on arrays.

var numbers = [1,2,3,5,6,2,7,8,22,23,26];

var evens = () => {
    return numbers.filter(val => val%2 === 0);
}


//Toy Problem Advice

// Swap Case
// Below is a function that takes in a string and reverses the case of every character and returns the new string.
// It is currently in a broken state and does not run properly.
// It is possible to fix the code by only modifying the existing code, not adding new lines.

//test data
//'This Is An Example' becomes 'tHIS iS aN eXAMPLE'
//'boB rOss IS thE OrIgInAl GanGster' Becomes 'BOb RoSS is THe oRiGiNaL gANgSTER'


function caseReverse(str) {
    var strArray = str.split('');
    for (var i = 0; i < strArray.length; i++) {
      if (strArray[i] === strArray[i].toUpperCase()) {
        strArray[i] = strArray[i].toLowerCase();
      } else {
        strArray[i] = strArray[i].toUpperCase();
      }
    }
    return strArray.join('');
   }
   
   console.log(caseReverse('boB rOss IS thE OrIgInAl GanGster'));
   
   //console.log("s" === "s".toUpperCase());

//After you figure out how you think the code works, run the code and see what you get.

//When there are multiple things wrong in a code, you need to focus one one problem at a time.
//If you focus on multiple pieces at a time, you may break the code.

//Some of the prototypes change the array itself, other prototypes just make a copy.
//You can get overwhelmed if you try to look at the whole picture and fix anything.
//BUT if you try to eliminate as many variables as possible and fix one thing at a time...MONEY

//In the coding field -- get your code to work FIRST. THEN worry about optimization and brevity.


//FOR LOOPS
//When you have a return statement IN the for loop, it will go through the for loop once,
//see the return statement, and stop (for loops are not function.

//BUT, in .forEach, you can use a return statement, because it's actually a function...

//Comparisons -- You can't strictly compare literals (has to do with references)

var boring = "dexterity";

var character = {
    name: "Belthazar",
    intelligence: 12,
    gold: 250,
    constitution: 15
}

character[boring] = 9;

//DOT NOTATION - You HAVE to know the name of the property.
//Bracket notation - you can use a string, or a variable.
character['wisdom'] = 20;

//There's an array called "loot". How can I take something off of the array loot?
//There are several methods I can use (I want the methods that alter the original array.)

var loot = ['25 gold', 'comb', 'the one ring' ,'lint'];

loot.pop();
loot.shift();
loot.splice(0, 4);

//How can I add an item to loot? There are severals ways to do this.

loot.push(item);
loot.unshift();

//What does .unshift return? The new length of your array.

//Underscore.js
//Lodash.js
// --JavaScript Libraries

