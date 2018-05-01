var profile;
var friend = [];
var suggested_friend = [];

function setup() {
  getData();
  readyProfile(firstName, lastName, country, street, city, zipCode, longitude, latitude, email, phone, job, profilePicture, hobbies[0], hobbies[1], hobbies[2]);
  displayProfile();

  // for(let i = 0; i < 6; i++) {
  //   let hobby[i] = random(hobbies);
  // }

  for(let i = 0; i < 6; i++) {
    getData();
    readyFriends(i, firstName, lastName, profilePicture);
    displayFriends(i);

    getData();
    readySuggestedFriends(i, firstName, lastName, profilePicture, hobby[i]);
    displaySuggestedFriends(i);
  }
}

function getData() {
  var firstName = faker.name.firstName();
  var lastName = faker.name.lastName();
  var country = faker.address.country();
  var street = faker.address.streetName();
  var city = faker.address.city();
  var zipCode = faker.address.zipCode();
  var longitude = faker.address.longitude();
  var latitude = faker.address.latitude();
  var email = faker.internet.email();
  var phone = faker.phone.phoneNumber();
  var job = faker.name.jobTitle();
  var profilePicture = faker.image.avatar();
  var hobbies = [random(2), random(1), random(2)]; //til Martin: Indsæt JSON-fil her
}

// function mousePressed() {
//   for(let i = 0; i < 6; i++) {
//     if() /*mus inden for "friends"*/ {
//       friend[i].createProfile();
//     }
//     if() mus inden for suggested_friend {
//       suggested_friend[i].createProfile();
//     }
//   }
// }

//Greg Grady #alwaysremember
