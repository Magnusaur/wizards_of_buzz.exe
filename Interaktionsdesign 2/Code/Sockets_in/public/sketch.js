var loaded;
var Img = []; //Array for billede-objekter

var xPs = 0; //Startkoordinat for billede; værdierne ændres i løbet af koden
var yPs = 0; //Startkoordinat for billede; værdierne ændres i løbet af koden
var alf = 0; //alpha-værdi til brug ved sløring
var counter = 0; //Denne counter kontrollerer, hvilket billede, der skal indlæses og placeres i et objekt.
var counter2 = 1 //Denne counter kontrollerer at canvas bliver større i windowsResized.

var button;
var bool = false; //to boolean values styrer forløbet ved klik på knap.
var bool2 = false;
var bool3 = false;

var cloud;
var startPointX;
var startPointY;

// var socket;

function setup() {
  createCanvas(windowWidth, 5000);
  frameRate(8); //Kontrollerer hastighed
  cloud = loadImage('cloud.png');


  // socket = io.connect('http://localhost:8200')

  button = createButton('Press me');
  button.addClass('btn');
  button.mousePressed(initiate);

  takeSnap(counter); //programmet begynder fra start at indlæse nye billeder, som dukker op i directory. Uden brugerinput.
}

function initiate() {
  button.hide();
  alf = 0
  bool = false
  bool2 = true //Billeder bliver nu tegnet i draw ved klik på "press me"
  bool3 = true

  setTimeout(function() { //Knappen skal først dukke op efter 7 sekunder
    button = createButton('Delete data');
    button.addClass('btn');
    button.mousePressed(wipeOut);
  }, 7000.5);
}

function wipeOut() {
    bool = true //Billeder stopper med at blive tegnet og sletfasen begynder
    bool2 = false;
}


function takeSnap(i) {
  //loaded = loadImage('https://github.com/Magnusaur/wizards_of_buzz.exe/blob/master/Interaktionsdesign%202/Code/Sockets_in/public/media/prototype%20 ('+(i+1)+').jpg', loadSucces, loadFail); //Udvælger billede fra folder på pc; alternerer ud fra "counter"
  loaded = loadImage('media/prototype ('+(i+1)+').jpg', loadSucces, loadFail); //Udvælger billede fra folder på pc; alternerer ud fra "counter"
  return loaded;
}

function loadSucces(img){
  let x = windowWidth/5
  let y = windowHeight/4

  Img.unshift(new Imgs(img, xPs, yPs, x, y)); //placerer billede i et objekt, som selv placeres i et array
  bool3 = true;

  console.log('succes');

  if ((xPs + x) > width-1) {
    xPs = 0;
    yPs += y;
    // windowResized();
  } else {
    xPs += x
  }

  counter++ //counter stiger
  takeSnap(counter); //processen kører i ring
}

function loadFail(){
  // counter--;
  // if(counter < 0){
  //   counter = 0;
  // }
  console.log('fail');
  takeSnap(counter); //processen kører i ring
}


function draw() { //Kassen tegnes i begyndelsen og farven bestemmes om et billede er indlæst (rød) eller ej (grøn).
  if (bool == false && bool2 == false) {
    push();
    if(bool3 == true) {
      fill(255, 0, 0);
    } else if (bool3 == false) {
      fill(90, 255, 70);
    } rectMode(CENTER);
      rect(windowWidth/2, windowHeight/2, 250, 200);
      imageMode(CENTER);
      image(cloud, windowWidth/2, windowHeight/2, 240, 200);
      fill(0);
      startPointX = windowWidth/2;
      startPointY = windowHeight/2;
      if (bool3 == true) {
        loadingMark1(startPointX, startPointY);
        loadingMark2(startPointX, startPointY);
      } else if (bool3 == false) {
        checkMark(startPointX, startPointY);
      }
      pop();
  }
  if (bool == true) { //sløring af billeder
    if (alf == 150) {
      clear();
      button = createButton('Press me');
      button.addClass('btn');
      button.mousePressed(initiate);
      bool = false;
    } else {
      background(255, alf);
      alf += 10
    }
  }
  if (bool2 == true && bool3 == true) { //billeder tegnes
    let i = 0;
    var intervalId = setInterval(function() { //billeder er allerede indlæst, men funktionen her sørger for at tegne dem tidsforskudt for hinanden
      if(i == Img.length || bool2 == false) {
        i--
        clearInterval(intervalId);
      }
      Img[i].display();
      i++
    }, 100) //0.06 sekunder
  }
  bool3 = false;
}

function checkMark(pointX, pointY) {
  pointX = pointX - 25;
  pointY = pointY + 15;
  beginShape();
  vertex(pointX, pointY);
  vertex(pointX + 10, pointY);
  vertex(pointX + 20, pointY + 20);
  vertex(pointX + 55, pointY - 35);
  vertex(pointX + 65, pointY - 35);
  vertex(pointX + 20, pointY + 40);
  vertex(pointX, pointY);
  endShape(CLOSE);
}

function loadingMark1(pointX, pointY) {
  beginShape();
  pointY = pointY + 20;
  vertex(pointX + 40, pointY + 10);
  vertex(pointX + 50, pointY + 10);
  vertex(pointX + 50, pointY - 30);
  vertex(pointX - 20, pointY - 30);
  vertex(pointX - 20, pointY - 35);
  vertex(pointX - 30, pointY - 25);
  vertex(pointX - 20, pointY - 15);
  vertex(pointX - 20, pointY - 20);
  vertex(pointX + 40, pointY - 20);
  vertex(pointX + 40, pointY + 10);
  endShape(CLOSE);
}

function loadingMark2(pointX, pointY) {
  beginShape();
  pointY = pointY + 20;
  vertex(pointX - 40, pointY - 10);
  vertex(pointX - 50, pointY - 10);
  vertex(pointX - 50, pointY + 30);
  vertex(pointX + 20, pointY + 30);
  vertex(pointX + 20, pointY + 35);
  vertex(pointX + 30, pointY + 25);
  vertex(pointX + 20, pointY + 15);
  vertex(pointX + 20, pointY + 20);
  vertex(pointX - 40, pointY + 20);
  vertex(pointX - 40, pointY - 10);
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight + windowHeight/4*counter2);
  counter2++
}




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
