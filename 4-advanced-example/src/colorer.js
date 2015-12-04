'use strict';
import _ from 'lodash';
import chalk from 'chalk';

import Logger from './logger';
let logger = Logger('colorer');
logger.debug('loaded');

let colors = ['blue', 'green', 'yellow', 'cyan', 'red'];
let colorsLength = colors.length-1;

export default {
  rainbow: msgs => {
    let coloredMsg = '';
    logger.debug(msgs);
    _.each(msgs, (msg, index) => {
      _.each(msg, c => {
        let rand = _.random(0, colorsLength);
        let color = colors[rand];
        coloredMsg += chalk[color](c);
      });
      if(msgs.length-1 > index){
        coloredMsg += '\n';
      }
    });
    return coloredMsg;
  },
  randomColor: msgs => {
    let coloredMsg = '';
    _.each(msgs, (msg, index) => {
      let rand = _.random(0, colorsLength);
      let color = colors[rand];
      coloredMsg += chalk[color](msg);
      if(msgs.length-1 > index){
        coloredMsg += '\n';
      }
    });
    return coloredMsg;
  }
}
