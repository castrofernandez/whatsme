'use strict';

import {
  isNull,
  isUndefined,
  isFalse,
  isArray,
  isObject,
  isNaN,
} from './is.type';

const isNotNull = (obj) => !isNull(obj);
const isDefined = (obj) => !isUndefined(obj);
const isSomething = (obj) => isNotNull(obj) && isDefined(obj);
const isBoolean = (obj) => typeof obj === 'boolean';
const isTruthy = (obj) => !isFalsy(obj);
const isFalsy = (obj) => isFalse(obj) || !isSomething(obj)
  || isNaN(obj) || obj === 0 || obj === '';
const isEmpty = (obj) => isFalsy(obj)
  || (isArray(obj) && obj.length === 0)
  || (isObject(obj) && Object.keys(obj).length === 0);
const isNotEmpty = (obj) => !isEmpty(obj);

export {
  isNotNull,
  isDefined,
  isSomething,
  isBoolean,
  isTruthy,
  isFalsy,
  isEmpty,
  isNotEmpty,
};
