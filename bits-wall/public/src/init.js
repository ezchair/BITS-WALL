


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

  for(let i in global.bricks){
    let brick = global.bricks[i]

    let img = new fabric.Image(BRICK_INFO[brick.type].image,{
      left: brick.x,
      top: brick.y,
      scaleX: brick.sy,
      scaleY: brick.sx,
    })

    img.brickIndex = i
    global.fBricks.push(img)
    global.fcanvas.add(img);
  }

  global.fcanvas.on('selection:created', (info1, info2, info3, info4)=>{
    console.log('hello')
    console.log(info1)
    console.log(info2)
    console.log(info3)
    console.log(info4)
  })
}