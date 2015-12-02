'use strict';
var _ = require('lodash');

module.exports = {
  add: function(){
    var result = 0;
    _.each(arguments, function(num){
      result += Number(num);
    });
    return result;
  }
}
