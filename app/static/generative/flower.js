const WIDTH = 600
const HEIGHT = 600


var i = 0
var roses_loc = [
  [WIDTH/2, HEIGHT/2],
  [WIDTH/2+WIDTH/3, HEIGHT/2+WIDTH/5],
  [WIDTH/2+WIDTH/3, HEIGHT/2-WIDTH/3]
]
var n_roses = roses_loc.length

function setup() {
  createCanvas(WIDTH, HEIGHT, SVG)
  angleMode(DEGREES)
  // frameRate(40)
  //noLoop()
  strokeWeight(1)
  background(255)
  colorMode(HSB, 360, 100, 100)

  flower = new Rose(roses_loc[i][0], roses_loc[i][1], 0.8)
}

function draw() {
  flower.leaf()

  if (flower.s > 0.1) {
    flower.petal()
  }
  else {
    i++
		if (i < n_roses){
    	flower = new Rose(roses_loc[i][0], roses_loc[i][1], random(0.7, 0.8))
		}
    else{
      noLoop()
    }
  }
}


class Rose{
  constructor(x, y, s) {
    this.x = x
    this.y = y
    this.s = s
    this.n_leaf = int(random(0, 3))
    this.angle = 0
  }

  petal(n = 1){
    stroke(0)
    fill(359, random(80, 95), random(40, 90)) // random color per triangle

    let h = this.s * random(110, 150) // scale new triangle
    let a = random(20, 90) // new angle rotation
    this.angle += a // add to total rotation
    this.s -= random(0.0, 0.03) // resize for future iteration

    push()
      translate(this.x, this.y)
      rotate(this.angle)
      beginShape(TRIANGLES)
      vertex(0, 0)
      vertex(0, h)
      vertex(h*cos(90-a), h*sin(90-a))
      endShape(CLOSE)
    pop()
  }


leaf(){
  while(this.n_leaf > 0){
    this.n_leaf -= 1

    let leaf_dist = this.s * random(30, 90)
    let leaf_l = this.s * 120 // the x default = 100
    let leaf_w = leaf_l/2 + random(leaf_l/4) // the y default = 60
    let ratio = random(0.1, 0.5) // default =

    let a = random(30, 300)
    this.angle += a
      
    push()
      translate(this.x, this.y)
      rotate(this.angle)
      // define the 4 points of the leaf
      let root = {
        x: 0 + leaf_dist,
        y: 0}
      let p1 = {
        x: root.x + ratio*leaf_l,
        y: root.y - leaf_w/2}
      let p2 = {
        x: root.x + ratio*leaf_l,
        y: root.y + leaf_w/2}
      let apex = {
        x: root.x + leaf_l,
        y: root.y}

      // define the control points of the bezier
      let ctrl_11 = {
        x: root.x + 0.7*leaf_l,
        y: root.y - 0.4*leaf_l}
      let ctrl_12 = {
        x: root.x + 0.95*leaf_l,
        y: root.y}
      let ctrl_21 = {
        x: root.x + 0.95*leaf_l,
        y: root.y}
      let ctrl_22 = {
        x: root.x + 0.7*leaf_l,
        y: root.y + 0.4*leaf_l}

      stroke(0)
      fill(120, random(80, 99), random(40, 41))

      beginShape()
      vertex(root.x, root.y)
      vertex(p1.x, p1.y)
      bezierVertex(ctrl_11.x, ctrl_11.y, ctrl_12.x, ctrl_12.y, apex.x, apex.y) 
      bezierVertex(ctrl_21.x, ctrl_21.y, ctrl_22.x, ctrl_22.y, p2.x, p2.y)
      vertex(root.x, root.y)
      endShape(CLOSE) 

      line(root.x, root.y, apex.x, apex.y)

      // draw the inner part of the leaf
      const list = [0.2, 0.4, 0.6, 0.8]
      for (let i = 0; i < list.length; i++){
        let bezier1 = {
          x: bezierPoint(p1.x, ctrl_11.x, ctrl_12.x, apex.x, list[i]),
          y: bezierPoint(p1.y, ctrl_11.y, ctrl_12.y, apex.y, list[i])
        }

        let bezier2 = {
          x: bezierPoint(apex.x, ctrl_21.x, ctrl_22.x, p2.x, 1-list[i]),
          y: bezierPoint(apex.y, ctrl_21.y, ctrl_22.y, p2.y, 1-list[i])
        }

        // one side of the leaf
        curve(
          root.x + leaf_l, root.y + leaf_w,
          bezier1.x, bezier1.y,
          root.x + list[i]*(apex.x-root.x), root.y + list[i]*(apex.y-root.y),
          root.x + list[i]*(apex.x-root.x), root.y
          )
          
        curve(
          root.x + leaf_l, root.y - leaf_w,
          bezier2.x, bezier2.y,
          root.x + list[i]*(apex.x-root.x), root.y + list[i]*(apex.y-root.y),
          root.x + list[i]*(apex.x-root.x), root.y,
          )   
      }
      pop()
    }
  }
}

