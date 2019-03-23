'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isDate', function() {
  it('isDate', async function() {
    expect(whatsme.isDate(null)).to.be.false;
    expect(whatsme.isDate(false)).to.be.false;
    expect(whatsme.isDate(true)).to.be.false;
    expect(whatsme.isDate('')).to.be.false;
    expect(whatsme.isDate(undefined)).to.be.false;
    expect(whatsme.isDate(NaN)).to.be.false;
    expect(whatsme.isDate({})).to.be.false;
    expect(whatsme.isDate(3)).to.be.false;
    expect(whatsme.isDate(new Date())).to.be.true;
  });
});
