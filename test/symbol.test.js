'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isSymbol', function() {
  it('isSymbol', async function() {
    expect(whatsme.isSymbol(undefined)).to.be.false;
    expect(whatsme.isSymbol(false)).to.be.false;
    expect(whatsme.isSymbol('')).to.be.false;
    expect(whatsme.isSymbol({})).to.be.false;
    expect(whatsme.isSymbol(3)).to.be.false;
    expect(whatsme.isSymbol(Symbol())).to.be.true;
    expect(whatsme.isSymbol(Symbol('something'))).to.be.true;
  });
});
