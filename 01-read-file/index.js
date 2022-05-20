const path = require('node:path');
const { createReadStream } = require('node:fs');
const process = require('node:process');
const { stdout } = process;

const pathName = path.join(__dirname, 'text.txt');
const stream = createReadStream(pathName, 'utf-8');

stream.on('data', (chunk) => stdout.write(chunk));
stream.on('end', () => stdout.write('\nStream end'));
stream.on('error', (error) => stdout.write('\nError, try again later...', error.message));
