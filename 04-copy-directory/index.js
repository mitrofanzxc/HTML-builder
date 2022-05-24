const { mkdir } = require('node:fs');
const path = require('node:path');

const pathName = path.join(__dirname, 'files-copy');

mkdir(pathName, { recursive: true }, (err) => {
  if (err) throw err;
});
