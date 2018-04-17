// JS Review 17 April 2018

// Toy Problem:

var test = 'camelCaseHumpDay'

//Solution 1
var solution = s => s.split(/(?=[A-Z])/).join(' ')

//Solution 2
var solution2 =s=>s.split('').reduce((a,c)=>c==c.toUpperCase()?a+' '+c: a+c)
console.log(solution(test))


//Solution 3
function solution3(string){
  let tempArray = string.split('');
  tempArray.forEach((letter, index)=>{
    (letter === letter.toUpperCase()) ? tempArray[index] = ` ${letter}` : letter;
  })
  return tempArray.join('')
}

//Solution 4
function solution4(string){
  return (string.replace(/([A-Z])/g, ' $1'))
}




//My attempt:

// complete the function
// function solution(string) {
//   let indexes = [];
//   let wordCount = 1
//   let lowercase = []
//   let words = []
//   for(let i = 0; i < string.length; i++) {
//     switch( string[i] == string.toUpperCase ) {
//       case true:
//         indexes.push(string[i]);
//         wordCount++;
//         break;
      
//       case false:
//         lowercase.push(string[i]);
//         break;
        
//       default: 
//         lowercase.push(string[i]);
//         break;
//     }
    
    
//   }
//   indexes.forEach ( (index, i) => {
//     words.push(string.splice([i], indexes[i])
    
    
//   })
  
  // word1 = string.slice(0, index);
  // console.log(word2)
  // word2 = string.slice(index);
  // return `${word1} ${word2}`;
  // // console.log('Index: ', index, ', word1: ', word1)
  
    
// }


// var A = 'A';
// var a = 'a'

// A == a.toUpperCase();


/*
1. loop through each letter in the string.
2. If the leter is Capital, slice or splice it through the end on a different variable.
3. Join the two strings with a space.
*/



// var breakCamel = (string) => {
//   let tempArray = string.split('')
//   tempArray.forEach((letter, index)=>{
//     (letter === letter.toUpperCase()) ? tempArray[index] = ` ${letter}` : tempArray[index] = letter;
    
//   })
//   return tempArray.join('');
// }

// breakCamel(test)