class profile {
  constructor(f_name, l_name, birthday, country, street, city, zipCode, longitude, latitude, email, phone, job, profile_picture) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.birthday = birthday;
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
  }

  displayName(sz, ft, x, y) {
    textSize(sz);
    textFont(ft);
    text(this.f_name this.l_name, x, y);
  }

  displayBirthday(sz, ft, x, y) {
    textSize(sz);
    textFont(ft);
    text(this.birthday, x, y);
  }

  displayProfession(sz, ft, x, y) {
    textSize(sz);
    textFont(ft);
    text(this.job, x, y);
  }

  displayLocation(sz, ft, llx, lly, strx, stry, cityx, cityy, countryx, countryy) {
    textSize(sz);
    textFont(ft);
    text(this.longitude this.latitude, llx, lly);
    text(this.street, strx, stry);
    text(this.zipCode this.city, cityx, cityy);
    text(this.country, countryx, countryy);
  }

  displayContact(sz, ft, eX, eY, phX, phY) {
    textSize(sz);
    textFont(ft);
    text(this.email, eX, eY);
    text(this.phone, phX, phY);
  }

  displayAvatar(x, y, szX, szY) {
    image(this.profile_picture, x, y, szX, szY);
  }
}

//Often the claims made by OO are hidden because they seem so arbitrary and like something we take for granted.
//Here we have defined a perceptual distinction between the self and others on a computational level, where perception becomes "real".
class friend {
  constructor(f_name, l_name, profile_picture) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.profile_picture = profile_picture;
  }

  displayAvatar(x, y, szX, szY) {
    image(this.profile_picture, x, y, szX, szY);
  }

  displayName(sz, ft, x, y) {
    textSize(sz);
    textFont(ft);
    text(this.f_name this.l_name, x, y);
  }

  //Her skal en funktion indføres. Funktionen vil blive aktiveret, hvis man klikker sig ind på vennens profil. Data fra "friend" skal danne grobund for en ny "profile".
  //Denne "profile" skal erstatte den nuværende profil og dermed foregive, at man har "klikket sig ind på vennens profil".
}
