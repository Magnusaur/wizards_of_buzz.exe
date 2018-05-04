var profile;
var friend = [];
var suggested_friend = [];


function preload() {
  Music = loadJSON('Music.json');
  Activities = loadJSON('Activities.json');
  Movies = loadJSON('movies.json');
}

function CSSSetup() {
  h1 = createElement('h1', 'Lifewaster.SoMe');
  h1.position(120,0);

  banner = createImg('https://www.samyakhospital.com/wp-content/uploads/2016/12/dbtreesPhotoxpress_9939515.jpg');
    banner.size(windowWidth,300);
    banner.position(0,50);
}



function setup() {
  //Header, Banner, Avatar
  CSSSetup();

  getData();
  getHobbies();
  readyProfile(firstName, lastName, birthdayMonth, country, street, city, zipCode, email, phone, job, profilePicture, hobbies[0], hobbies[1], hobbies[2]);
  displayProfile();

  for(let i = 0; i < 6; i++) {
    getData();
    readyFriends(i, firstName, lastName, profilePicture);
    displayFriends(i);

    getData();
    readySuggestedFriends(i, firstName, lastName, profilePicture, random(hobbies));
    displaySuggestedFriends(i);
  }
}


function draw() {
  console.log(mouseX, mouseY);
}

function getData() {
  firstName = faker.name.firstName();
  lastName = faker.name.lastName();
  birthdayMonth = faker.date.month();
  country = faker.address.country();
  street = faker.address.streetName();
  city = faker.address.city();
  zipCode = faker.address.zipCode();
  email = faker.internet.email();
  phone = faker.phone.phoneNumber();
  job = faker.name.jobTitle();
  profilePicture = faker.image.avatar();
}

function getHobbies() {
  hobbies = [Music[floor(random(0, 70))], Activities[floor(random(0, 70))], Movies[floor(random(0, 70))]]; //.length fungerer ikke
}

function mousePressed() {
  if(mouseX > -98 && mouseX < -33 && mouseY > -120 && mouseY < -55) {
    friend[0].createProfile();
  } else if(mouseX > -20 && mouseX < 45 && mouseY > -120 && mouseY < -55) {
    friend[1].createProfile();
  } else if(mouseX > 60 && mouseX < 125 && mouseY > -120 && mouseY < -55) {
    friend[2].createProfile();
  } else if(mouseX > 140 && mouseX < 205 && mouseY > -120 && mouseY < -55) {
    friend[3].createProfile();
  } else if(mouseX > 220 && mouseX < 285 && mouseY > -120 && mouseY < -55) {
    friend[4].createProfile();
  } else if(mouseX > 300 && mouseX < 365 && mouseY > -120 && mouseY < -55) {
    friend[5].createProfile();
  }

  if(mouseX > 710 && mouseX < 760 && mouseY > 132 && mouseY < 181) {
    suggested_friend[0].createProfile();
  } else if(mouseX > 780 && mouseX < 830 && mouseY > -65 && mouseY < -15) {
    suggested_friend[1].createProfile();
  } else if(mouseX > 850 && mouseX < 900 && mouseY > -65 && mouseY < -15) {
    suggested_friend[2].createProfile();
  } else if(mouseX > 920 && mouseX < 970 && mouseY > -65 && mouseY < -15) {
    suggested_friend[3].createProfile();
  } else if(mouseX > 990 && mouseX < 1040 && mouseY > -65 && mouseY < -15) {
    suggested_friend[4].createProfile();
  } else if(mouseX > 1060 && mouseX < 1110 && mouseY > -65 && mouseY < -15) {
    suggested_friend[5].createProfile();
  }
}


// //Greg Grady #alwaysremember


// function mouseHover() {
//   if() {
//     suggested_friend[i].displayHobby(10, 10, 100+100*i, 500);
//   }
// }


function readyProfile(firstName, lastName, birthdayMonth, country, street, city, zipCode, email, phone, job, profilePicture, hobby1, hobby2, hobby3) {
  profile = new profiles(
    firstName,
    lastName,
    birthdayMonth,
    country,
    street,
    city,
    zipCode,
    email,
    phone,
    job,
    profilePicture,
    hobby1,
    hobby2,
    hobby3
  )
}

function displayProfile() {
  profile.displayName(400, 10, 365, 280);
  profile.displayBirthday(100, 10, 351, 350);
  profile.displayAvatar(200, 200, 120, 190);
  profile.displayProfession(1000, 10, 300, 100);
  profile.displayLocation(1000, 10, 450, 100, 500, 100, 550, 100);
  profile.displayContact(1000, 10, 600, 100, 600, 150);
  profile.displayHobbies(1000, 10, 100, 500, 100, 550, 100, 600);
}




function readyFriends(i, firstName, lastName, profilePicture) {
  friend[i] = new friends(
    firstName,
    lastName,
    profilePicture
  )
}

function displayFriends(i) {
  friend[i].displayAvatar(60, 60, 700+i*80, 300);
  friend[i].displayName(10, 10, 710+i*80, 380);
}




function readySuggestedFriends(i, firstName, lastName, profilePicture, hobby) {
  suggested_friend[i] = new suggested_friends(
    firstName,
    lastName,
    profilePicture,
    hobby
  )
}

function displaySuggestedFriends(i) {
  suggested_friend[i].displayAvatar(50, 50, 830+70*i, 550);
  suggested_friend[i].displayName(50, 50, 830+70*i, 600);
}
