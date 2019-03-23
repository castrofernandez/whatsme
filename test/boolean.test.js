'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isBoolean', function() {
  it('isBoolean', async function() {
    expect(whatsme.isBoolean(null)).to.be.false;
    expect(whatsme.isBoolean(false)).to.be.true;
    expect(whatsme.isBoolean(true)).to.be.true;
    expect(whatsme.isBoolean('')).to.be.false;
    expect(whatsme.isBoolean(undefined)).to.be.false;
    expect(whatsme.isBoolean({})).to.be.false;
    expect(whatsme.isBoolean(3)).to.be.false;
  });
});
