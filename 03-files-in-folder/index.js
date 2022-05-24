const fs = require('fs/promises');
const path = require('node:path');

const pathName = path.join(__dirname, 'secret-folder');

const createFileList = async () => {
  const files = await fs.readdir(pathName, { withFileTypes: true });
  for (const file of files) {
    if (file.isFile()) {
      const extname = path.extname(file.name);
      const fileName = file.name.replace(extname, '').trim();
      console.log(`${fileName} - ${extname.slice(1)}`);
    }
  }
};

createFileList();
