var fs = require('fs');
var fsExtra = require('fs-extra');

//async function remove() {
  try {
      await fsExtra.emptyDirSync('../Sockets_in/public/media');
      console.log('Images was deleted!')
      //specify Patch with every particular system
  } catch (err) {
      console.log(err);
  }
//}

//remove()

//module.exports.slet = remove;
