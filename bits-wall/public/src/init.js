console.log('hi')
window.onload = function(){
  this.console.log("Hello Twitch Hackthon!!")
  
  console.log(this.document.getElementById('testbutton'))
  document.getElementById('testbutton').addEventListener('click', function () {
    console.log('hihihihi')
  });

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

  var canvas = new fabric.Canvas('canvas');

  var rect = new fabric.Rect({
      top : 100,
      left : 100,
      width : 60,
      height : 70,
      fill : 'red'
  });

  canvas.add(rect);

  // this.main()
}