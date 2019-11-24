class BitsWall{
    constructor(){
        this.timestamp = 1;
        this.channelId = 1;
        this.bricks = [];
    }
}

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyB3Huc_Jh4rSMEdvfa938kumjSYMAN4rbQ",
    authDomain: "bitswall-8478f.firebaseapp.com",
    databaseURL: "https://bitswall-8478f.firebaseio.com",
    projectId: "bitswall-8478f",
    storageBucket: "bitswall-8478f.appspot.com",
    messagingSenderId: "316414073936",
    appId: "1:316414073936:web:e397226b68f0251e110555",
    measurementId: "G-92F59Q18S8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let database = firebase.database();
let bitsWallRef = firebase.database().ref(`bitsWalls/${channelId}`);
let bitsWall;
bitsWallRef.on('value', function (snapshot) {
    let newBitsWall = snapshot.val();
    let bricks = newBitsWall.bricks;
    if(!bitsWall){
        bitsWall = newBitsWall;
        return;
    }

    //Check same bitsWall
    let isSameBitsWall = true;
    if(!isSameBitsWall){
        bitsWall = newBitsWall;
        return;
    }

    //Find explored bricks
    let exploredBricks = [];
    for (let brickId in bricks) {
        if(bricks[id].active === false && bitsWall === true){
            exploredBricks.push(bricks[brickId]);
        }
    }

    bitsWall = newBitsWall;
    handleReflash(bitsWall.bricks);
    drawBurst(bricks, exploredBricks);
});

function breakBrick(brickId) {
    bitsWall.bricks[brickId].active = false;
    bitsWallRef.update(bitsWall);
}



