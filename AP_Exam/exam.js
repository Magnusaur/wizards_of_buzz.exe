// var randomName;
// var randomAddress;

function setup() {
  // createCanvas(600, 400);
  // faker.locale = "it";
  // randomName = faker.fake("{{name.firstName}} {{name.lastName}}, {{internet.userName}}");
  // randomAddress = faker.address.city();
  // console.log(randomName);
  // textSize(20, 10);
  // text(randomName, 5, 100);
  // text(randomAddress, 5, 150);


  //Mark: Jeg har indsat funktionerne her, der bruger data fra query sammen med profil-class for at fungere.
  //Note: Der skal indføres ordentlige argumenter i parenteserne.
  // "Object" is temporary btw

  object.displayName();
  object.displayAvatar();
  object.displayBirthday();
  object.displayProfession();
  object.displayLocation();
  object.displayContact();

  for(let i = 0; i < 6; i++) {
    friend[i].displayAvatar();
    friend[i].displayName();
    friend[i].displayCommonInterest();
  }
}

function mousePressed() {
  for(let i = 0; i < 6; i++) {
    if() /*mus inden for "friends"*/ {
      friend[i].createProfile();
    }
  }
}


function draw() {
}
//Greg Grady #alwaysremember
