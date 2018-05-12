// Instant data transfer between front and back-end.



// github.com/nathan-08/socket-io-countdown-time
// github.com/nathan-08/web-socket-chat-app

/*
Scoket - one endpoint of a two-way communication link between two programs running on the network.

WebSockets are an advanced tech that makes it possible to open an interactive communication session between the
user's browser and a server. With this API, you can send messages to a server and receive event-driven responses
without having to poll the server for a reply. 

https://developer.mozillaorg/en-US/docs/Web/API/WebSockets_API

HumbleNet

Socket.io


# Timer App
The server doesn't have to wait for an axios request, it's the client that's listening for changes on the server.
Lets you send information from the server to client (and from client to server) without an axios request.

Server: socket.io


Client: socket.io-client
*/

const socket = require('socket.io')

const io = socket(app.listen(4000, () => console.log('listening on 4000')))

var countdown = 1000;
var counting = true;

setInterval(function () {
    if (countdown <= 0) return;
    if (!counting) return;
    countdown--;
    io.sockets.emit('timer', { countdown: countdown})
}, 1000)

// Socket endpoint
// io.on
io.on('connection', function (client) {
    console.log('connected')
    client.on('settimer', function (data) {
        countdown = data.time
    })
})


// start/stop timer



/*
In react, we listen for sockets inside the constructor in the component.
*/
// const socket = io.connect('server url -- or empty if in production mode'))
this.state = { countdown: null }
this.subscribeToTimer(data => this.setState({ countdown}))

/*
# Chat App

*/

// Sends a message
client.to(socket.id).emit('message', {})