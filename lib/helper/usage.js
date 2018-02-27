const chalk = require('chalk');

module.exports = () => {
  console.log([
    `${chalk.bold.underline('Image Optimize CLI')}`,
    `Optimize images using imagemagick's convert binary`,
    ``,
    `${chalk.bold.underline('Example')}`,
    `  image-optimizer-cli "./public/assets/**/*.@(jpg|jpeg|png|gif)" --log ./optimizer.log`,
    ``,
    `${chalk.bold.underline('Options')}`,
    `  ${chalk.bold('--log')} <filepath>     The log file`
  ].join("\n"));
}

