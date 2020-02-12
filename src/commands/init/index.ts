import program from 'commander';
import { mkdirSync } from 'fs';
import { folderList } from './constants';
import path from 'path';
import preStartValidation from './verifications/preStartValidation';

program
  .command('initialize')
  .alias('init')
  .description('initialize a new project with default folders and values')
  .action(async () => {
    console.log(`initializing in folder ${process.cwd()}`);
    await preStartValidation();
    folderList.forEach(folder => {
      mkdirSync(path.join(process.cwd(), folder));
      console.log(`created folder ${folder}`);
    });
  });
