let db = {}
db.connect()
let data = db.getSetting(userId)

const createBrick = () => {
    
}

const updateBrick = () => {

}

const deleteBrick = () => {

}

class Brick {
    constructor(type, x, y, sx, sy, reward) {
        this.type = type;
        this.loc = {
            x: x,
            y: y
        }
        this.scale = {
            x: sx,
            y: sy
        }
        this.reward = reward
    }
}

class State {

}

class BricksConfig {
    constructor() {
        
    }
}

class brick {
    constructor()
}

storeSetting(config) {

}