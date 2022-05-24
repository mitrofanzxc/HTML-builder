const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.write('Hello, nice to meet you! Please, write something...\n');

rl.on('SIGINT', () => {
  console.log('We will miss you, come back soon!');
  rl.close();
});

rl.on('line', (input) => {
  if (input === 'exit') {
    rl.close();
  }
});
