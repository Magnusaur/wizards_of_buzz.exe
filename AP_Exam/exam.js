var randomName;
var randomAddress;

function preLoad() {

}

function setup() {
  createCanvas(600, 400);
  faker.locale = "it";
  randomName = faker.fake("{{name.firstName}} {{name.lastName}}, {{internet.userName}}");
  randomAddress = faker.address.city();
  console.log(randomName);
  textSize(20, 10);
  text(randomName, 5, 100);
  text(randomAddress, 5, 150);
}


function draw() {
}
//Greg Grady #alwaysremember


// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <script src="../addons/p5.min.js"></script>
//   <script src="../addons/p5.dom.min.js"></script>
//   <script src="../addons/p5.sound.min.js"></script>
//   <script src="../addons/faker.js-master/build/build/faker.min.js" type="text/javascript"></script>
//   <script src="profile.js"></script>
//   <script src="exam.js"></script>
//   <title>Document</title>
// </head>
// <body>
//
// </body>
// </html>
