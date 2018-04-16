//my_var => myVar

//my-var => myVar

//Snake case: my_var >>>> myVar
//Function will take a string and convert it's case

//First: split the string.
//Second: run a for-loop  to evaluate its pieces.
//Third: get rid of hyphen or underscore.
//Fourth: capitalise the character after the symbol

var kebab = 'my-funky_variable';

function convertCase(string){
  let newString = string.split('');
  for(let i = newString.length-1; i >= 0; i--){
    if(newString[i] === '-' || newString[i] === '_'){
      newString[i+1] = newString[i+1].toUpperCase();
      newString.splice(i, 1);
    }
  }
  return newString.join('');
}
convertCase(kebab);

//If you ever need a section of a string, you can use slice as though it were an array.

// arr[i] = word[0].toUpperCase() + word.slice(1)

//When using .split, it can be helpful to use the character you want to remove: '_' or '-'




////////////////// Node Questions ///////////////////////
