'use strict';
import _ from 'lodash';
import chalk from 'chalk';

import Logger from './logger';
import options from './options';
import colorer from './colorer';

let logger = Logger('cli');
logger.debug('loaded');

let args = process.argv;
let parsedOptions;

try{
  parsedOptions = options.parse(args);
} catch(e){
  console.error(chalk.red(e));
  process.exit();
}

if(!parsedOptions.help){
  let messages = parsedOptions._;
  if(parsedOptions.rainbow){
    logger.log(colorer.rainbow(messages));
  } else {
    logger.log(colorer.randomColor(messages));
  }
} else {
  logger.log(options.generateHelp());
}
