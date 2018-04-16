/*
LECTURE 11 April 2018


In a SQL query, you can do math when you're selecting data


SELECT particle_speed / 2.0 AS half_particle_speed
FROM physics_data
WHERE ABS(particle_position) * 10.0 > 500;

if you didn't use "AS", the result would come out with this name:
'particle_speed / 2'
and the only way you'd be able to reference it:

results[0]['particle_speed / 2']...


List all movies and their combined sales in millions of dollars 
SELECT title, round((international_sales + domestic_sales) / 1000000, 2) as sales FROM movies
JOIN boxoffice ON movies.id = boxoffice.movie_id


SHow all movies and their ratings in percentage

SELECT title, rating * 10 FROM movies
JOIN boxoffice on movies.id = boxoffice.movie_id


Find the longest an employee has been employed.
SELECT * FROM employees
order by years_employed desc
limit 1

SELECT max(years_employed) FROM employees


HAVING group_condition... 
Generally use WHERE but otherwise you can use HAVING



The number of employees of each role in the studio:

SELECT role, count(*) FROM employees
GROUP BY role


Find the average number of years employed per each role:

SELECT role, avg(years_employed) FROM employees
group by role


GROUP BY
Anytime you see 'each', you'll want to look at GroupBy


Find the total number of employee years worked in each building 

SELECT building, sum(years_employed) FROM employees
group by building


Find the country with the most customers:

select country, count(*) from customer
group by country
order by count(*) desc
limit 1


Having - getting the count of an individual row won't make sense

select country, count(*) from customer
group by country
having count(*) >= 5

Lets you filter by the count, since they wanted us to find the countries that have more than 5 employees.



SELECT director, count(*) FROM movies
group by director
HAVING count(*) >= 2

Shows the directors on the table who have directed more than 1 films


When you count with *, it doesn't actually look at the columns.
The database keeps track of a row count internally.



Find the total domestic and international sales that can be attributed to each director

SELECT director, sum(domestic_sales + international_sales) FROM movies
JOIN boxoffice ON movies.id = boxoffice.movie_id
group by director


how to find the director with the greatest sales?

SELECT director, sum(domestic_sales + international_sales) as sales FROM movies
JOIN boxoffice ON movies.id = boxoffice.movie_id
group by director
order by sales desc




UPDATE - Altering tables


alter table injuries
add column painlevel integer default 0


Don't rely on the database updating the order when you change a row.

Some will (like postgresql) but not all the time...
The database will do what it wants.




TEST OUT YOUR QUERIES BEFORE YOU IMPLEMENT THEM IN YOUR APP.


LIMIT THE NUMBER OF TIMES YOU DO MASSIVE DELETES OR UPDATES.


BACK UP YOUR DATA OFTEN.


You can set up permissions when you have accounts that can access your database.
This application operates under the user permissions of Web App - restrictions: cannot delete tables


DELETE FROM tableName
WHERE ..condition..


DROP TABLE tablename


////////////////////
//////////////
////////

CONSTRAINTS:

Primary KEY

PostgreSQL - SERIAL means autoincrement (so you don't have to write autoincrement, and it will keep track of it automatically.)


//////////
NOT NULL
///////////

Contract from Database:

Create Table contacts (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    phone TEXT,
    CONSTRAINT chk_phone CHECK (LENGTH(phone) = 10)
)

Contacts:

var c = {
    id: ...,
    name: ...,
    phone: ...,
    email: ...
}

An empty string won't be considered null (only null is null)

If we didn't add the not null constraint, we may get an uncaught type error or something - someone else may have added null data (on purpose or by accident)

Using constraints will allow you to have much cleaner code, because you won't need to add constraints everywhere.

Using NOT NULL is a good place to start, you can decide/change things later if you need a column to be capable of holding null value.

///////////
UNIQUE
//////////

No two users can share the same unique email ()

Username?
External ID? (Facebook or Twitter Login ---- DON'T USE THESE AS PRIMARY KEY, because their schemas may change.

//////////////////////////////
In my personal project, I wouldn't want to use UNIQUE as a title constraint, because there could be a lot of songs with the same title
//////////////////////////////



////////
CHECK 
////////

Make it at the table level so you can look at multiple columns


CHECK (LENGTH(phone) = 10)

You won't be able to insert something into the phone column unless it has 10 digits.

When to use CHECK constraints?
Could either be in the database or in your app/server code?

It's easier to make changes to my code than it is to change your database table.
Look for ways to do the checking on your server?



///////////////////////////
///////////////////
/////////

RELATIONSHIPS

/////////////
Many-to-One:
///////////
Mostly having multiple things that belong to one thing.

An Author:
Decides to write a trilogy. Many-to-one relationship: many books, one author.

A Cohort:
Many students to one cohort. 

State:
Many different customers to a given state.

Transactions:
Many transactions to one account.


//////////////
Many-to-Many:
//////////////

auhtors:
Esteban
Mike

Flights: 
8 - Delta
10 - United

tickets:
id 1 --- flightId 10 --- authorId 1
id 2 --- flightId 10 --- authorId 2
id 3 --- flightId 8 --- authorId 2

GitHub
Contributors are not limited to one repo.
One github account could have commit rights to many repos, and github repos could have multiple committers

Slack Channels... Every channel could have multiple people talking,
and any given person could belong to multiple channels.

You will always have an entity in the middle/join table that shows the entities coming together.

Groups - the common case.

If there's a group working on something, the relationship is usually many-to-many. 


////////////
One-to-One
///////////
Not as often on databases.

Physical Separation -----------------------
YouTube - you get the specific details of a video.
Then maybe from somewhere else you actually get the video content.
This could help something load faster in one component (the details), and the actual video load separately.
This could be a one-to-one


/////////////////////
//////////////
///////

Foreign Keys
----------------------------------------



REFERENCES authors(id)


DELETE from authors
WHERE name = 'Mike'

Because a foreign key is in place, it will stop from being able to delete Mike from authors,
because it would orphan those rows.

If you wanted to delete Mike, you'd have to delete his books (or update them) first.

update books set authorId = 2
Where Name = ...something...




Many to Many

 CREATE TABLE tickets (
  id INTEGER PRIMARY KEY,
  authorId INTEGER NOT NULL
    REFERENCES authors(id),
  flightId INTEGER NOT NULL
    REFERENCES flights(id)
)


select * from authors
join tickets on authors.id = tickets.authorid
join flights on tickets.flightid = flights.id

Any time you try to query many to many, it will require two joins.



SQL Injection:
When someone accidentally or intentionally inputs data 

In-text like this:
db.query(`
    SELECT * FROM injuries
    WHERE name = $1
`, [name])

OR 

the SQL file method


Anytime you see string concatenation in a database query, STOP. Instead do the sql file method (separate files escaped correctly by massive)

DO NOT:
INSERT INTO account
values('username', 'text string of password'.)


Library:
bcrypt

Library for hashing.

Takes a password you give it, and it will output

bcrypt.hash('s3cr3t')

output >>>> 'hash123'

BCRYPT is a password-safe hashing algorhythm

You can make it take less requests per second.

It's CPU intensive and slow. Good for storing passwords


Store the HASH in your database, not the actual password

select * from account where 
name = 'username'

JavaSCript
bcrypt.compare('s3cr3t', a.pass)


/////////////////
Transactions
////////////////

When someone signs up, we insert into the user table and delete from the invite table.


1. Look up invite
2. Delete invite
3. Create user


You could invert it.

Instead:

1. Look up invite
2. Create user
3. delete user

BETTER, but >>>>>>>>>>>>>>>>>>>>>>> Transactions
This all needs to happen together or not at all

SELECT id from invites
where secretCode = 'abc12';

BEGIN;
INSERT INTO users... 
DELETE FROM invites... 
COMMIT;

This will assure that everything happens. If one of the operations didn't happen, it will roll back and start over.

Index


----------------------------------------------------
====================================================
----------------------------------------------------
Afternoon Project

Join Practice
Black Diamond:

Get all tracks on the playlist(s) called Music and show their name, genre name, album name, and artist name.

Select t.name as Track, g.name as Genre, a.title as Album, art.name as Artist from Track t
JOIN playlistTrack pt on t.trackId = pt.trackId
JOIN playlist pl on pt.playlistId = pl.playlistId
JOIN album a on t.albumId = a.albumId
JOIN artist art on art.artistId = a.artistId
JOIN Genre g on g.genreId = t.genreId
WHERE pl.name = 'Music'



Nested Query Practice:

Get all invoices where the UnitPrice on the InvoiceLine is greater than $0.99:

select * from invoice
WHERE InvoiceId IN (select InvoiceId from invoiceLine where UnitPrice > 0.99)


Updating Tables:

Set the fax number to null for all individuals who have a fax number:

UPDATE customer
SET Fax = null
WHERE Fax IS NOT null

*/