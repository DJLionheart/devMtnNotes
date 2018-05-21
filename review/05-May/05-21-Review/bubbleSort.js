// If we have swapped something, we want to repeat it if swapped is true
function newBubSort(arr) {
    // Start with a flag variable true.
    let swap = true;
    // as long as the flag is true, the for loop below will repeat. 
    // "Don't run again unless we swap something"
    while (swap) {
      // Set the flag false, then run the for loop.
      swap = false;
      for(let j = 0; j < arr.length; j++) {
        if(arr[j] > arr[j+1]) {
          // if something needs to be swapped, set the flag to true
          // again, so that the while loop will continue this code.
          swap = true;
          // Then swap the numbers around using a temp.
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    return arr
  }
  

console.log(newBubSort([5,1,2,4,3, 6, 8, 7]))


  // Reversing the array and checking to see if it's in order may be more efficient.
  // If it is in order in reverse order, you can prevent the n*squared