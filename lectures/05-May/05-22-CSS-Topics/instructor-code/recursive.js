const _ = require('lodash');
// Recursive Sum
// sum(15) => 15 +14 +13 +12 +11 +10 +...

function sum(number){
  if (number <= 1){
    return number;
  }
  return number + sum(number - 1);
}

// console.log(sum(5));


// Recursive Fibonaci sequence
// 1, 1, 2, 3, 5, 8, 13, 21...
// f(n) = f(n-1) + f(n-2);
// f(1) = 1
// f(2) = 1

function fib(num){
  if (num <=2){
    return 1
  }
  return fib(num - 1) + fib(num - 2);
}
console.log(fib);

fib = _.memoize(fib);

fib(1000);

console.log(fib.cache);
 let cache = {
   1:1,
   2:1,
   3:2,
   4:3,
   5:5,
   6:8,
   7:13
 }
// Generic Object Display

function objectDisplay(obj, depth = 0){
  // escape case if obj is not a collection
  let padding = '--'.repeat(depth);
  if (!obj){
    console.log(padding + obj);
    return
  }
  if (typeof obj === "string" || typeof obj === "number" || typeof obj === "boolean"){
    console.log(padding + obj);
    return;
  }

  // call next case
  if (Array.isArray(obj)){
    for (var i=0;i<obj.length;i++){
      objectDisplay(obj[i], depth);
    }
    return 
  }
  for (prop in obj){
    console.log(padding + prop);
    objectDisplay(obj[prop], depth+1);
  }
}

let animals={
  dog:{
    labrador:{
      american:'http://dogpics.com/7423.png', 
      english:'http://dogpics.com/5274.png'
    }, 
    akita:{
      japanese:'http://dogpics.com/3486.png', 
      american:'http://dogpics.com/4843.png'
    }, 
    poodle:{
      standard:{
        french:'http://dogpics.com/8484.png', 
        barbone:'http://dogpics.com/1268.png'
      }, 
      minature:'http://dogpics.com/1350.png', 
      toy:'http://dogpics.com/884.png'
    }, 
  }, 
  cat:'http://grumpycat.com/mrGrumpy.png',
  ants:["A1","B2","C3", {name:'Flick'}, "D4","E5","F6"]
}

// objectDisplay(animals)



// Coin Problem
// Given Quarter, Dimes, and pennies.  Find all ways to give exact change
// Input number
// Output array of strings 
// 5 -> ['PPPPP']
// 11 -> ['DP', 'PPPPPPPPPPP']
// 26 -> ['QP','DDPPPPPP','DPPPPPPPPPPPPPPPP','PPPPPPPPPPPPPPPPPPPPPPPP']

function change(amount, smallestCoin=50){
  // escape case
  let possibilities = [];
  if (amount === 1){
    return ['P']
  }
  if (amount <= 0){
    return [''];
  }
  // next case
  if (amount >= 25 && smallestCoin >= 25){
    possibilities.push(...change(amount - 25, 25).map(str=>'Q'+str));
  }
  if (amount >=10 && smallestCoin >= 10){
    possibilities.push(...change(amount - 10, 10).map(str=>'D'+str));
  }
  if (amount >=1 && smallestCoin >= 1){
    possibilities.push(...change(amount - 1, 1).map(str=>'P'+str));
  }
  return possibilities;
}

// console.log(change(45));

// Stretch Problem
// Given a total and an array of coins.  Find all ways to make total given those coin types
// (10, [{label:'Q',value:25}, {label:'D',value:10}, {label:'P', value:1}])
// (100, [{label:'N',value:5}, {label:'D',value:10}, {label:'P', value:1}])
// (125, [{label:'Q',value:25}, {label:'D',value:10}])
// (712, [{label:'GP',value:100}, {label:'EP',value:50}, {label:'SP',value:10},{label:'CP', value:1}])
