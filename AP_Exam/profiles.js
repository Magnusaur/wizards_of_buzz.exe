//For future revision: vi kan yderligere abstrahere og lave "globale funktioner", fx displayName, fordi alle classes bruger en displayName.
var firstName;
var lastName;
var country;
var street;
var city;
var zipCode;
var longitude;
var latitude;
var email;
var phone;
var job;
var profilePicture;
var hobbies = [];
var birthdayMonth;

class profiles {
  constructor(f_name, l_name, birthdayMonth, country, street, city, zipCode, longitude, latitude, email, phone, job, profile_picture, hobby1, hobby2, hobby3) { //hobby og f'dselsdag mangler
    this.f_name = f_name;
    this.l_name = l_name;
    this.birthdayMonth = birthdayMonth;
    this.country = country;
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
    this.longitude = longitude;
    this.latitude = latitude;
    this.email = email;
    this.phone = phone;
    this.job = job;
    this.profile_picture = profile_picture;
    this.hobby1 = hobby1;
    this.hobby2 = hobby2;
    this.hobby3 = hobby3;
  }

  displayName(szX, szY, x, y) {
    let tekst = createElement('h2',this.f_name + " " + this.l_name);
    tekst.size(szX, szY);
    tekst.position(x, y);
  }

  displayBirthday(szX, szY, x, y) {
    let tekst = createP(floor(random(1,31)) + " " + this.birthdayMonth + ", 19" + floor(random(65,99)));
    tekst.size(szX, szY);
    tekst.position(x, y);
  }

  displayProfession(szX, szY, x, y) {
    let tekst = createP(this.job);
    tekst.size(szX, szY);
    tekst.position(x, y);
  }

  displayLocation(szX, szY, llX, llY, strX, strY, cityX, cityY, countryX, countryY) {
    let tekst1 = createP(this.longitude + " " + this.latitude);
    tekst1.size(szX, szY);
    tekst1.position(llX, llY);

    let tekst2 = createP(this.street);
    tekst2.size(szX, szY);
    tekst2.position(strX, strY);

    let tekst3 = createP(this.zipCode + " " + this.city);
    tekst3.size(szX, szY);
    tekst3.position(cityX, cityY);

    let tekst4 = createP(this.country);
    tekst4.size(szX, szY);
    tekst4.position(countryX, countryY);
  }

  displayContact(szX, szY, eX, eY, phX, phY) {
    let tekst1 = createP(this.email);
    tekst1.size(szX, szY);
    tekst1.position(eX, eY);

    let tekst2 = createP(this.phone);
    tekst2.size(szX, szY);
    tekst2.position(phX, phY);
  }

  displayAvatar(szX, szY, x, y) {
    let img = createImg(this.profile_picture);
    img.size(szX, szY);
    img.position(x, y);
      img.style("padding","0px");
      img.style("border","5px solid #fff");
  }

  displayHobbies(szX, szY, x1, y1, x2, y2, x3, y3) {
    let tekst1 = createP(this.hobby1);
    tekst1.size(szX, szY);
    tekst1.position(x1, y1);

    let tekst2 = createP(this.hobby2);
    tekst2.size(szX, szY);
    tekst2.position(x2, y2);

    let tekst3 = createP(this.hobby3);
    tekst3.size(szX, szY);
    tekst3.position(x3, y3);
  }
}
