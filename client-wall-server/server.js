const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const {
    SERVER_PORT=3000
} = process.env;

app.use(bodyParser.json());
app.use(router);
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/health', (req, res)=>{
    ws.send('Must be healthy');

    res.json({
        status:'running'
    });
});

let server = http.listen(SERVER_PORT, function () {
    const host = server.address().address;
    console.log("awstwitch at http://%s:%s", host, SERVER_PORT);
});

io.on('connection', function(socket){
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});