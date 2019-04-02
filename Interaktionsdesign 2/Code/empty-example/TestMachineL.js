let mobilenet;

function modelReady() {
  console.log('Model is ready!!!')
}

function setup() {
  createCanvas(640, 480);
  background(0);

  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function draw() {

}
