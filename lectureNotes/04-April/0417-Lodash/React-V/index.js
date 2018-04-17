// Lecture 17 April 2018

// Lodash


/*

Goal of Lodash: give you access to higher level functions in order to accomplish common tasks more simply and cleanly.

It's nice when we don't have to accomplish those common tasks using full, long code.

Lodash has updated/optimised many of the functions we normally use.

*/

let _ = require('lodash');
let movies = require('./movies.json');
let brack = {
    name:'Brack',
    age:32,
    height:'6ft'
}

let states = {
    california:{population:38332523, size:162695},
    texas:{population:26448193, size:268580},
    newYork:{population:19651127, size:54556},
    florida:{population:19552860, size:65754},
    illinois:{population:12882135, size:57914},
    pennsylvania:{population:12773801, size:46055},
    ohio:{population:11570808, size:44824}
  }
 
// map -> mapValues / mapKeys
let newStates = _.mapValues(states, (elem, index, wholeObj) => {
    elem.density = elem.population / elem.size;
    return elem
})


// forEach -> forIn / forOwn,  

// If you want to include the things on the prototype, use forIn,
// OTHERWISE, use forOwn (only things on your own property)


// find

// Will iterate through array or object and find the first instance where you match an existing object (or predicate?)
// Using find in Lodash has a bunch of assumptions built-in, that aren't there in regular .find.
// 

let myMovie = _.find(movies, {year: '2000', contentRating:'15'});
//Instead of looping through each element with multiple if statements, you can handle all sorts of requests more cleanly
// If I just do .filter or .reduce, you have to sort through the more complicated logic.
// I can use this to filter through songs by BPM for my personal project.

// groupBy

//1
let byYear = _.groupBy(movies, 'year');
// each property of this object is the year in question, and the values of each are all movies released in that year 
// It builds the object in the order it finds them. By default it finds the properties alphabetically, not in the order
// they were created.


//2
let byDecade = _.groupBy(movies, (movie) => Math.floor(movie.year / 10) * 10)
//Math.floor is helpful for rounding a certain direction. This is grouping movies by decade

/*
Group By: 1. Give it a string
2. Return the value you want it to group by. Group by a function


If you want the user power to manipulate the data, Lodash can be very powerful on the front end. Server can send all
the data from your database, and then lodash can help the user filter/sort/maniuplate that data on the front end.



*/

// union

// Goal is to give back a single array with all the elements.

let brackFriends = ['Joe', 'Missy', 'David', 'Golden', 'Blake', 'Jeremy']
let jeremyFriends = ['Missy', 'Nolan', 'Noah', 'Blake', 'Stephen', 'Lloyd']

//create an array with all the friends without repeating duplicates.

let combinedFriends = _.union(brackFriends, jeremyFriends)
// If you ever happen to give something that already has duplicate data, and you give union a single array,
// it will get ride of the duplicates for you.
// Lodash also has _.unique(), but _.union works too. You can union as many arrays as you want.



// intersection

let sharedFriends = _.intersection(brackFriends, jeremyFriends);
// Instead of ALL the friends, I just want to know shared friends, where do they 'intersect' (Mutual Friends on FB)
// I could do this with JavaScript... Spending 5/10/15/20 minutes on it. BUT if I'm in the middle of doing other code,
// I don't want to spend that time. If I know what these lodash functions mean, I can just use them instead of making
// a custom function!

// memoize

let a = 5;

// You can't assign break points onto comments (the code won't be read, there's nothing to break there)
// You cannot assign break points onto expressions... The easiest way is to throw in an assignment operation.
// Naming a random variable like 'let a = 5;' will act as a good anchor for a break point during debugging.