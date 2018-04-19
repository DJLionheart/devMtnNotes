// JS Review 18 April 2018

// Toy Problem

// given the following array, randomize it.

const students = [
    'Dan',
    'Brack',
    'Erin',
    'Geordyn',
    'Jess',
    'Sarah',
    'Andrew',
    'Ryan',
    'Tim',
    'Stephen',
    'David',
    'Mark'
  ];
  
  
  // In functions, it's a good idea to slice the original array (make a copy)
  
  function shuffle( array ) {
    arr = array.slice()
    let output = [];
    
    while( arr.length )
    let randomInt = Math.floor(Math.random() * arr.length)
    output.push(arr.splice(randomInt, 1))
    
    
  }
  
  shuffle(students)
  
  function shuffleArray(arr) {
    let shuffArr = arr.slice();
    let out = [];
    let i = 0, j = 0, temp = null;
    for (i = shuffArr.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = shuffArr[i];
      shuffArr[i] = shuffArr[j];
      shuffArr[j] = temp;
      shuffArr[j] = temp
    }
  }
  
  
  
  // ~~ = Math.floor()
  
  // (~~(Math.random() * 6) + 1) >>> will give a random number between 1 and 6
  
  
  // The easy way... Not good for learning purposes though :)
  // const randomizer = array => _.shuffle(array)
  
  // randomizer(students);
  
  
  