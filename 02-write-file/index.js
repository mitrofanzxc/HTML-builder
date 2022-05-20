const process = require('node:process');
const { stdin, stdout } = process;

stdout.write('Hello, nice to meet you! Please, write something...\n');
stdin.on('data', (data) => {
  stdout.write(data);
  // process.exit();
});

process.on('exit', () => {
  console.log('Process completed, thank you.');
});
