var img;

function preLoad() {
  img = loadJSON("http://faker.hook.io?property=name.findName&locale=de");
}

function setup() {
  text(img);
}

function draw() {

}
