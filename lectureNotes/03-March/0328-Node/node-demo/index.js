//To use a package on our server, you cannot use "import" syntax. You must use require:

const express = require('express');

//save express to a variable, then save the result of express being invoked to the variable app

const bodyParser = require('body-parser');



const app = express();




//This is Top-level Middleware
app.use(bodyParser.json());



let temporalArchive = [

];


app.get('/api/camelot', (req, res) => {
    res.status(200).send("Well met, good sir!")

})

app.post('/api/camelot', (req, res) => {
    temporalArchive.push(req.body)
    res.status(200).send(temporalArchive);
})

app.get('/api/camelot/:name', (req, res) => {
    console.log(req.params);
    
})




//Usually invoke listen at the bottom of your app.
//First argument is the port number, second argument is a callback function.
//you can use any number between port 3000 and 12000


app.listen(4025, () => console.log('Ye olde server doth listen on Port 4025...'));