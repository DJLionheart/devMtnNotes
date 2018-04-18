// Lecture 17 April 2018


/*
For Lodash, view ./React-V/index.js

Get familiar with it. Between Lodash and Underscore, a majority of projects use it.
Lodash - written to run things fast.
Underscore - written to be easier to read. Maybe look at underscore first and then use Lodash?

Why reinvent the wheel???

_.debounce (will prevent something from firing off too much. Waits until your done inputting something before firing.)

_.throttle( I'll let you run the function first, but then not do it again... (Button Clicks - Pay Now, but will 
prevent users from accidentally double clicking and paying twice))






Developer / Debugging Tools


Google Chrome Developer Tools:

Elements Tab:



Style Tab
Update or create additional css elements.

 - :hov
Force an item to stay hovered, or active, or focused - to "hove" over an element without having
to keep your mouse over it.
Just select the element and force element state.



Event Listeners Tab:
Helpful when working with jquery



Network Tab:
Shows all the requests the browser is making, and the order in which everything is loadking.

Filter by: XHR (asynchronous requests)


Connecting the Front End to the Back End is usually the hardest part. Network Tab can help with that.

Disabling the cache can make it easier to see updates and changes.


Audits Tab:
Will run tests on your website to see the flow, and offer opportunities for things to fix.

BUT don't focus on this as much at the start. Write your code, get it together first. Improve later.
Can be helpful when your project is done, and you're working on things to improve.

Conle Tab: 
#Obvi


Application Tab: 
You can tern off the service workers.

View Cookies,
Session Storage, etc.


Security Tab:


Performance Tab:
Will reload the page, but will memorize pieces of how it loads and works?

You can check on how long it's taking for your animations to load.

Will show a graph of how long it takes to load, script, render, paint everything, etc.



Console Logs:
Makes it easy to jump into your debug tools.
If you click on the link in the console, it will take you to the part of your code that's firing. Then, you can set break points.
Break Points let you stop at a certain point in your code to help you review or fix your code, etc.



Sources Tab: 
Skip Button (proceed line by line, will skip over function calls.
Down Arrow button will actually run the function call.

Mouse over anythingin the local scope and see what the data looks like.

You can add variables to the Watch, in order to keep track of them so you don't have to keep searching for them in the
list of all your variables.

Call Stack:
To know what's going on, and see who invoked who.

Pause on Exceptions:
Usually you don't have to, but sometimes it is very helpful in slowing down and finding out what is going wrong.

People will be hiring me to help figure out what's going wrong.

More often than not, your function will break because you have wrong assumptions about your data,
not because of your syntax. (object vs. array, other data types, etc).

Check out the network tab, you can see what you're sending and getting back (or not sending and getting back)


*/

