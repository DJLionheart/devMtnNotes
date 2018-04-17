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
    return elem;
})
// forEach -> forIn / forOwn,  

// find

let myMovie = _.find(movies, {year:'2000', contentRating:'15'});

// groupBy

let byYear = _.groupBy(movies, 'year');
let byDecade = _.groupBy(movies, (movie)=>Math.floor(movie.year / 10) * 10)

// union

let brackFriends = ['Joe', 'Missy', 'Joe','Joe','Joe', 'David', 'Golden', 'Blake', 'Jeremy'];
let jeremyFriends = ['Missy', 'Nolan', 'Noah', 'Blake', 'Stephen', 'Lloyd', 'Ally'];

let combinedFriends = _.union(brackFriends,jeremyFriends);

// intersection
let sharedFriends = _.intersection(brackFriends, jeremyFriends);

// memoize

let a = 5 + 13 + '5';