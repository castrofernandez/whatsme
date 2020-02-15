'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isFunction', function() {
  it('isFunction', async function() {
    const Fn = function() {};

    expect(whatsme.isFunction(undefined)).to.be.false;
    expect(whatsme.isFunction(false)).to.be.false;
    expect(whatsme.isFunction('')).to.be.false;
    expect(whatsme.isFunction(() => {})).to.be.true;
    expect(whatsme.isFunction(function() {})).to.be.true;
    expect(whatsme.isFunction(3)).to.be.false;
    expect(whatsme.isFunction(Fn)).to.be.true;
    expect(whatsme.isFunction(new Fn())).to.be.false;
  });
});
