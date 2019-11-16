const bits = window.Twitch.ext.bits;
const global = {
  canvas: null,
  ctx: null,
  vw: null,
  vh: null,
  mode: null,

  bricks: [],
  fBricks: [],
  handlingBrick: null,
  channelId: 43797122
}

bits.onTransactionComplete(function (o){
  const productType = o.product.sku;
  console.log(`Transaction ${productType} complete`);
  console.log(o);
  if(global.handlingBrick){
    breakBrick(global.handlingBrick.id, global.channelId)
  }
  // Explore
});

bits.onTransactionCancelled((o)=>{
  console.log(`Transaction ${JSON.stringify(o)} cancel`);
  console.log(o);
});

window.onload = function(){
  this.console.log("Hello Twitch Hackthon!!")

  // init canvas
  global.canvas = document.createElement('canvas');
  global.canvas.setAttribute('id', 'canvas')
  global.ctx = global.canvas.getContext('2d');
  
  // push canvas to body
  document.body.appendChild(global.canvas);
  // console.log(global.canvas)

  // design canvas weight and height
  global.vw = 1280;
  global.vh = 720;

  global.canvas.width = global.vw;
  global.canvas.height = global.vh;

  global.fcanvas = new fabric.Canvas('canvas');

  global.fcanvas.on('selection:created', (info)=>{
    
    if(info.selected.length > 1){
      this.alert('Please select single brick')
      global.fcanvas.discardActiveObject();
      return
    }

    let target = info.target
    let brick = global.bricks[target.brickIndex]
    global.handlingBrick = brick
    console.log('brick = ', brick)
    bits.useBits(brick.type);
    global.fcanvas.discardActiveObject();
  })

  // fake()
}

const handleReflash = (bricks) =>{
  global.fBricks = []
  global.bricks = []
  global.fcanvas.clear()
  
  for(let i in bricks){
    let src = bricks[i]
    let brick = new Brick(src.id, src.x, src.y, src.sx, src.sy, src.angle,src.type, src.active, src.reward)
    global.bricks.push(brick)

    if(brick.active){
      console.log('hi')
      let fObj = new fabric.Image(BRICK_INFO[brick.type].image,{
        left: brick.x,
        top: brick.y,
        scaleX: brick.sy,
        scaleY: brick.sx,
        angle: brick.angle
      })
  
      fObj.brickIndex = i
      global.fBricks.push(fObj)
      global.fcanvas.add(fObj);
    }

  }
}

// let fake = () =>{
//   handleReflash([
//       new Brick(0, 100, 100, 1, 1, 0, "RECTANGLE", true, null),
//       new Brick(1, 200, 200, 1, 1, 0, "DIMOND", true, null),
//       new Brick(2, 300, 300, 1, 1, 0, "STAR", true, null)
//   ])
// }

// let fake2 = () =>{
//   handleReflash([
//       new Brick(0, 100, 150, 1, 1, 45, "RECTANGLE", true, null),
//       new Brick(1, 200, 250, 1, 1, 45, "DIMOND", true, null),
//       new Brick(2, 300, 350, 1, 1, 45, "STAR", true, null)
//   ])
// }