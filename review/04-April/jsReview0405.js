// Review - 5 April 2018

// write a function that translates english to pig-latin
// 'truck' would be 'rucktay'
// 'igloo' would be 'iglooway'

// for a more advanced problem write a function that works with multiple words in a string:
// 'hello friend' would be 'ellohay iendfray'
// 'i live in the igloo' would be 'iway ivelay inway hetay iglooway'

/*
1. split into an array of words
2. if the first character is a, e, i, o, or u, just add "way" to the end of the word.
3. if the first character is anything else, split those words into arrays of letters to move their position around.
4. Then, move the first letter to the end of the word and concatenate 'way' to the end.
5. Join the string(s) back together.
*/

// UNFINISHED

function translator(string) {
    let splitString = string.toLowerCase().split(' ');
    for(let i = 0; i < splitString.length; i++){
      if(tempSplit[0] == 'a' || 'e' || 'i' || 'o' || 'u'){
        tempSplit.push('way');
    }
    
    {      
        console.log('Temp split: ', tempSplit)
        
        word = tempSplit.join('')
        word += ' '
        console.log('Word: ', word)
        
      }
      
    };
    let joinedString = newArray.join(' ')
    return joinedString;
  
  }
  
  translator('away uniform');
  