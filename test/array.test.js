'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isArray', function() {
  it('isArray', async function() {
    expect(whatsme.isArray(null)).to.be.false;
    expect(whatsme.isArray(false)).to.be.false;
    expect(whatsme.isArray(true)).to.be.false;
    expect(whatsme.isArray('')).to.be.false;
    expect(whatsme.isArray(undefined)).to.be.false;
    expect(whatsme.isArray(NaN)).to.be.false;
    expect(whatsme.isArray({})).to.be.false;
    expect(whatsme.isArray(3)).to.be.false;
    expect(whatsme.isArray([3])).to.be.true;
    expect(whatsme.isArray([])).to.be.true;
    expect(whatsme.isArray(new Array())).to.be.true;
    expect(whatsme.isArray(new Array(1, 2))).to.be.true;
  });
});
