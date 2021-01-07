#!/usr/bin/env node

var cmessage = require('./App'),
chalk = require('chalk');
(async () => {
console.log(chalk.red('Commit Message : ')+ chalk.green.bold(await cmessage()))
})();
