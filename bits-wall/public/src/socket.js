let socket = io.connect('http://ec2-18-179-200-250.ap-northeast-1.compute.amazonaws.com:3000');

socket.on('updateWall', () => {

});

socket.on('getWall', () => {

});

function breakBrick(channelId, brickKey) {
    socket.emit('breakBrick', {
        channelId,
        brickKey
    });
}