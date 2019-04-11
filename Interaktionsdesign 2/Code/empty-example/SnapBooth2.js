var loaded;
var Img = [];
var x = 0;
var y = 0;
var c;

function setup() {
  c = createCanvas(windowWidth,windowHeight);
  takeSnap(0);
}

function takeSnap(i) {
  saveCanvas(c, 'prototype('+i+')','jpg');
  loaded = loadImage('prototype('+i+').jpg');

  Img.push(new Imgs(loaded));
}

function draw() {
  Img[0].display(windowWidth, windowHeight)
  // x = windowWidth/5
  // y = windowHeight/4
  // for(let xPs = 0; xPs < width; xPs += x) {
  //   for(let yPs = 0; yPs < height; yPs += y) {  //A nested loop determining where to put each image of the capture feed.
  //     for(let i = 0; i < Img.length; i++) { //This is to progress the array
  //       Img[i].display(xPs, yPs, i);
  //     }
  //   }
  // }
}

class Imgs {
  constructor(loaded) {
    this.loaded = loaded;
  }

  display(xPs, yPs) {
    // this.xPs = xPs;
    // this.yPs = yPs;
    // this.x = windowWidth/5;
    // this.y = windowHeight/4;

    image(loaded, this.xPs, this.yPs, this.x, this.y); //Every image drawn will show the capture feed
  }
}
