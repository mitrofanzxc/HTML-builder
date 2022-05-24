const { readdir, stat } = require('fs');
const path = require('path');

const pathFolderName = path.join(__dirname, 'secret-folder');

readdir(pathFolderName, { withFileTypes: true }, (err, elements) => {
  if (err) {
    throw err;
  } else {
    const files = elements.filter((element) => element.isFile());

    files.forEach((file) => {
      const pathFileName = path.join(pathFolderName, file.name);
      const extName = path.extname(file.name);
      const fileName = file.name.replace(extName, '').trim();

      stat(pathFileName, (err, stats) => {
        if (err) {
          throw err;
        } else {
          console.log(`${fileName} - ${extName.slice(1)} - ${stats.size.toString()} bytes`);
        }
      });
    });
  }
});
