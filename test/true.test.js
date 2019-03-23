'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isTrue', function() {
  it('isTrue', async function() {
    expect(whatsme.isTrue(null)).to.be.false;
    expect(whatsme.isTrue(false)).to.be.false;
    expect(whatsme.isTrue(true)).to.be.true;
    expect(whatsme.isTrue('')).to.be.false;
    expect(whatsme.isTrue(undefined)).to.be.false;
    expect(whatsme.isTrue({})).to.be.false;
    expect(whatsme.isTrue(3)).to.be.false;
  });
});
