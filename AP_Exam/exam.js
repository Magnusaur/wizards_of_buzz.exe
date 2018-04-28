var img;

function preLoad() {
  img = loadJSON("http://faker.hook.io?property=image.image&locale=de");
}

function setup() {
  image(img);
}

function draw() {

}
