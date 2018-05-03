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
  //Header, Banner, Avatar
  noCanvas();
  h1 = createElement('h1', 'Lifewaster.SoMe');
  h1.position(120,0);

  banner = createImg('https://www.samyakhospital.com/wp-content/uploads/2016/12/dbtreesPhotoxpress_9939515.jpg');
    banner.size(windowWidth,300);
    banner.position(0,50);

    //Id-pers
      h3 = createElement('h3', 'Content');
      h3.parent('Id-pers');

      var content = ['Job','Education','Birthday','Interests','Country','Street', 'City','zipCode','longitude','latitude','Email','Phone'];
      for (var i = 0; i < content.length; i++) {
        var li = createElement('li',content[i]);
        li.parent('Id-pers');
      }

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
  profile.displayName(400, 10, 350, 300);
  profile.displayBirthday(100, 10, 380, 350);
  profile.displayAvatar(200, 200, 120, 190);
  profile.displayProfession(10, 10, 300, 100);
  profile.displayLocation(10, 10, 400, 100, 450, 100, 500, 100, 550, 100);
  profile.displayContact(100, 10, 600, 100, 700, 100);
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
  friend[i].displayAvatar(60, 60, 700+i*80, 300);
  friend[i].displayName(10, 10, 710+i*80, 380);
}


function readySuggestedFriends(i, firstName, lastName, profilePicture) { //hobby mangler
  suggested_friend[i] = new suggested_friends(
    firstName,
    lastName,
    profilePicture,
  ) //hobby mangler
}

function displaySuggestedFriends(i) {
  suggested_friend[i].displayAvatar(50, 50, 830+70*i, 550);
  suggested_friend[i].displayName(50, 50, 830+70*i, 600);
  // suggested_friend[i].displayHobby(10, 10, 300, 300);
}
