'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isObject', function() {
  it('isObject', async function() {
    const Fn = function() {};

    expect(whatsme.isObject(undefined)).to.be.false;
    expect(whatsme.isObject(false)).to.be.false;
    expect(whatsme.isObject('')).to.be.false;
    expect(whatsme.isObject({})).to.be.true;
    expect(whatsme.isObject(3)).to.be.false;
    expect(whatsme.isObject(new Fn())).to.be.true;
  });
});
