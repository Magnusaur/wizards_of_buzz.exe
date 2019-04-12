var loaded;
var Img = [];
var xPs = 0;
var yPs = 0;
var counter = 0;
var cycleNum = 256;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);


  takeSnap(counter);
}

function takeSnap(i) {
  loaded = loadImage('prototype ('+i+').jpg');
  Img.push(new Imgs(loaded));
}


function draw() {
  let x = windowWidth/5
  let y = windowHeight/4
  for(let i = 0; i < Img.length; i++) {
    Img[i].display(xPs, yPs, x, y);
  }
  if (xPs > width) {
    xPs = 0;
    yPs += y;
  } else {
    xPs += x
  }

  counter++
  takeSnap(counter)

}

class Imgs {
  constructor(loaded) {
    this.loaded = loaded;
  }

  display(xPs, yPs, x, y) {
    this.xPs = xPs;
    this.yPs = yPs;
    this.x = x;
    this.y = y;

    image(loaded, this.xPs, this.yPs, this.x, this.y); //Every image drawn will show the capture feed
  }
}
