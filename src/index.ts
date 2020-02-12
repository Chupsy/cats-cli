#!/usr/bin/env node
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import program from 'commander';
import './commands/init';

clear();
console.log(
  chalk.red(figlet.textSync('CATS-CLI', { horizontalLayout: 'full' }))
);
program
  .version('0.0.1')
  .description(
    'CLI to create and manage clean architecture projects in typescript server-side'
  );

async function main(): Promise<void> {
  await program.parseAsync(process.argv);
}
main();
