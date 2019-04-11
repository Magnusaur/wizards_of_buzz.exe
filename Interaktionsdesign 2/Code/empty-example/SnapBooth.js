// var video;
// var button;
// var snapshots = [];
//
// var xdim = 800;
// var ydim = 240;
//
// function setup() {
//   createCanvas(800, 240);
//   background(51);
//   video = createCapture(VIDEO);
//   video.size(320, 240);
//   video.hide();
//
//   button = createButton('snap');
//   button.mousePressed(takesnap);
// }
//
// function takesnap() {
//   let img = createImage(video, 0, 0);
//   snapshots.push(img);
// }
//
//
// function draw() {
//   for (var i = 0; i < snapshots.length; i++) {
//     snapshots[i] = image(snapshots[i], 320*i, 240);
//   }
//
// //image(video, 0, 0);
// }

var loaded = [];
var Img = [];
var x, y;

class Imgs {
  display(xPs, yPs) {
    this.xPs = xPs;
    this.yPs = yPs;
    this.x = windowWidth/5;
    this.y = windowHeight/4;

    image(loaded, this.xPs, this.yPs, this.x, this.y); //Every image drawn will show the capture feed
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  loaded = loadImage("puffin.jpg");

  Img.push(new Imgs()); //This is me adding every new "Imgs" to the array of Img
}

function draw() {
  x = windowWidth/5
  y = windowHeight/4
  for(let xPs = 0; xPs < width; xPs += x) {
    for(let yPs = 0; yPs < height; yPs += y) {  //A nested loop determining where to put each image of the capture feed.
      for(let i = 0; i < Img.length; i++) { //This is to progress the array
        Img[i].display(xPs, yPs);
      }
    }
  }
}
