// TOY PROBLEM - 9 April

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


/*
1. convert number of seconds into readable hours, minutes, and seconds

if seconds > 60 >>>> minute 
if minutes > 60 >>>> hr


Input will be Number in seconds

We want a string that shows Hrs:Minutes:Seconds

Remember, the computer needs things to be broken down into baby steps.

get hours,
get minutes,
get seconds.

Make sure they're all in 2-digit numbers.
  -Hours
  -Minutes
  -Seconds

Helper function? Recursive function
*/



function timeConverter( seconds ) {
    let hourCount = 0;
    let secondsLeft = 0;
    let minuteCount = 0;
    let secondCount = 0;
    
    
    seconds >= 3600 
      ? hourCount = Math.floor(seconds / 3600)
      : hourCount = 0;
      
    secondsLeft = seconds % 3600;
      
    secondsLeft >= 60
      ? minuteCount = Math.floor( secondsLeft % 60)
      : minuteCount = 0;
        
    secondCount 
    
    
  if(hour < 10) {hourCount = '0' + hourCount}
  if(minuteCount < 10) {minuteCount = '0' + minuteCount}
  if (secondCount < 10) {secondCount = '0' + secondCount}
     
  }
  
  
  timeConverter(3700);