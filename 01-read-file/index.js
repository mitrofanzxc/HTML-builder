const fs = require('node:fs');

const stream = fs.createReadStream('./01-read-file/text.txt', 'utf-8');

stream.on('data', (chunk) => console.log(chunk));
stream.on('end', () => console.log('Stream end'));
stream.on('error', (error) => console.log('Error, try again later...', error.message));
