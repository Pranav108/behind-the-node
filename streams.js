const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {

    //Solution 1
    // fs.readFile('test-file.txt', (err, data) => {
    // if (err) console.log(err);
    // res.end(data);
    // })

    //Solution 2
    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data', chunk => res.write(chunk));//readable is faster then writing operation(back-pressure)
    // readable.on('end', () => res.end());
    // readable.on('error', err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end("An error occured!!");
    // });

    //Solution 3
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res); // readableSource.pipe(writableDestination)
});

server.listen(8800, '127.0.0.1', () => console.log("Listening......."));