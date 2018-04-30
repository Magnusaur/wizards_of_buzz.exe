class profiles {
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

    //Common interests: nogle klassificeringer der kan bruges i "forbindelsen mellem venner"
  }

  displayName(szX, szY, x, y) {
    let tekst = createP(this.f_name" "this.l_name);
    tekst.size(szX, szY);
    tekst.position(x, y);
  }

  displayBirthday(szX, szY, x, y) {
    let tekst = createP(this.birthday);
    tekst.size(szX, szY);
    tekst.position(x, y);
  }

  displayProfession(szX, szY, x, y) {
    let tekst = createP(this.job);
    tekst.size(szX, szY);
    tekst.position(x, y);
  }

  displayLocation(szX, szY, llX, llY, strX, strY, cityX, cityY, countryX, countryY) {
    let tekst1 = createP(this.longitude" "this.latitude);
    tekst1.size(szX, szY);
    tekst1.position(llX, llY);

    let tekst2 = createP(this.street);
    tekst2.size(szX, szY);
    tekst2.position(strX, strY);

    let tekst3 = createP(this.zipCode" "this.city);
    tekst3.size(szX, szY);
    tekst3.position(cityX, cityY);

    let tekst4 = createP(this.country);
    tekst4.size(szX, szY);
    tekst4.position(countryX, countryY);
  }

  displayContact(szX, szY, eX, eY, phX, phY) {
    let tekst1 = createP(this.email);
    tekst.size(szX, szY);
    tekst.position(eX, eY);

    let tekst2 = createP(this.phone);
    tekst2.size(szX, szY);
    tekst2.position(phX, phY);
  }

  displayAvatar(szX, szY, x, y) {
    let img = createImg(this.profile_picture);
    img.size(szX, szY);
    img.position(x, y);
  }
}

//Often the claims made by OO are hidden because they seem so arbitrary and like something we take for granted.
//Here we have defined a perceptual distinction between the self and others on a computational level, where perception becomes "real".
class friends {
  constructor(f_name, l_name, profile_picture, commonInterest) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.profile_picture = profile_picture;
    this.commonInterest = commonInterest;
    //måske flere interesser, der kan udvælges random? Placer interesser i array og lav en tilfældighedsudplukning fra den.
    //Evt. lav en random(floor) for hvor mange interesser, der kan hentes
  }

  displayAvatar(szX, szY, x, y) {
    let img = createImg(this.profile_picture);
    img.size(szX, szY);
    img.position(x, y);

  displayName(szX, szY, x, y) {
    let tekst = createP(this.f_name" "this.l_name);
    tekst.size(szX, szY);
    tekst.position(x, y);
  }

  displayCommonInterest(szX, szY, x, y) {
    let tekst = createP(object.f_name" "object.l_name" has "this.commonInterest" in common with "this.f_name" "this.l_name)
    tekst.size(szX, szY);
    tekst.position(x, y);
  }

  createProfile() { //men kan profile og friend bruges i denne sammenhaeng? Skal variablerne vaere globale?
    profile.removeElements();
    profile = new profiles(this.f_name, this.l_name, this.profile_picture, this.commonInterest, //random til resten)

    for(let i = 0; i < 6; i++) {
      friend[i].removeElements();
      friend[i] = new friends(//random til alle tre ting I suppose)
    }

    object.displayName();
    object.displayAvatar();
    object.displayBirthday();
    object.displayProfession();
    object.displayLocation();
    object.displayContact();

    for(let i = 0; i < 6; i++) {
      friend.displayAvatar();
      friend.displayName();
      friend.displayCommonInterest(;
    }
  }

  //Her skal en funktion indføres. Funktionen vil blive aktiveret, hvis man klikker sig ind på vennens profil. Data fra "friend" skal danne grobund for en ny "profile".
  //Denne "profile" skal erstatte den nuværende profil og dermed foregive, at man har "klikket sig ind på vennens profil".
}
