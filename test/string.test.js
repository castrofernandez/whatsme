'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isString', function() {
  it('isString', async function() {
    expect(whatsme.isString(null)).to.be.false;
    expect(whatsme.isString(false)).to.be.false;
    expect(whatsme.isString('')).to.be.true;
    expect(whatsme.isString(undefined)).to.be.false;
    expect(whatsme.isString({})).to.be.false;
    expect(whatsme.isString(3)).to.be.false;
    expect(whatsme.isString(new String('something'))).to.be.true;
  });
});
