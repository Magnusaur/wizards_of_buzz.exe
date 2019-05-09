var loaded; //Det indlæste billede til brug i objekt
var Img = []; //Array for billede-objekter
var counter = 0; //Denne counter kontrollerer, hvilket billede, der skal indlæses og placeres i et objekt.

//Værdier til objektstørrelse/alfa
var xPs = 0; //Startkoordinat for billede; værdierne ændres i løbet af koden
var yPs = 0; //Startkoordinat for billede; værdierne ændres i løbet af koden
var alf = 0; //alpha-værdi til brug ved sløring

var button;
var bool = false; //denne aktiverer sløring af billeder ved "true"
var bool2 = false; //denne aktiverer at tegne billeder "ved true"
var bool3 = false; //dene aktiverer at tegne billeder (eller tegne loading-symbol) ved indlæsning af et nyt billede, så det ikke bliver ved med at loope, ved "true".
//bool2 og bool3 skal begge være true for at tegne billeder. Ved eksempelvis bool2 = false og bool3 = true muliggør vi at tegne loading-symbol i stedet for billeder (den regerer også på detect new image)

//Variabler til at tegne loading-symbol
var cloud;
var startPointX;
var startPointY;

p5.disableFriendlyErrors = false; //disables FES
// var socket;

function setup() {
  canvas = createCanvas(windowWidth, 10000);
  canvas.position(0,0);
  frameRate(8); //Kontrollerer hastighed
  cloud = loadImage('cloud.png');

  // socket = io.connect('http://localhost:8200')

  button = createButton('Press me');
  button.addClass('btn');
  button.mousePressed(initiate);

  takeSnap(counter); //programmet begynder fra start at indlæse nye billeder, som dukker op i directory. Uden brugerinput.
}

function initiate() {
  background(255);
  button.hide();
  alf = 0
  bool = false //Bruger har klikket på press me, så det må ikke sløres
  bool2 = true //Bruger har klikket på press me, så billederne skal tegnes
  bool3 = true //Bruger har klikket på press me, så billederne skal tegnes når et nyt billede dukker op

  setTimeout(function() { //Knappen skal først dukke op efter 7 sekunder
    button = createButton('Delete data');
    button.addClass('btn');
    button.mousePressed(wipeOut);
  }, 7000.5);
}

function wipeOut() {
    button.hide();
    bool = true //Billeder stopper med at blive tegnet og sletfasen begynder
    bool2 = false;
}


function takeSnap(i) {

  loaded = loadImage('media/prototype ('+(i+1)+').jpg', loadSucces, loadFail); //Udvælger billede fra folder på pc; alternerer ud fra "counter"
// loaded = loadImage('https://raw.githubusercontent.com/Magnusaur/wizards_of_buzz.exe/master/Interaktionsdesign_2/Code/Sockets_in/public/media/prototype ('+(i+1)+').jpg', loadSucces, loadFail); //Udvælger billede fra folder på pc; alternerer ud fra "counter"

  return loaded;
}

function loadSucces(img){
  let x = windowWidth/3
  let y = windowHeight/5

  Img.push(new Imgs(img, xPs, yPs, x, y)); //placerer billede i et objekt, som selv placeres i et array
  bool3 = true;

  console.log('succes');

  if ((xPs + x) > width-1) {
    xPs = 0;
    yPs += y;
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
      rect(windowWidth/2, windowHeight/2, 350, 300);
      imageMode(CENTER);
      image(cloud, windowWidth/2, windowHeight/2, 340, 300);
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
      window.location.reload(true);
      // button = createButton('Press me');
      // button.addClass('btn');
      // button.mousePressed(initiate);
      // bool = false;
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
    }, 1000) //1 sekunder
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

    var div = createDiv();
    div.id('content' + frameCount);
    div.position(this.xPs,this.yPs);
    div.size(this.x, this.y);
    // div.hide()

    var elmnt = document.getElementById('content' + frameCount);
        elmnt.scrollIntoView(false);
        console.log('yay');
  }
}
