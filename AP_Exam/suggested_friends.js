function readySuggestedFriends(i, firstName, lastName, profilePicture, hobby) {
  suggested_friend[i] = new suggested_friends(
    firstName,
    lastName,
    profilePicture,
    hobby
  )
}

function displaySuggestedFriends(i) {
  suggested_friend[i].displayAvatar();
  suggested_friend[i].displayName();
  suggested_friend[i].displayHobby();
}




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
  }

  displayName(szX, szY, x, y) {
    let tekst = createP(this.f_name + " " + this.l_name);
    tekst.size(szX, szY);
    tekst.position(x, y);
  }

  displayCommonInterest(szX, szY, x, y) {
    let tekst = createP(object.f_name + " " + object.l_name + " has " + this.commonInterest + " in common with "+ this.f_name + " " + this.l_name)
    tekst.size(szX, szY);
    tekst.position(x, y);
  }

  createProfile() {
    profile.removeElements();
    getData();
    readyProfile(this.f_name, this.l_name, country, street, city, zipCode, longitude, latitude, email, phone, job, this.profile_picture, hobbies[0] = this.hobby, hobbies[1], hobbies[2]);
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
      readySuggestedFriends(i, firstName, lastName, profilePicture, hobby[0]);
      displaySuggestedFriends(i);
    }
  }
}
