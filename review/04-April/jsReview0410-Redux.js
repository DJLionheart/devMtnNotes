// JavaScript Review - 10 April 2018

// Aoruk

/*Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

Examples: 
validParentheses( "()" ) => returns true 
validParentheses( ")(()))" ) => returns false 
validParentheses( "(" ) => returns false 
validParentheses( "(())((()())())" ) => returns true 

All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')' 


1. Split the string into an iterable array.

2. Compare parentheses placement.


*/


var trial1 = "(())((()())())"
var trial2 = "("
var trial3 = ")(()))"
var trial4 = "()"

function validParentheses(string) {
  let leftCount = 0;
  let rightCount = 0;
  
  let splitString = string.split('');
  console.log(splitString);
  for(let i = 0; i < splitString.length; i++) {
    splitString[i] === '(' ? leftCount++ : rightCount++;
  }
  console.log('Left parentheses:', leftCount);
  console.log('Right parentheses:', rightCount);
  switch( leftCount === rightCount) {
    case true:
      return true;
    case false:
      return false;
    default: null;
  }
}

validParentheses(trial3);



/*
Start by checking the first/last characters.
If the first parenthesis is the wrong direction, no need to look further.

Yevin: reverse for loop. If the parenthesis matched, splice them and update.

Lloyd: tracking.

Everytime we see an opening parenthesis, counter++, any time we see a closing parenthesis, counter--.
In each loop, you have to check to see if the count is less than 0.


1. For loop for the split string.

if str[i] == '(' >>>> c++
if str[i] == ')' >>>> c--
if c < 0 >>>> return false;


*/

function valid2(string) {
    let c = 0;

    let splitString = string.split('');
    
    for(let i = 0; i < splitString.length; i++) {
        switch( splitString[i] ) {
            case '(':
                c++;
                break;
            case ')':
                c--;
                break;
            default: null;
        }
        if( c < 0 ) {
            return false
        }
    }if( c > 0 ) {
        return true;
    }
}

valid2()



//Lloyd's Solution:

function validParentheses3(str){
    let counter = 0;
    for (let i = 0 ; i < str.length; i++){
      if (str[i] === '('){
        counter++
      }
      if (str[i] === ')'){
        counter-- 
      }
      if (counter < 0){
        return false
      }
    }
    return counter === 0
  }

/* 

Redux Review

When to use Store State vs. Local Component State

Maybe you want to keep basic user information in Redux.
What city are they in?
(Reccomendation for lunch places in _city_)

Maybe some settings.


In the Reducer:

Initial State
Constants
Action Creators


We use the reducer to make a store.


We get the store accessable to react by using the Provider (which will wrap your root component)

mapStateToProps maps down the state properties (Redux State) from store.
Connection (part of mapStateToProps) brings down props from the Store.
It can also connect the action creators. If you DON'T connect the AC's, then nothing will happen.

If you import an action creator without connecting it, it won't work as expected.

When the action creator is done: dump it into the reducer
>>>>>> reducer then sends it to the store, which then communicates to the components that need to change.




*/