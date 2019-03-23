'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isFalsy', function() {
  it('isFalsy', async function() {
    expect(whatsme.isFalsy(null)).to.be.true;
    expect(whatsme.isFalsy(false)).to.be.true;
    expect(whatsme.isFalsy(true)).to.be.false;
    expect(whatsme.isFalsy('')).to.be.true;
    expect(whatsme.isFalsy(undefined)).to.be.true;
    expect(whatsme.isFalsy(NaN)).to.be.true;
    expect(whatsme.isFalsy({})).to.be.false;
    expect(whatsme.isFalsy(3)).to.be.false;
  });
});
