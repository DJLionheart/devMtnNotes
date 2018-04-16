// Lecture 12 April 2018
//////////////////////////////////////
//  Closures and Context
////////////////////////////////////

/* 
Closures:
Set of variables being saved for you.
Function within a function (enclosed scope).




*/

function outer(){
    //Outer has a scope
    function inner(){
        //Inner also has a scope, but it has access to the parent scope too.

    }
}

/*
Because of lexigraphical scope, inner has access to its parent function (around it), and all global variables. 
This is all based on where we write the code.

The idea of a closure. What happens when I return a function? I still need access to those variables.

Because I still need access to the num variable, it is held inside the closure.

*/

function outer(){
    var num = 9;

    return function inner(){
        num++

        return num;
    }
}


var innerFn = outer();

innerFn(); // >>>>> will yield 10


/*

Closures: kind of like snapshots... Or Sandboxes. Or individual spreadsheets
- That I can modify individually.

To create a closure, all you have to do is return a function from a function.

Every time I create a new variable at set it equal to the outer function, I create a new closure, a new sandbox.
A new set of variables that the outer function creates.

*/

// Closure : 
// 1. Function within a function
// 2. Inner function returned from outer function


// Outer function scope enclosing the inner function (function within a function)
function outer() {
    // outer has one local variable
    var num = 1;
    function inner() {
      // inner can access outer's local variables because of scope
      // inner modifies num and returns the new value.
      num++;
      console.log('current value of num: ', num);
    }
    // outer returns inner
    // NOTE: inner was not invoked.
    return inner;
  }
  
  // outer is invoked and inner is returned
  // what is the value of closure? inner function (console.log(inner) to verify)
  
  var closure1 = outer();
  console.log(closure1);
  closure1();
  // console.log(closure)
  
  
  // Since closure1 is a function, we can invoke it.
  // closure1()
  
  // What happens if we invoke closure1 multiple times?
  // closure1();
  // closure1();
  // closure1();
  // closure1();
  
  // the closure retains a reference to any local variables in the parent function's scope.
  
  
  // MODULE PATTERN
  // public and private methods & variables
  // shields parts of our code from the global scope
  
  function modulePattern() {
    // variables and functions here are private and are only accessed through the public functions in the returned object
    var privateVariable = 'I am private';
    
    var privateFunction = function() {
      console.log(privateVariable)
    }
    
    return {
      // everything returned is public
      changeVar: function(str) {
        privateVariable = str;
      },
      readVar: function() {
        privateFunction();
      }
    }
  }
  
  // object with public methods stored in module1
  var module1 = modulePattern();
  // module1.changeVar('changing private var through public method');
  // module1.readVar()
  
  /*
The only way to interact with the private variable declared in the outer function is through the inner function.

We lock down how you can interact with the private variable.

Think bank account info.


Anything from the parent function (variables) will be saved within the closure (returning a function),
And the closure will have access to those variables... No matter where you call it.

Closures let us re-use variable names, and be able to create multiple copies.
Also, they allow us to create private data.



  */
  
  
  
  
  
  
  
  
  
  
  