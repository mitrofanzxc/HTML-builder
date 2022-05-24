const path = require('node:path');
const { open, createWriteStream } = require('node:fs');
const { stdin: input, stdout: output } = require('node:process');
const readline = require('node:readline');
const rl = readline.createInterface({ input, output });

const pathName = path.join(__dirname, 'text.txt');

open(pathName, 'a+', (err) => {
  if (err) throw err;
});

const textFile = createWriteStream(pathName);

rl.write('Hello, nice to meet you! Please, write something...\n');

input.on('data', (chunk) => textFile.write(chunk));

rl.on('SIGINT', () => {
  console.log('We will miss you, come back soon!');
  rl.close();
});

rl.on('line', (input) => {
  if (input.trim() === 'exit') {
    console.log('We will miss you, come back soon!');
    rl.close();
  }
});
