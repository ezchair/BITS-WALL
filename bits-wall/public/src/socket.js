let myweb;

(function () {
    let socket = io.connect('http://localhost:3000');
    myweb = socket;
    socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });


})()