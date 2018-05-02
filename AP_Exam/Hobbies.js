


function preload() {
  Music = loadJSON('Music.json');
  Activities = loadJSON('Activities.json')
  Movies = loadJSON('movies.json')
  hobbies = loadJSON['movies.json', 'Activities.json', 'Music.json'] // hvorfor er den ikke blau?
}

function setup() {
  createCanvas(500,500);
  background(49);

  let numberActivities = floor(random(0,44));

  let numberhobbies = floor(random(0,3));
    var hobbynumber = floor(random(1,4));

    if (hobbynumber == 1) {
      for (let i = 0; i < 3; i++) {
let numberMusic = floor(random(0, 70));
      displaymusic = text(Music[numberMusic], 100,random(50,450));
      }
  }
  if (hobbynumber == 2) {
      for (let i = 0; i < 3; i++) {
let numberActivities = floor(random(0,70));
    displayactivities = text(Activities[numberActivities], 100,random(50,450));

   }
}
   if (hobbynumber == 3) {
       for (let i = 0; i < 3; i++) {
      let numberMovies = floor(random(0,70));
     displaymovies = text(Movies[numberMovies], 100,random(50,450));
      }
}

  console.log(hobbynumber);






}

function draw() {

}
