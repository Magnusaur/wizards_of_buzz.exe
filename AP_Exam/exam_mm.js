

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
var profilePicture = faker.image.image();

function preLoad() {
  createImage(profilePicture, 0, 0);
}




function setup() {
  createCanvas(500, 500);
  text(lastName, 100, 40);
  text(firstName, 100, 60);
  text(country, 100, 100);
  text(street, 100, 120);
  text(city, 100, 140);
  text(zipCode, 100, 160);
  text(longitude, 100, 180);
  text(latitude, 100, 200);
  text(email, 100, 220);
  text(phone, 100, 240);
  text(job, 100, 260);


}



//this.f_name = f_name;
//this.l_name = l_name;
//this.birthday = birthday;
//this.country = country;
//this.street = street;
//this.city = city;
//this.zipCode = zipCode;
//this.longitude = longitude;
//this.latitude = latitude;
//this.email = email;
//this.phone = phone;
//this.job = job;
//this.profile_picture = profile_picture;
