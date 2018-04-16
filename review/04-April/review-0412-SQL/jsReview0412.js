// REVIEW 12 April 2018

//Toy Problem

// Description:

// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

// Note: Of course you can't do half a fold. You should know what this means ;P

// Also, if somebody is giving you a non-positive distance, it's clearly bogus and you should yell at them by returning null/NULL.

//384,400 km to the moon

//https://www.codewars.com/kata/folding-your-way-to-the-moon


function foldTo(distance) {
    if(!distance || distance <= 0) {
      return null;
    } else {
      
      let foldCount = 0
      let paper = 0.0001
      const fold = () => paper *= 2;
      
      while( paper <= distance ) {
        fold();
        foldCount++;
      }
      return foldCount;
    }
  }
  
  foldTo(384400000)


/*

seed.sql

It's essentially the file you want to run if nothing is set up, or if your database is only partially setup.

"Here's this cool website... By the way you have to connect your own database."

Seed file: "We see you have a database, but don't have any tables set up."

-- Everytime you start your server, it will run the seed file.
--You have to check if the table already exists or not, otherwise you'll get an error.

--This is like if you're adding info to a portfolio database.

--Semicolon IS necessary for multiple things to run in the same file.


Another way to do this, is just have some endpoints that check and see, and then add data if needed.


Setting Up Massive
1. Import Massive
const massive is a function, you give it a connection string or item.
username-password-whereitlives


massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)

}).catch(console.error)

app.get('/test', (req, res) => {
  const db = req.app.get('db')
}

--When you're using app.get, you're naming the db 'db' (the string), but the variable name (db without the quotes) has to 
match.
--If you're NOT in the controller, you don't have to use req.app, you can just use app.get('db')
some people like to call it dbInstance instead of db.

When running a project, you should always run Node out of your root folder.
Massive looks where Node is running. "Hey Node, are you running? is there a DB folder there? I want to scan it."

Make sure you put "main": "server/index.js" in your package.json - otherwise you have to type nodemon serve/index.js

Nodemon - scans for javascript, json, etc. It's looking for any change in the entire folder

//////////////////////////
Put app.listen so it only happens after the DB connection is made.
Also, when typing in nodemon:
nodemon --watch server
//////////////////////////

It will ONLY look for changes in the server folder.
SO, if you make a React change, the server will not reset.

Later, you can say: watch server and db







*/