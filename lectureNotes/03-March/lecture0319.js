
//NESTED FUNCTIONS

var globalVar = 'hey';

function outer() {
    console.log('pears');
    
    return function inner() {
        console.log('ice cream');        
    }
}
//'pears' will log first, then 'ice cream'


var result = outer();
console.log(result);
//Will return the results of the inner function.

result();
//This is possible because outer() as a function is stored in the result variable.

//Scope and Order are both important. You can always look up, but can't look down.




//CALLBACK
//a function that takes a function as a parameter. All it is, is a function that will be passed into another function later.

function crazyCody( param1 ) {
    param1();
}
//Now we're actually invoking the function param1 instead of logging a value.

crazyCode('joe');
//Invokes crazyCody, passes 'joe' into param1, then logs it to the console.
//Parameters are just local variables, as if you declared them within the function (but you're passing in the data).

crazyCode({car: 'old'});
//Will log the whole object.


crazyCode(function() {
    alert('whaaaaaaaaat?')
})
//What gets returned? The whole function.


function crazyCode(param1) {
    param1('roller blades')
}

crazyCode(function(words){
    alert(words)
})

//These are patterns... They will apply as I start to learn other coding languages.

//Another way to take a look at this...

function callback(words) {
    alert(words)
}
//callback is the function I am going to pass into crazyCode()


crazyCode(callback)
//When we pass callback into crazyCode, it will try and evaluate it before it gets passed in.

//User Events... ie "When you click this button, run this callback functions"



//FOR LOOPS

var colors = ['blue', 'red', 'green'];

for (var i = 0; i < colors.length; i++) {
    if (colors[i] === 'red') {
        alert('found it at position ' + i)
    }
}

for (var i = colors.length - 1; i >= 0; i--) {

}

//Why greater than or equal to 0? because we want it to actually hit zero


//PROTOTYPE METHODS

var colors = ['blue', 'red', 'green'];

//Prototype methods are methods that are built into JavaScript. Methods that already exist.


colors.push('black');
//>>Will push 'black' onto the end of the array.

//Slice vs. Splice

colors.slice(0)
//Slice makes a copy of the array. Start copying at position 0.
//If you give it a second argument, it will tell the slice to end before that index.
colors.slice(0,2)
//Will start at 0, end before 2 >> ['blue, 'red']

colors.splice(0,1)
//Splice: 0 - where we start, 1 - how many elements to remove.

