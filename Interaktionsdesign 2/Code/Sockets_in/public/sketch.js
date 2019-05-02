var loaded;
var Img = []; //Array for billede-objekter
var xPs = 0; //Startkoordinat for billede; værdierne ændres i løbet af koden
var yPs = 0; //Startkoordinat for billede; værdierne ændres i løbet af koden
var alf = 0;
var counter = 0; //Denne counter kontrollerer, hvilket billede, der skal indlæses og placeres i et objekt.
var button;
var button2;
var bool = false;
var bool2 = false;

function setup() {
  createCanvas(windowWidth, 5000);
  frameRate(8); //Kontrollerer hastighed
  button = createButton('Press me');
  button.addClass('btn');
  button.mousePressed(initiate);

  takeSnap(counter);
}

function initiate() {
  button2 = createButton('Stop denne galskab');
  button2.addClass('btn');
  button2.mousePressed(wipeOut);

  bool2 = true
}

function wipeOut() {
    bool = true
}


function takeSnap(i) {
  loaded = loadImage('media/prototype ('+(i+1)+').jpg', loadSucces, loadFail); //Udvælger billede fra folder på pc; alternerer ud fra "counter"
  return loaded;
}

function loadSucces(img){
  let x = windowWidth/5
  let y = windowHeight/4

  Img.push(new Imgs(img, xPs, yPs, x, y)); //placerer billede i et objekt, som selv placeres i et array   BRUG UNSHIFT METODE FOR AT VENDE DET OM

  console.log('succes');

  if ((xPs + x) > width-1) {
    xPs = 0;
    yPs += y;
  } else {
    xPs += x
  }

  counter++ //counter stiger
  takeSnap(counter);
}

function loadFail(){
  // counter--;
  // if(counter < 0){
  //   counter = 0;
  // }
  console.log('fail');
  takeSnap(counter);
}


function draw() {
  if (bool == true) {
    bool2 = false;
    if (alf == 255) {
      clear();
      noLoop();
    } else {
      background(255, alf);
      alf += 1
    }
  }
  if (bool2 == true) {
    let i = 0;
    var intervalId = setInterval(function() {
      if(i == Img.length) {
        i--
        clearInterval(intervalId);
      }
      Img[i].display();
      i++
    }, 60)
  }
}

// function draw() {
//   if (bool == true) {
//     if(alf == 255) {
//       clear();
//     } else {
//       background(255, alf);
//       alf += 1
//     }
//   }
// }




class Imgs {
  constructor(loaded, xPs, yPs, x, y) {
    this.loaded = loaded;
    this.xPs = xPs; //startposition
    this.yPs = yPs;
    this.x = x; //størrelse på billede
    this.y = y;
  }

  display() {
    image(this.loaded, this.xPs, this.yPs, this.x, this.y);
  }
}
