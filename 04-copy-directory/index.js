const { mkdir, readdir, createReadStream, createWriteStream } = require('node:fs');
const path = require('node:path');

const pathNameOriginFolder = path.join(__dirname, 'files');
const pathNameCopyFolder = path.join(__dirname, 'files-copy');
const options = { withFileTypes: true };

readdir(pathNameOriginFolder, options, (err, files) => {
  if (err) throw err;

  mkdir(pathNameCopyFolder, { recursive: true }, (err) => {
    if (err) throw err;

    files.forEach((file) => {
      const pathFileNameOrigin = path.join(pathNameOriginFolder, file.name);
      const pathFileNameCopy = path.join(pathNameCopyFolder, file.name);

      const readStream = createReadStream(pathFileNameOrigin);
      const writeStream = createWriteStream(pathFileNameCopy);

      readStream.pipe(writeStream);
    });
  });
});
