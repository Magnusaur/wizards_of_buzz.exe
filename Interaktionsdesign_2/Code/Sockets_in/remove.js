var fs = require('fs');
var fsExtra = require('fs-extra');


try {
//fs.unlinkSync('./public/media/${filename}') //this deletes a file
fsExtra.emptyDirSync('./public/media');
} catch (err) {
  console.log(err);
}
