const EventEmmiter = require('events');
const http = require('http');

// const myEvent = new EventEmmiter();
//OR
class Sale extends EventEmmiter { //preffered
    constructor() {
        super();
    }
}
const myEvent = new Sale();

myEvent.on('newSale', () => console.log("There is a new Sale!"));
myEvent.on('newSale', () => console.log("CustomerName : Pranav"));
myEvent.on('newSale', (stock, price) => console.log(`There are ${stock} item in sale, worth price ${price}`));
myEvent.emit('newSale', 10, 20);

//////////////////////////////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
    console.log("Request Recieved");
    console.log(req.url);
    res.end("Request recieved!!!");
});

server.on('request', (req, res) => console.log("Request Recieved😉"));

server.on('close', () => console.log("Server Closed"));

server.listen(8800, '127.0.0.1', () => console.log("waiting for request....."));