'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isNull', function() {
  it('isNull', async function() {
    expect(whatsme.isNull(null)).to.be.true;
    expect(whatsme.isNull(false)).to.be.false;
    expect(whatsme.isNull('')).to.be.false;
    expect(whatsme.isNull(undefined)).to.be.false;
  });
});
