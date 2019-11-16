function main(){

  global.mode()
  window.requestAnimationFrame(main)
}

function userMode(){
  Drawer.drawScene()
}

global.mode = userMode
