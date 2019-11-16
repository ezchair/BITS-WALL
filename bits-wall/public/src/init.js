window.onload = function(){
  this.console.log("Hello Twitch Hackthon!!")

  // init canvas
  global.canvas = document.createElement('canvas');
  global.canvas.setAttribute('id', 'canvas')
  global.ctx = global.canvas.getContext('2d');
  
  // push canvas to body
  document.body.appendChild(global.canvas);
  console.log(global.canvas)

  // design canvas weight and height
  global.vw = 600;
  global.vh = 800;

  global.canvas.width = global.vw;
  global.canvas.height = global.vh;

  global.fcanvas = new fabric.Canvas('canvas');

  global.fcanvas.on('selection:created', (info)=>{
    let target = info.target
    let brick = global.bricks[target.brickIndex]
    console.log('brick = ', brick)
    global.fcanvas.discardActiveObject();
  })
}

const handleReflase = (bricks) =>{
  global.fBricks = []
  global.bricks = []
  global.fcanvas.clear()

  for(let i in bricks){
    let src = bricks[i]
    let brick = new Brick(src.id, src.x, src.y, src.sx, src.sy, src.type, src.active, src.reward)
    global.bricks.push(brick)

    if(brick.active){
      let fObj = new fabric.Image(BRICK_INFO[brick.type].image,{
        left: brick.x,
        top: brick.y,
        scaleX: brick.sy,
        scaleY: brick.sx,
      })
  
      fObj.brickIndex = i
      global.fBricks.push(fObj)
      global.fcanvas.add(fObj);
    }

  }
}

let fake = () =>{
  handleReflase([
      new Brick(0, 100, 100, 1, 1, "RECTANGLE", true, null),
      new Brick(1, 200, 200, 1, 1, "DIMOND", true, null),
      new Brick(2, 300, 300, 1, 1, "STAR", true, null)
  ])
}

let fake2 = () =>{
  handleReflase([
      new Brick(0, 100, 150, 1, 1, "RECTANGLE", true, null),
      new Brick(1, 200, 250, 1, 1, "DIMOND", true, null),
      new Brick(2, 300, 350, 1, 1, "STAR", true, null)
  ])
}