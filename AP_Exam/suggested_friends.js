class suggested_friends {
  constructor(f_name, l_name, profile_picture, hobby) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.profile_picture = profile_picture;
    this.hobby = hobby;
  }

  displayAvatar(szX, szY, x, y) {
    let img = createImg(this.profile_picture);
    img.size(szX, szY);
    img.position(x, y);
      img.style("padding","0px");
      img.style("border","3px solid #fff");
  }

  displayName(szX, szY, x, y) {
    let tekst = createP(this.f_name + " " + this.l_name);
    tekst.size(szX, szY);
    tekst.position(x, y);
  }

  displayHobby(szX, szY, x, y) {
    let tekst = createP(profile.f_name + " " + profile.l_name + " has " + this.hobby + " in common with "+ this.f_name + " " + this.l_name)
    tekst.size(szX, szY);
    tekst.position(x, y);
  }

  createProfile() {
    profile.removeElements();
    getData();
    hobbies = [Music[floor(random(0,70))], Activities[floor(random(0,70))], Movies[floor(random(0,70))]]; //Not done; Den erstatter saa der kan vaere aktivitet, aktivitet, movie.
    readyProfile(this.f_name, this.l_name, country, street, city, zipCode, longitude, latitude, email, phone, job, this.profile_picture, hobbies[0] = this.hobby, hobbies[1], hobbies[2]); //hobbyer mangler
    displayProfile();

    // for(let i = 0; i < 6; i++) {
    //   let hobby[i] = random(hobbies); //Igen det med hobby
    // }

    for(let i = 0; i < 6; i++) {
      friend[i].removeElements();
      suggested_friend[i].removeElements();

      getData();
      readyFriends(i, firstName, lastName, profilePicture);
      displayFriends(i);

      getData();
      readySuggestedFriends(i, firstName, lastName, profilePicture, hobby); //hobby mangler
      displaySuggestedFriends(i);
    }
  }
}
