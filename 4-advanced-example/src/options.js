'use strict';
import optionator from 'optionator';
import Logger from './logger';
let logger = Logger('options');
logger.debug('loaded');

let settings = {
  prepend: 'sprinkle <"message"> [<"message"> ...]',
  concatRepeatedArrays: true,
  mergeRepeatedObjects: true,
  options:[{
    heading: 'Options'
  },
  {
    option: 'help',
    alias: 'h',
    type: 'Boolean',
    description: 'Prints this context menu'
  },
  {
    option: 'rainbow',
    alias: 'r',
    type: 'Boolean',
    description: "How about you guess what this does."
  }]
}

export default optionator(settings);
