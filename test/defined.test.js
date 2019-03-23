'use strict';

import {expect} from 'chai';
import whatsme from '../src/index';

describe('isDefined', function() {
  it('isDefined', async function() {
    let something;
    expect(whatsme.isDefined(undefined)).to.be.false;
    expect(whatsme.isDefined(false)).to.be.true;
    expect(whatsme.isDefined('')).to.be.true;
    expect(whatsme.isDefined(something)).to.be.false;
    expect(whatsme.isDefined({})).to.be.true;
    expect(whatsme.isDefined(3)).to.be.true;
  });
});
