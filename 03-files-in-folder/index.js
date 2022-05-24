const fs = require('fs/promises');
const path = require('node:path');

const pathName = path.join(__dirname, 'secret-folder');

const createFileList = async () => {
  const files = await fs.readdir(pathName, { withFileTypes: true });
  for (const file of files) {
    if (file.isFile()) {
      console.log(file.name.split('.').join(' - '));
    }
  }
};

createFileList();
