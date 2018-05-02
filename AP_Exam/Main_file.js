var profile;
var friend = [];
var suggested_friend = [];


function preload() {
  Music = loadJSON('Music.json');
  Activities = loadJSON('Activities.json');
  Movies = loadJSON('movies.json');
  hobbies = loadJSON('movies.json', 'Activities.json', 'Music.json');

}

function setup() {
  getData();
  readyProfile(firstName, lastName, birthdayMonth, country, street, city, zipCode, longitude, latitude, email, phone, job, profilePicture);
  displayProfile();

  // for(let i = 0; i < 6; i++) {
  //   let hobby[i] = random(hobbies);
  // }

  for(let i = 0; i < 6; i++) {
    getData();
    readyFriends(i, firstName, lastName, profilePicture);
    displayFriends(i);

    getData();
    readySuggestedFriends(i, firstName, lastName, profilePicture); //Hobby mangler
    displaySuggestedFriends(i);
  }
}

function getData() {
  firstName = faker.name.firstName();
  lastName = faker.name.lastName();
  birthdayMonth = faker.date.month();
  country = faker.address.country();
  street = faker.address.streetName();
  city = faker.address.city();
  zipCode = faker.address.zipCode();
  longitude = faker.address.longitude();
  latitude = faker.address.latitude();
  email = faker.internet.email(); //birthday mangler
  phone = faker.phone.phoneNumber();
  job = faker.name.jobTitle();
  profilePicture = faker.image.avatar();
  hobbies = [random(2), random(1), random(2)];
}
//
// // function mousePressed() {
// //   for(let i = 0; i < 6; i++) {
// //     if() /*mus inden for "friends"*/ {
// //       friend[i].createProfile();
// //     }
// //     if() mus inden for suggested_friend {
// //       suggested_friend[i].createProfile();
// //     }
// //   }
// // }
//
// //Greg Grady #alwaysremember

function readyProfile(firstName, lastName, birthdayMonth, country, street, city, zipCode, longitude, latitude, email, phone, job, profilePicture) {
  profile = new profiles(
    firstName,
    lastName,
    birthdayMonth,
    country,
    street,
    city,
    zipCode,
    longitude,
    latitude,
    email,
    phone,
    job,
    profilePicture,
  )
}

function displayProfile() {
  profile.displayName(10, 10, 200, 100);
  profile.displayBirthday(10, 10, 900, 400);
  profile.displayAvatar(100, 100, 100, 100);
  profile.displayProfession(10, 10, 300, 100);
  profile.displayLocation(10, 10, 400, 100, 450, 100, 500, 100, 550, 100);
  profile.displayContact(10, 10, 600, 100, 700, 100);
// profile.displayHobbies(10, 10, 700, 100, 720, 100, 740, 100);
}


function readyFriends(i, firstName, lastName, profilePicture) {
  friend[i] = new friends(
    firstName,
    lastName,
    profilePicture
  )
}

function displayFriends(i) {
  friend[i].displayAvatar(50, 50, 100+i*10, 300);
  friend[i].displayName(50, 50, 200+i*10, 300);
}


function readySuggestedFriends(i, firstName, lastName, profilePicture) { //hobby mangler
  suggested_friend[i] = new suggested_friends(
    firstName,
    lastName,
    profilePicture,
  ) //hobby mangler
}

function displaySuggestedFriends(i) {
  suggested_friend[i].displayAvatar(10, 10, 500+10*i, 300);
  suggested_friend[i].displayName(10, 10, 500+10*i, 300);
  // suggested_friend[i].displayHobby(10, 10, 300, 300);
}
