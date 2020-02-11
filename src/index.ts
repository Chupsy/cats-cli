#!/usr/bin/env node
import chalk from 'chalk'
import clear from 'clear'
import figlet from 'figlet'
import program from 'commander'
import './commands/init'
clear()
console.log(
  chalk.red(figlet.textSync('CATS-CLI', { horizontalLayout: 'full' }))
)
program.version('0.0.1').description("An example CLI for ordering pizza's")

async function main(): Promise<void> {
  await program.parseAsync(process.argv)
}
main()
