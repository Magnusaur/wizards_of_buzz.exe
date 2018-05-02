
function setup() {
  noCanvas()
  h1 = createElement('h1', 'FreeBeerBook.SoMe');
  h1.position(120,0);

  banner = createImg('https://www.samyakhospital.com/wp-content/uploads/2016/12/dbtreesPhotoxpress_9939515.jpg');
    banner.size(windowWidth,300);
    banner.position(0,50);

  image = createImg('https://static.fsf.org/nosvn/rms-photos/20161122-pamplona/20161122-pamplona-04-thumb.png');
    image.size(200,300);
    image.position(120,90);
      image.style("padding","0.5px");
      image.style("border","3px solid #fff");

  h2 = createElement('h2', 'f_name l_name');
    h2.position(370,270);

//Id-pers
  h3 = createElement('h3', 'Profile');
  h3.parent('Id-pers');

  var content = ['Job','Education','Birthday','Interests'];
  for (var i = 0; i < content.length; i++) {
    var li = createElement('li',content[i]);
    li.parent('Id-pers');
  }

//location
  h3 = createElement('h3', 'Location');
  h3.parent('location');

  var content2 = ['Country','Street', 'City','zipCode','longitude','latitude'];
  for (var i = 0; i < content2.length; i++) {
    var li = createElement('li',content2[i]);
    li.parent('location');
  }

//contact
  h3 = createElement('h3', 'Contact');
  h3.parent('contact');

  var content3 = ['Email','Phone'];
  for (var i = 0; i < content3.length; i++) {
    var li = createElement('li',content3[i]);
    li.parent('contact');
  }

}


function draw() {

}
