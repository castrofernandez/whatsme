'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isEmpty', function() {
  it('isEmpty', async function() {
    expect(whatsme.isEmpty(null)).to.be.true;
    expect(whatsme.isEmpty(false)).to.be.true;
    expect(whatsme.isEmpty(true)).to.be.false;
    expect(whatsme.isEmpty('')).to.be.true;
    expect(whatsme.isEmpty(undefined)).to.be.true;
    expect(whatsme.isEmpty({})).to.be.true;
    expect(whatsme.isEmpty({something: 2})).to.be.false;
    expect(whatsme.isEmpty(3)).to.be.false;
    expect(whatsme.isEmpty([3])).to.be.false;
    expect(whatsme.isEmpty([])).to.be.true;
  });
});
