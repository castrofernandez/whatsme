'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isRegExp', function() {
  it('isRegExp', async function() {
    expect(whatsme.isRegExp(null)).to.be.false;
    expect(whatsme.isRegExp(false)).to.be.false;
    expect(whatsme.isRegExp(true)).to.be.false;
    expect(whatsme.isRegExp('')).to.be.false;
    expect(whatsme.isRegExp(undefined)).to.be.false;
    expect(whatsme.isRegExp(NaN)).to.be.false;
    expect(whatsme.isRegExp({})).to.be.false;
    expect(whatsme.isRegExp(3)).to.be.false;
    expect(whatsme.isRegExp(new Number(3))).to.be.false;
    expect(whatsme.isRegExp(new RegExp('a'))).to.be.true;
    expect(whatsme.isRegExp(/a/g)).to.be.true;
  });
});
