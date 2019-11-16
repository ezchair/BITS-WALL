let 
  vh = 1280,
  vw = 1980,
  canvas = null,
  fcanvas = null,
  move = 10,
  backgroundImage = null
;

window.onload = () => {
  canvas = document.getElementById('canvas')
  fcanvas = new fabric.Canvas('canvas');

}

const addBit = (type) =>{
  let fObj = new fabric.Image(BRICK_INFO[type].image,{
    left: 0,
    top: 0,
    scaleX: .5,
    scaleY: .5,
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
  return result
}

let sss = JSON.parse(`[{"id":"0","x":45,"y":75,"sx":1,"sy":1,"angle":0,"type":"STAR","active":true,"reward":null},{"id":"1","x":155,"y":107,"sx":1,"sy":1,"angle":0,"type":"RECTANGLE","active":true,"reward":null}]`)

const setBackgroundImage = (img) => {
  backgroundImage = img

  let image = new Image()
  image.src = img
  image.onload = () =>{
    // console.log(image.height)
    // console.log(image.width)

    // fcanvas.setHeight(image.height)
    // fcanvas.setWidth(image.width)
    fcanvas.setBackgroundImage(backgroundImage, fcanvas.renderAll.bind(fcanvas), {
      backgroundImageOpacity: 0.5,
      backgroundImageStretch: false,
    })
  }

}

window.onkeydown = function(e){
  if(e.keyCode === 16){
    move = 2
  }
  if(e.keyCode === 8 || e.keyCode === 46){
    if(fcanvas){
      let activeGroup = fcanvas.getActiveObjects()

      if(activeGroup){
        for(let i in activeGroup){
          let obj = activeGroup[i]
          fcanvas.remove(obj)
        }
        fcanvas.discardActiveObject()
      }
    }
  }
  // up
  else if(e.keyCode === 38){
    let activeGroup = fcanvas.getActiveObjects()
    if(activeGroup){
      for(let i in activeGroup){
        let obj = activeGroup[i]
        obj.set('top', obj.top - move)
      }
      fcanvas.renderAll()
    }
  }
  //down
  else if(e.keyCode === 40){
    let activeGroup = fcanvas.getActiveObjects()
    if(activeGroup){
      for(let i in activeGroup){
        let obj = activeGroup[i]
        obj.set('top', obj.top + move)
      }
      fcanvas.renderAll()
    }
  }

  else if(e.keyCode === 37){
    let activeGroup = fcanvas.getActiveObjects()
    if(activeGroup){
      for(let i in activeGroup){
        let obj = activeGroup[i]
        obj.set('left', obj.left - move)
      }
      fcanvas.renderAll()
    }
  }

  else if(e.keyCode === 39){
    let activeGroup = fcanvas.getActiveObjects()
    if(activeGroup){
      for(let i in activeGroup){
        let obj = activeGroup[i]
        obj.set('left', obj.left + move)
      }
      fcanvas.renderAll()
    }
  }
}

window.onkeyup = function (e){
  if(e.keyCode === 16){
    move = 10
  }
}