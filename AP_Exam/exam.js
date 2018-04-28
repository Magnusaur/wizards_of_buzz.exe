var img;

function preLoad() {
  img = loadJSON("https://faker.hook.io?property=name.findName&locale=de");
}

function setup() {
  text(img);
}

function draw() {

}
