var app = require('../app');
var chai = require('chai');
var expect = chai.expect;

describe('app-tests', function(){
  it('adds numbers', function(){
    var result = app.add(3, 4, '5');
    expect(result).to.equal(12);
  });
});
