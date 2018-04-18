/*

Lecture - 5 April 2018


SQL Review: 

Join

You can joing more than two tables...


select * from Track
JOIN album on track.albumId = album.albumId
JOIN artist on album.artistId = artist.artistId


Looking for the length of all tracks by Queen:


select round(SUM(milliseconds) / 1000.0 / 60 / 60, 3) as hours from Track
JOIN album on track.albumId = album.albumId
JOIN artist on album.artistId = artist.artistId
where artist.name = 'Queen'

adding the .0 to 1000 converts it from an integer into a decimal.
Wrapping that in round( ) will round to the nearest value. Adding a second argument (, 3) specifies how many decimal points



Massive will look for your sql files, and make them available to your server



req.app gives you access to your app object

In your other folders, you will export the routes, and do all the mapping in server.js (or controller)



app.get('/incidents', (req, res) => {
   
    const db = req.app.get('db');
    db.getAllIncidents().then( incidents => {
        res.send(incidents);
    });
});  



Every table should have an ID primary key



Inside of createIncident.sql

Replaced hard-coded values with arguments (after testing SQL tabs)

in the incidents post route, I got const db = req.app.get('db');

called db.createIncident(incident).then(results => {
    res.send(results)
})


Benefits of server-side rendering: you can do an initial render faster.

You can go and grab the movie listings that are relevant, and have them load before the JavaScript starts running.

SEO - Search Engine Optimization 

Server-Side Rendering will sent out HTML that is parsified and such.


Next.js is a common one. It will help you write react that works on both server and client-ends


Write SQL in separate files, because massive will do the escaping for you, to make sure it's safe for running inside SQL.

DON'T write in your javascript files, because you can seriously mess up your database. (SQL Injection )

*/