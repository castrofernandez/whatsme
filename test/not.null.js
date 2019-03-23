'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isNotNull', function() {
  it('isNotNull', async function() {
    expect(whatsme.isNotNull(null)).to.be.false;
    expect(whatsme.isNotNull(false)).to.be.true;
    expect(whatsme.isNotNull('')).to.be.true;
    expect(whatsme.isNotNull(undefined)).to.be.true;
    expect(whatsme.isNotNull({})).to.be.true;
    expect(whatsme.isNotNull(3)).to.be.true;
  });
});
