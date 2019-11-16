let 
  vh = 1280,
  vw = 1980,
  canvas = null,
  fcanvas = null
;

window.onload = () => {
  canvas = document.getElementById('canvas')
  fcanvas = new fabric.Canvas('canvas');

}

const addBit = (type) =>{
  let fObj = new fabric.Image(BRICK_INFO[type].image,{
    left: 0,
    top: 0,
    scaleX: 1,
    scaleY: 1,
  })

  fcanvas.add(fObj)
}

const loadFromSouce = (sources) => {
  fcanvas.clear()
  for(let i in sources){
    let b = sources[i]
    let fObj = new fabric.Image(BRICK_INFO[b.type].image,{
      left: b.x,
      top: b.y,
      scaleX: b.sx,
      scaleY: b.sy,
      angle: b.angle
    })

    fcanvas.add(fObj)
  }
}

const reflashCanvs = () =>{
  fcanvas.clear()
}

const convert2BrickData = () =>{
  let sources = fcanvas.toJSON().objects
  let result = []
  for(let i in sources){
    let source = sources[i]
    let type = IMGSOURCE_MAPPING[hashFunction(source.src)]
    let brick = new Brick(
      i,
      source.left,
      source.top,
      source.scaleX,
      source.scaleY,
      source.angle,
      type, true, null
    )
    
    result.push(brick)
  }
  console.log(result)
  console.log(JSON.stringify(result))
}

let sss = JSON.parse(`[{"id":"0","x":45,"y":75,"sx":1,"sy":1,"angle":0,"type":"STAR","active":true,"reward":null},{"id":"1","x":155,"y":107,"sx":1,"sy":1,"angle":0,"type":"RECTANGLE","active":true,"reward":null}]`)
