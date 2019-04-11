var loaded;
var Img = [];
var xPs = 0;
var yPs = 0;
var c;
var counter = 0;

function setup() {
  frameRate(1);
  c = createCanvas(windowWidth, windowHeight);
  takeSnap(counter);
}

function takeSnap(i) {
  // saveCanvas(c, 'prototype('+i+')','jpg');
  loaded = loadImage('Users/Mark/Downloads/prototype('+i+').jpg');
  // loaded = loadImage('puffin.jpg');

  Img.push(new Imgs(loaded));
}

function draw() {
  // Img[0].display(0, 0)
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
