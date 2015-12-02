'use strict';
let expect = require('chai').expect;
let Cake = require('../src');

describe('cake', () => {
  it('throws an exception if less than 3 ingredients are given when trying to make batter', () => {
    let testCake = Cake();
    expect(() => {
      testCake.makeBatter();
    }).to.throw;
  })
});
