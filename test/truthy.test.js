'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isTruthy', function() {
  it('isTruthy', async function() {
    expect(whatsme.isTruthy(null)).to.be.false;
    expect(whatsme.isTruthy(false)).to.be.false;
    expect(whatsme.isTruthy(true)).to.be.true;
    expect(whatsme.isTruthy('')).to.be.false;
    expect(whatsme.isTruthy(undefined)).to.be.false;
    expect(whatsme.isTruthy(NaN)).to.be.false;
    expect(whatsme.isTruthy({})).to.be.true;
    expect(whatsme.isTruthy(3)).to.be.true;
  });
});
