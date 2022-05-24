const fs = require('fs/promises');
const path = require('node:path');

const pathName = path.join(__dirname, 'secret-folder');

const createFileList = async () => {
  const files = await fs.readdir(pathName);
  for (const file of files) {
    console.log(file.toString().split('.').join(' - '));
  }
};

createFileList();
