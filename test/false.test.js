'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isFalse', function() {
  it('isFalse', async function() {
    expect(whatsme.isFalse(null)).to.be.false;
    expect(whatsme.isFalse(false)).to.be.true;
    expect(whatsme.isFalse(true)).to.be.false;
    expect(whatsme.isFalse('')).to.be.false;
    expect(whatsme.isFalse(undefined)).to.be.false;
    expect(whatsme.isFalse({})).to.be.false;
    expect(whatsme.isFalse(3)).to.be.false;
  });
});
