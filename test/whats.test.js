'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('whats', function() {
  it('whats', async function() {
    let something;
    expect(whatsme.whats(undefined)).to.equal('undefined');
    expect(whatsme.whats(false)).to.equal('boolean');
    expect(whatsme.whats(true)).to.equal('boolean');
    expect(whatsme.whats('')).to.equal('string');
    expect(whatsme.whats(something)).to.equal('undefined');
    expect(whatsme.whats({})).to.equal('object');
    expect(whatsme.whats(3)).to.equal('number');
    expect(whatsme.whats([])).to.equal('array');
    expect(whatsme.whats([3])).to.equal('array');
    expect(whatsme.whats(null)).to.equal('null');
    expect(whatsme.whats(NaN)).to.equal('NaN');
    expect(whatsme.whats(Symbol())).to.equal('symbol');
    expect(whatsme.whats(new RegExp('a'))).to.equal('RegExp');
    expect(whatsme.whats(new Date())).to.equal('Date');
  });
});
