'use strict';
import debug from 'debug';

export default performer => {
  let app = `sprinkle:${performer}`;
  return {
    debug: debug(app),
    log: console.log,
    error: console.err
  }
}
