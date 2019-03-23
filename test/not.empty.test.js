'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isNotEmpty', function() {
  it('isNotEmpty', async function() {
    expect(whatsme.isNotEmpty(null)).to.be.false;
    expect(whatsme.isNotEmpty(false)).to.be.false;
    expect(whatsme.isNotEmpty(true)).to.be.true;
    expect(whatsme.isNotEmpty('')).to.be.false;
    expect(whatsme.isNotEmpty(undefined)).to.be.false;
    expect(whatsme.isNotEmpty({})).to.be.false;
    expect(whatsme.isNotEmpty({something: 2})).to.be.true;
    expect(whatsme.isNotEmpty(3)).to.be.true;
    expect(whatsme.isNotEmpty([3])).to.be.true;
    expect(whatsme.isNotEmpty([])).to.be.false;
  });
});
