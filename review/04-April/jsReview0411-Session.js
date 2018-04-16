// Review April 11 2018

// Toy Problem
// Average
// Write a function that takes in an array of numbers as a parameter.
// You can assume all values in the array are numbers.
// Find the average of the numbers
// return the average.

// test data
var test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var test2 = [52, 6, 109, 99, 78, 3, 1, -6]
var test3 = ['52', 'k', 109, '78', 'g', 89] //=>82

// Bonus Challenge:
// Use the reduce method. Before returing the average, round to the nearest whole number. How would you handle if there were strings, and some of the strings were letters and not numbers?

/*
1. make sure the array only has numerical non-string values.

*/


// function average(array) {
//   var total = 0;
//   array.forEach( (val, i) => {
//     total += val;
//   });
//   return total / array.length;
// }

function bonusAvg(array) {
  for(let i = 0; i < array.length; i++){
    typeof array[i] === 'string' ? array[i] = +array[i] : null;
    isNaN(array[i]) ? array.splice([i], 1) : null;
  }
  var avg = array.reduce( (a, c) => {
    return a + c;
  });
  return Math.round(avg / array.length);
}

// // average(test2);


bonusAvg(test1)
  

/*

///////////////////////\
Express Session Review
\\\\\\\\\\\\\\\\\\\\\\\/

req.session === info stored on the server that you can retrieve anywhere on the server.

Instead of passing on req.body, you could contain info on req.session.

req.session is like a cookie+

The only limit to what you can put on req.session is the size of the server.

Passing a userID over a parameter is a BAD practice. (easier for the user id to get picked up)

Using session is a lot more secure...


Middlewawre - a function that fires between an endpoint and its attached function.

Middleware can be used as one of your arguments in an endpoint (req, res, next) - You MUST have next,
otherwise the next function won't run.

You can embed multiple middlewares, and they will fire sequentially from left to right.


Let's say you have an administrator and a manager:

Manager can get every endpoint on their whitelist. 

Administrator can get everything the manager can access, and then some.
*/