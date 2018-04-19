// Review - 19 April 2018


// Toy Problem


// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must     multiply the digits in num until you reach a single digit.

// For example:

// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                       // and 4 has only one digit

// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

// persistence(4) === 0 // because 4 is already a one-digit number.


// function persistence(num) {
//   var numbersArray = [];
//   let count = 1;
//   if( num.length === 1) {
//     return 1
//   } else {
//     count++
//     let stringNums = num.toString();
//   for(let i = 0; i < stringNums.length; i++) {
//     numbersArray.push(+stringNums[i]);
//   }
//   console.log('numbersArray: ', numbersArray)
//   if(numbersArray.length > 1)
//     var newArray = numbersArray.reduce( (a, c) => a*c )
//     console.log(newArray)
//   }
// }


// function persistence(num) {
//     if(num.length < 10)
    
//   }
  
//   persistence(234)
  
  /*
  function persistence
  while(numArr.length > 1) {
    console.log(numArr)
    numArr = numArr.reduce((a, c) => a * c).toString(10).split("").map(Number)
    count++
  }
  return count
  }
  
  recursion? return persistence(num)
  
  
  */
  
  
  // function persistence(num) {
  //   var count = 0;
  //   var holder = num;
    
  //   while(holder.toString().split('').length > 1) {
  //     count++
  //     holder = helper(holder)
  //   }
  //   return count
  // }
  
  // function helper(num) {
  //   let split = num.toString().split('')
  //   let product = split.reduce(( total, val) => {
  //     return total * val
  //   })
  // }
  
  
  // persistence(124)
  
  
  
  