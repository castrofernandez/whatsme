'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isNumber', function() {
  it('isNumber', async function() {
    expect(whatsme.isNumber(null)).to.be.false;
    expect(whatsme.isNumber(false)).to.be.false;
    expect(whatsme.isNumber(true)).to.be.false;
    expect(whatsme.isNumber('')).to.be.false;
    expect(whatsme.isNumber(undefined)).to.be.false;
    expect(whatsme.isNumber(NaN)).to.be.false;
    expect(whatsme.isNumber({})).to.be.false;
    expect(whatsme.isNumber(3)).to.be.true;
    expect(whatsme.isNumber(3.2)).to.be.true;
    expect(whatsme.isNumber(0)).to.be.true;
    expect(whatsme.isNumber(-1)).to.be.true;
    expect(whatsme.isNumber(new Number(3))).to.be.true;
    expect(whatsme.isNumber(NaN)).to.be.false;
  });
});
