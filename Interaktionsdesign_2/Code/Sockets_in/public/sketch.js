var loaded; //Det indlæste billede til brug i objekt
var Img = []; //Array for billede-objekter
var counter = 0; //Denne counter kontrollerer, hvilket billede, der skal indlæses og placeres i et objekt.

// var counter2 = 0;
// var div = [];

//Værdier til objektstørrelse/alfa
var xPs = 0; //Startkoordinat for billede; værdierne ændres i løbet af koden
var yPs = 0; //Startkoordinat for billede; værdierne ændres i løbet af koden
var alf = 0; //alpha-værdi til brug ved sløring

var button;
var bool = false; //denne aktiverer sløring af billeder ved "true"
var bool2 = false; //denne aktiverer at tegne billeder "ved true"
var bool3 = true; //dene aktiverer at tegne billeder (eller tegne loading-symbol) ved indlæsning af et nyt billede, så det ikke bliver ved med at loope, ved "true".
//bool2 og bool3 skal begge være true for at tegne billeder. Ved eksempelvis bool2 = false og bool3 = true muliggør vi at tegne loading-symbol i stedet for billeder (den regerer også på detect new image)
var bool4 = true;
var bool5 = false;

//Variabler til at tegne loading-symbol
var cloud;
var startPointX;
var startPointY;


p5.disableFriendlyErrors = false; //disables FES
 //var socket;


function setup() {
  createCanvas(windowWidth, 5000);
  frameRate(8); //Kontrollerer hastighed
  cloud = loadImage('cloud.png');

  // socket = io.connect('http://localhost:8200')

  takeSnap(counter); //programmet begynder fra start at indlæse nye billeder, som dukker op i directory. Uden brugerinput.
}


//BUTTON FUNCTIONALITY
function initiate() {
  background(255);
  button.hide();
  alf = 0
  bool = false;
  bool2 = true; //Bruger har klikket på press me, så billederne skal tegnes
  bool3 = true; //Bruger har klikket på press me, så billederne skal tegnes når et nyt billede dukker op
  bool4 = false;


  setTimeout(function() { //Knappen skal først dukke op efter 7 sekunder
    //knap til slet
    button = createButton('Delete');
    button.addClass('btn_delete');
    button.mousePressed(wipeOut);

    //knap til downLoad
    button2 = createButton('Download');
    button2.addClass('btn_download');
    button2.mousePressed(downLoad);
  }, 7000);
}

function wipeOut() {
    button.hide();
    button2.hide();
    bool = true; //Billeder stopper med at blive tegnet
    bool2 = false; //sletfasen begynder
}

function downLoad() {
    bool2 = false;
    let i = 0;
    var intervalId = setInterval(function() {
      if(i == 30) { //max 30 pictures to avoid overload
        setTimeout(function() {
          window.open('https://infoboks.herokuapp.com/');
        }, 2500);
        clearInterval(intervalId);
      }

      save(Img[i].loaded, 'nowYourData('+i+').jpg');
      i++
    }, 100) //0.5 sekunder
}



//LOADING PICTURES
function takeSnap(i) {
  setTimeout(function() {
    loaded = loadImage('media/prototype ('+(i+1)+').jpg', loadSucces, loadFail); //Udvælger billede fra folder på pc; alternerer ud fra "counter"
  }, 250);

  return loaded;
}

function loadSucces(img){
  if (bool5 == false) { //button appears only when there are pics loaded
    button = createButton('Press me');
    button.addClass('btn_press_me');
    button.mousePressed(initiate);
  //  button.position(windowWidth/2);
    bool5 = true;
  }

  let x = windowWidth/3
  let y = windowHeight/5

  Img.push(new Imgs(img, xPs, yPs, x, y-15)); //placerer billede i et objekt, som selv placeres i et array
  bool3 = true;

  console.log('succes');

  if ((xPs + x) > width-1) {
    xPs = 0;
    yPs += y-15;
    // counter2++
  } else {
    xPs += x
  }

  counter++ //counter stiger
  takeSnap(counter); //processen kører i ring
}

function loadFail(){
  console.log('fail');
  takeSnap(counter); //processen kører i ring
}




//DRAW LOADING MARK, BACKGROUND BLUR, OR PICTURES
function draw() { //Kassen tegnes i begyndelsen og farven bestemmes om et billede er indlæst (rød) eller ej (grøn).
  if (bool == false && bool2 == false && bool4 == true) {
    push();
    if(bool3 == true) {
      fill(255, 0, 0);
    } else if (bool3 == false) {
      fill(90, 255, 70);
    } rectMode(CENTER);
      rect(windowWidth/2, windowHeight/2, 250, 300);
      imageMode(CENTER);
      image(cloud, windowWidth/2, windowHeight/2, 240, 300);
      fill(0);
      startPointX = windowWidth/2;
      startPointY = windowHeight/2;
      if (bool3 == true) {
        loadingMark1(startPointX, startPointY);
        loadingMark2(startPointX, startPointY);
      }
      pop();
  }
  if (bool == true) { //sløring af billeder
    if (alf == 150) {
      clear();
      bool = false;
      setTimeout(function() {
        window.open('https://infoboks.herokuapp.com/');
      }, 2500)
      setTimeout(function() {
        window.location.reload(true);
      }, 5000)
      // button = createButton('Press me');
      // button.addClass('btn');
      // button.mousePressed(initiate);
    } else {
      background(255, alf);
      alf += 10
    }
  }
  if (bool2 == true && bool3 == true) { //billeder tegnes
    let i = 0;
    var intervalId = setInterval(function() { //billeder er allerede indlæst, men funktionen her sørger for at tegne dem tidsforskudt for hinanden
      if(i == Img.length || bool2 == false) {
        i-- //SLET IGEN
        clearInterval(intervalId);
      }

      Img[i].display();
      i++
    }, 500) //0.5 sekunder
  }
  bool3 = false;
}


//SPECIFICATION FOR LOADING MARK

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



//CLASS
class Imgs {
  constructor(loaded, xPs, yPs, x, y) {
    this.loaded = loaded;
    this.xPs = xPs; //startposition
    this.yPs = yPs;
    this.x = x; //størrelse på billede
    this.y = y;
    // this.counter2 = counter2;
  }

  display() {
    image(this.loaded, this.xPs, this.yPs, this.x, this.y);

    // if (this.xPs == 0 && ) {
    //   div[this.counter2] = createDiv();
    //   div[this.counter2].id('content' + this.counter2);
    //   div[this.counter2].position(this.xPs,this.yPs+offset);
    //   div[this.counter2].size(this.x, this.y);
    //   div[this.counter2].style('display', 'none');
    //   div[this.counter2].show();
    //   var elmnt = document.getElementById('content' + this.counter2); //KAN IKKE FAA DET TIL AT VIRKE
    //       elmnt.scrollIntoView(false);
    //       console.log('yay');
    // }

    //Den tegnes jo gentagende gange i forrige loop. Alle der går op i tre (selv dem der har været tegnet, vil kræve scrollIntoView igen
    // if (this.i % 3 === 0) { //Modolo her virker nærmest således (i divideret med 3 og så "return remainder". Hvis remainder er 0, så går tallet op i tre-tabel, og det kan bruges her, hvor scroll skal følge hver skift i række (hvilket er efter hver tredje billede).

    // }
  }
}
