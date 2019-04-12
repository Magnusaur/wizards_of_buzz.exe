var c;
var video;
var cycleNum = 50;

function setup() {
  c = createCanvas(windowWidth/3, windowHeight/2);
  frameRate(30);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function draw() {
  image(video, 0, 0, width, height);
  timeLoop();
}

function timeLoop() {
  let n = frameCount*2 % cycleNum;
    if (n == 0) {
      saveCanvas(c, 'prototype','jpg');
    }
}
