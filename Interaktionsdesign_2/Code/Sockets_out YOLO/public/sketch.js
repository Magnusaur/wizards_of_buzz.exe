// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Real time Object Detection using YOLO and p5.js
=== */

let video;
let yolo;
let status;
let objects = [];
var c;
var cycleNum = 8;

p5.disableFriendlyErrors = false;


function setup() {
  c = createCanvas(160, 120);
  video = createCapture(VIDEO);
  video.size(80, 60);


  // Create a YOLO method
  yolo = ml5.YOLO(video, startDetecting);

  // Hide the original video
  video.hide();
  status = select('#status');
  frameRate(2);

}

function draw() {
  image(video, 0, 0, width, height);

  timeLoop();
}

function timeLoop() {
  let n = frameCount*2 % cycleNum;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].className === "person") {
    noStroke();
    fill(0, 255, 0);
    text('You.', objects[i].x * width, objects[i].y * height - 5);
    noFill();
    strokeWeight(4);
    stroke(0, 255, 0);
    rect(objects[i].x * width, objects[i].y * height, objects[i].w * width, objects[i].h * height);
    if (n == 0) {
      saveCanvas(c, 'prototype','jpg');

    }
    }
    if (objects[i].className === "cell phone" || objects[i].className === "remote" ) {
    noStroke();
    fill(255, 0, 0);
    text('Cell phone.', objects[i].x * width, objects[i].y * height - 5);
    noFill();
    strokeWeight(4);
    stroke(255, 0, 0);
    rect(objects[i].x * width, objects[i].y * height, objects[i].w * width, objects[i].h * height);

  }
console.log(objects[i].className);
    }
}


function startDetecting() {
  status.html('Model loaded!');
  detect();
}

function detect() {
  yolo.detect(function(err, results) {
    objects = results;
    detect();
  });
}
