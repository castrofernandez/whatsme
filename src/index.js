'use strict';

import * as isType from './is.type';
import * as isOther from './is.other';

const whats = (obj) => geyKey(getFirstType(obj));

/* Aux */

const geyKey = (obj = {}) => obj.type || '';

const getFirstType = (obj) => isType.validators
    .find(({check}) => check(obj));

const whatsme = {
  ...isType.exposedMethods,
  ...isOther,
  whats,
};

export default whatsme;
