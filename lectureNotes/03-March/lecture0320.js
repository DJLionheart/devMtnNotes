//LECTURE 20 March 2018


//OBJECTS

//When comparing objects in arrays, they will always compare to false.
//When you create an object (or any variable) it puts it into the computer's memory.
//When you use slice, it makes a secondary copy.
//When you make a comparrison, you're not necessarily comparing the contents, but the location in computer memory.
//TAKEAWAY: when comparing objects, don't use ===, use a for loop.

//Dictionary / Lookup
//Scope does not apply to objects, they're more like a "Rolodex"

//Array of Objects
//Amazon.com has products, each product has a bunch of key/value pairs: price, type, name, etc.
//Youtube.com -- Array of objects, each video has key/value pairs.
//You can access the objects using array[i]. First object would be array[0].prop

//Objects
//Arrays
//Variables
//Functions
//For Loops

//IMPORTANT - INTERVIEW ADVICE
//When you are trying to remove items from arrays, you should run a for loop backwards.

//FUNCTIONS
//You can treat functions like objects to be passed around.


//setTimeout();
//Callbacks - VERY COMMONLY USED PATTERN
//Getting data from a server, it takes miliseconds to get the data back.


//ARRAY PROTOTYPE FOR FINDING OUT IF A VALUE EXISTS IN AN ARRAY
//array.includes(searchElement, [optional starting index])
//Will return a boolean - true or false.


//QUESTIONS::::::
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

//Remove Duplicates:

function uniq(arr, cb){
    var noDups = [];
    for(let i = 0; i < arr.length; i++){
      if(noDups.indexOf(arr[i]) === -1){
        noDups.push(arr[i])
      }
    }
    cb(noDups);
  }

  uniq(names, function(uniqArr){
    console.log('The new names array with all the duplicate items removed is ', uniqArr);
  });

  //FIRST QUESTION: Are we able to check for duplicates and remove them using splice and a reversed for loop?

//BE WARNED - THE DUPLICATE PROBLEM IS AN INTERVIEW FAVORITE. KNOW DIFFERENT ANGLES.



function each(arr, cb){
    for(let i = 0; i < arr.length; i++){
      cb(arr[i], i);
    }
  }
  
  // Do not edit the code below.
  each(names, function(item, indice){
    console.log('The item in the ' + indice + ' position is ' + item)
  });
  // Do not edit the code above.

//SECOND QUESTION: Will you help me review .forEach my helping me understand how to re-write the above
//code using .forEach?

//THIRD QUESTION:

var getRandomArbitrary = function() {
    return Math.floor(Math.random() * 30);
  };

  function finder(arr){
    var randomNum = getRandomArbitrary();
    if(arr.includes(randomNum)){
      return true;
    } else {
      return false;
    }
  }

  //I want to try and get the same result using a for loop for practice:

//   function finder(arr){
//     var randomNum = getRandomArbitrary();
//     var trueOrFalse;
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i] === randomNum){
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }


//Rule of Thumb: 
//If you don't have to hard code a function... Don't hard code it.


//Using 'return' within a for loop will cause the computer to exit the entire function,
//because for loops are not functions. If you use .map or .filter etc, return will function
//Correctly.