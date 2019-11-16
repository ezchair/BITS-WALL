let socket = io.connect('http://ec2-18-179-200-250.ap-northeast-1.compute.amazonaws.com:3000');
// let socket = io.connect('http://127.0.0.1:3000');

socket.on('connect', () => {
    console.log('connect');
    socket.emit('register', 43797122);
});

socket.on('updateWall', (bricks = [], brickId) => {
    console.log(bricks)
    handleReflash(bricks)
    if(brickId){
        // handle for burst!!
    }
    
});

function breakBrick(brickId,channelId) {
    socket.emit('breakBrick', channelId, brickId);
}