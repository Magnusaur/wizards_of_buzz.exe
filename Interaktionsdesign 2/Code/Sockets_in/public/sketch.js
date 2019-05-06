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

var socket;

function setup() {
  createCanvas(windowWidth, 5000);
  frameRate(8); //Kontrollerer hastighed

  socket = io.connect('http://localhost:8200')

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
  loaded = loadImage('media/prototype ('+(i+1)+').jpg', loadSucces, loadFail); //Udvælger billede fra folder på pc; alternerer ud fra "counter"
  return loaded;
}

function loadSucces(img){
  let x = windowWidth/5
  let y = windowHeight/4

  Img.push(new Imgs(img, xPs, yPs, x, y)); //placerer billede i et objekt, som selv placeres i et array
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


function draw() {
  if (bool == true) { //sløring af billeder
    if (alf == 150) {
      clear();
      button = createButton('Press me');
      button.addClass('btn');
      button.mousePressed(initiate);
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
