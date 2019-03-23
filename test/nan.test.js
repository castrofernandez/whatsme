'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isNaN', function() {
  it('isNaN', async function() {
    expect(whatsme.isNaN(null)).to.be.false;
    expect(whatsme.isNaN(false)).to.be.false;
    expect(whatsme.isNaN(true)).to.be.false;
    expect(whatsme.isNaN('')).to.be.false;
    expect(whatsme.isNaN(undefined)).to.be.false;
    expect(whatsme.isNaN(NaN)).to.be.true;
    expect(whatsme.isNaN({})).to.be.false;
    expect(whatsme.isNaN(3)).to.be.false;
  });
});
