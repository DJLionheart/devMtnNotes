//JavaScript - Toy Problem
// Write a function that, given a string, returns the number of vowels in that string.

// We will consider that a, e, i, o and u are vowels for the sake of this problem.

var vowelString = "Your mother was a hamster and your father smelt of elderberries!"; // -> 20

function vowelCounter(str) {
  let upperCase = str.toUpperCase().split('');
  let total = 0;
  upperCase.forEach((item, i) => {
    switch (item) {
      case 'A':
        total++;
        break;
      case 'E':
        total++;
        break;
      case 'I':
        total++;
        break;
      case 'O':
        total++;
        break;
      case 'U':
        total++;
        break;
    }
  })
return total;
}
console.log(vowelCounter(vowelString));