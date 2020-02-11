import inquirer = require('inquirer')

export default async () => {
  const { validation } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'validation',
      message: `Please validate you have all these installed in global (check README to install if necessary) : Node.js, NPM, Yarn, typescript, tslint`,
      default: false,
    },
  ])
  if (!validation) {
    console.log(
      'Please check README to install the missing global dependencies (2.Global dependencies)'
    )
    process.exit(0)
  }
}
