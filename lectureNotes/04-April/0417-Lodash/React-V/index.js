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

let myMovies = _.find(movies, {year: '2000', contentRating:'15'});
//Instead of looping through each element with multiple if statements, you can handle all sorts of requests more cleanly
// If I just do .filter or .reduce, you have to sort through the more complicated logic.
// I can use this to filter through songs by BPM for my personal project.

// groupBy

// union

// intersection

// memoize

let a = 5;