'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isUndefined', function() {
  it('isUndefined', async function() {
    let something;
    expect(whatsme.isUndefined(undefined)).to.be.true;
    expect(whatsme.isUndefined(false)).to.be.false;
    expect(whatsme.isUndefined('')).to.be.false;
    expect(whatsme.isUndefined(something)).to.be.true;
    expect(whatsme.isUndefined({})).to.be.false;
    expect(whatsme.isUndefined(3)).to.be.false;
  });
});
