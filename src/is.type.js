'use strict';

const isNull = (obj) => obj === null;
const isUndefined = (obj) => typeof obj === 'undefined';
const isSymbol = (obj) => typeof obj === 'symbol' || hasSymbolPrototype(obj);
const isString = (obj) => typeof obj === 'string' || obj instanceof String;
const isNumber = (obj) => !isNaN(parseFloat(obj)) && isFinite(obj);
const isNaN = (obj) => typeof obj === 'number' && Number.isNaN(obj);
const isArray = (obj) => Array.isArray(obj);
const isTrue = (obj) => isBoolean(obj) && obj === true;
const isFalse = (obj) => isBoolean(obj) && obj === false;
const isRegExp = (obj) => obj instanceof RegExp;
const isDate = (obj) => comparePrototype(obj, '[object Date]');
const isObject = (obj) => isNotNull(obj) && typeof obj === 'object';

/* Aux */
const isBoolean = (obj) => typeof obj === 'boolean';
const isNotNull = (obj) => !isNull(obj);
const getPrototype = (obj) => Object.prototype.toString.call(obj);
const comparePrototype = (obj, prototype) => getPrototype(obj) === prototype;
const hasSymbolPrototype = (obj) => comparePrototype(obj, '[object Symbol]');

const validators = [
  {name: 'isNull', check: isNull, type: 'null'},
  {name: 'isUndefined', check: isUndefined, type: 'undefined'},
  {name: 'isSymbol', check: isSymbol, type: 'symbol'},
  {name: 'isString', check: isString, type: 'string'},
  {name: 'isNumber', check: isNumber, type: 'number'},
  {name: 'isNaN', check: isNaN, type: 'NaN'},
  {name: 'isArray', check: isArray, type: 'array'},
  {name: 'isTrue', check: isTrue, type: 'true'},
  {name: 'isFalse', check: isFalse, type: 'false'},
  {name: 'isRegExp', check: isRegExp, type: 'RegExp'},
  {name: 'isDate', check: isDate, type: 'Date'},
  {name: 'isObject', check: isObject, type: 'object'},
];

const exposedMethods = validators
    .reduce((result, {name, check}) => ({...result, [name]: check}), {});

export {
  isNull,
  isUndefined,
  isSymbol,
  isString,
  isNumber,
  isNaN,
  isArray,
  isTrue,
  isFalse,
  isRegExp,
  isDate,
  isObject,
  isNotNull,
  isBoolean,
  validators,
  exposedMethods,
};
