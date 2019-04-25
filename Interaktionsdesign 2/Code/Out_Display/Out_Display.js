var loaded;
var Img = []; //Array for billede-objekter
var xPs = 0; //Startkoordinat for billede; værdierne ændres i løbet af koden
var yPs = 0; //Startkoordinat for billede; værdierne ændres i løbet af koden
var counter = 0; //Denne counter kontrollerer, hvilket billede, der skal indlæses og placeres i et objekt.

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1); //Kontrollerer hastighed


  takeSnap(counter);
}

function takeSnap(i) {
  loaded = loadImage('prototype ('+(i+1)+').jpg'); //Udvælger billede fra folder på pc; alternerer ud fra "counter"
  Img.push(new Imgs(loaded)); //placerer billede i et objekt, som selv placeres i et array
}


function draw() {
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

  counter++ //counter stiger
  takeSnap(counter)
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
