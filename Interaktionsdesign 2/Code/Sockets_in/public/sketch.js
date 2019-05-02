var loaded;
var Img = []; //Array for billede-objekter
var xPs = 0; //Startkoordinat for billede; værdierne ændres i løbet af koden
var yPs = 0; //Startkoordinat for billede; værdierne ændres i løbet af koden
var counter = 0; //Denne counter kontrollerer, hvilket billede, der skal indlæses og placeres i et objekt.
var button;
var button2;
var bool = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(8); //Kontrollerer hastighed
  button2 = createButton('Press me');
  button2.mousePressed(initiate);


  // takeSnap(counter);
}

function initiate() {
  clear()
  bool = true

  button = createButton('Stop denne galskab');
  button.mousePressed(wipeOut);
}

function takeSnap(i) {
  loaded = loadImage('Media/prototype ('+(i+1)+').jpg', loadSucces, loadFail); //Udvælger billede fra folder på pc; alternerer ud fra "counter"
  return loaded;
}

function loadSucces(img){
  Img.push(new Imgs(img)); //placerer billede i et objekt, som selv placeres i et array

  console.log('succes');

  let x = windowWidth/5
  let y = windowHeight/4
  for(let i = 0; i < Img.length; i++) {
    Img[i].display(xPs, yPs, x, y);
  }
  if ((xPs + x) > width-1) {
    xPs = 0;
    yPs += y;
  } else {

    xPs += x
  }
}

function loadFail(){
  counter--;
  if(counter < 0){
    counter = 0;
  }
  console.log('fail');
}

function draw() {
/*  let x = windowWidth/5
  let y = windowHeight/4
  for(let i = 0; i < Img.length; i++) {
    Img[i].display(xPs, yPs, x, y);
  }
  if ((xPs + x) > width-1) {
    xPs = 0;
    yPs += y;
  } else {

    xPs += x
  }
*/
  if(bool == true) {
    counter++ //counter stiger
    takeSnap(counter);
  }
}

class Imgs {
  constructor(loaded) {
    this.loaded = loaded;
  }

  display(xPs, yPs, x, y) {
    this.xPs = xPs; //startposition
    this.yPs = yPs;
    this.x = x; //størrelse på billede
    this.y = y;

    image(loaded, this.xPs, this.yPs, this.x, this.y);
  }
}

function wipeOut() {
 background(255);
 noloop();
}
