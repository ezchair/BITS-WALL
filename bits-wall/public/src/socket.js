let socket = io.connect('https://twi.eztable.com');
// let socket = io.connect('http://127.0.0.1:3000');

socket.on('connect', () => {
    console.log('connect');
    socket.emit('register', 43797122);
});

socket.on('updateWall', (bricks = [], brickId) => {
    console.log(bricks)
    handleReflash(bricks)
    if(brickId){
        console.log('delete id = ', brickId)
        let deleteBrick = bricks.find((b)=>b.id === brickId)
        console.log(deleteBrick)
        drawBurst(deleteBrick)
        // handle for burst!!
    }
    
});

function breakBrick(brickId,channelId) {
    socket.emit('breakBrick', channelId, brickId);
}