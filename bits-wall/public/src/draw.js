const iconLen = 32
const brickH = 40
const brickW = 80
const disW = (brickW - iconLen) * 0.5
const disH = (brickH - iconLen) * 0.5
const border = 3
const border2 = border * 2

const drawBrick = function(b){
  const ctx = global.ctx
  const recX = b.x - disW
  const recY = b.y - disH
  ctx.fillStyle = 'rgba(118, 51, 23, 1)'
  ctx.fillRect(recX, recY, brickW, brickH)

  ctx.fillStyle = 'rgba(219, 86, 45, 1)';
  ctx.fillRect(recX + border, recY + border, brickW - border2, brickH - border2)
  
  ctx.drawImage(b.image, 0, 0, 112, 112, b.x, b.y, iconLen, iconLen)
}

const drawScene = function(){
  for(let i in global.bricks){
    let brick = global.bricks[i]
    drawBrick(brick)
  }
}

var Drawer = {
  drawScene,
}