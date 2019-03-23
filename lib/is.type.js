'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exposedMethods = exports.validators = exports.isBoolean = exports.isNotNull = exports.isObject = exports.isDate = exports.isRegExp = exports.isFalse = exports.isTrue = exports.isArray = exports.isNaN = exports.isNumber = exports.isString = exports.isSymbol = exports.isUndefined = exports.isNull = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isNull = function isNull(obj) {
  return obj === null;
};

exports.isNull = isNull;

var isUndefined = function isUndefined(obj) {
  return typeof obj === 'undefined';
};

exports.isUndefined = isUndefined;

var isSymbol = function isSymbol(obj) {
  return _typeof(obj) === 'symbol' || hasSymbolPrototype(obj);
};

exports.isSymbol = isSymbol;

var isString = function isString(obj) {
  return typeof obj === 'string' || obj instanceof String;
};

exports.isString = isString;

var isNumber = function isNumber(obj) {
  return !isNaN(parseFloat(obj)) && isFinite(obj);
};

exports.isNumber = isNumber;

var isNaN = function isNaN(obj) {
  return typeof obj === 'number' && Number.isNaN(obj);
};

exports.isNaN = isNaN;

var isArray = function isArray(obj) {
  return Array.isArray(obj);
};

exports.isArray = isArray;

var isTrue = function isTrue(obj) {
  return isBoolean(obj) && obj === true;
};

exports.isTrue = isTrue;

var isFalse = function isFalse(obj) {
  return isBoolean(obj) && obj === false;
};

exports.isFalse = isFalse;

var isRegExp = function isRegExp(obj) {
  return obj instanceof RegExp;
};

exports.isRegExp = isRegExp;

var isDate = function isDate(obj) {
  return comparePrototype(obj, '[object Date]');
};

exports.isDate = isDate;

var isObject = function isObject(obj) {
  return isNotNull(obj) && _typeof(obj) === 'object';
};
/* Aux */


exports.isObject = isObject;

var isBoolean = function isBoolean(obj) {
  return typeof obj === 'boolean';
};

exports.isBoolean = isBoolean;

var isNotNull = function isNotNull(obj) {
  return !isNull(obj);
};

exports.isNotNull = isNotNull;

var getPrototype = function getPrototype(obj) {
  return Object.prototype.toString.call(obj);
};

var comparePrototype = function comparePrototype(obj, prototype) {
  return getPrototype(obj) === prototype;
};

var hasSymbolPrototype = function hasSymbolPrototype(obj) {
  return comparePrototype(obj, '[object Symbol]');
};

var validators = [{
  name: 'isNull',
  check: isNull,
  type: 'null'
}, {
  name: 'isUndefined',
  check: isUndefined,
  type: 'undefined'
}, {
  name: 'isSymbol',
  check: isSymbol,
  type: 'symbol'
}, {
  name: 'isString',
  check: isString,
  type: 'string'
}, {
  name: 'isNumber',
  check: isNumber,
  type: 'number'
}, {
  name: 'isNaN',
  check: isNaN,
  type: 'NaN'
}, {
  name: 'isArray',
  check: isArray,
  type: 'array'
}, {
  name: 'isTrue',
  check: isTrue,
  type: 'true'
}, {
  name: 'isFalse',
  check: isFalse,
  type: 'false'
}, {
  name: 'isRegExp',
  check: isRegExp,
  type: 'RegExp'
}, {
  name: 'isDate',
  check: isDate,
  type: 'Date'
}, {
  name: 'isObject',
  check: isObject,
  type: 'object'
}];
exports.validators = validators;
var exposedMethods = validators.reduce(function (result, _ref) {
  var name = _ref.name,
      check = _ref.check;
  return _objectSpread({}, result, _defineProperty({}, name, check));
}, {});
exports.exposedMethods = exposedMethods;