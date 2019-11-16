const global = {
  canvas: null,
  ctx: null,
  vw: null,
  vh: null,
  mode: null,

  bricks: [
    new Brick(100, 100, 1, 1, "RECTANGLE", "ACTIVE", null),
    new Brick(200, 200, 1, 1, "DIMON", "ACTIVE", null),
    new Brick(300, 300, 1, 1, "STAR", "ACTIVE", null)
  ],
  fBricks: []
}