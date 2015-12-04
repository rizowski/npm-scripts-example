'use strict';
require('source-map-support/register');

let Cake = require('./src-compiled');

let myCake = Cake(['eggs', 'flour']);
// Todo: what do?

var myBatter = myCake.makeBatter();
var myFlatCake = myBatter.bake();
