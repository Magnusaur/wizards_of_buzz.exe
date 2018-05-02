function preload() {
  Music = loadJSON('Music.json');
  Activities = loadJSON('Activities.json')
  Movies = loadJSON('Movies.json')
}

function setup() {
  createCanvas(500,500);
  background(255);

  for (let i = 0; i < 1; i++) {
    let numberMusic = floor(random(0, 70));
    displaymusic = text(Music[numberMusic], 100,random(50,450));
    }

  for (let i = 0; i < 1; i++) {
  let numberActivities = floor(random(0,70));
  displayactivities = text(Activities[numberActivities], 100,random(50,450));
  }

  for (let i = 0; i < 1; i++) {
  let numberMovies = floor(random(0,70));
  displaymovies = text(Movies[numberMovies], 100,random(50,450));
  }
}

function draw() {
}
