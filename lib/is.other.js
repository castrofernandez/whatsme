'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isNotNull", {
  enumerable: true,
  get: function get() {
    return _is.isNotNull;
  }
});
Object.defineProperty(exports, "isBoolean", {
  enumerable: true,
  get: function get() {
    return _is.isBoolean;
  }
});
exports.isNotEmpty = exports.isEmpty = exports.isFalsy = exports.isTruthy = exports.isSomething = exports.isDefined = void 0;

var _is = require("./is.type");

var isDefined = function isDefined(obj) {
  return !(0, _is.isUndefined)(obj);
};

exports.isDefined = isDefined;

var isSomething = function isSomething(obj) {
  return (0, _is.isNotNull)(obj) && isDefined(obj);
};

exports.isSomething = isSomething;

var isTruthy = function isTruthy(obj) {
  return !isFalsy(obj);
};

exports.isTruthy = isTruthy;

var isFalsy = function isFalsy(obj) {
  return (0, _is.isFalse)(obj) || !isSomething(obj) || (0, _is.isNaN)(obj) || obj === 0 || obj === '';
};

exports.isFalsy = isFalsy;

var isEmpty = function isEmpty(obj) {
  return isFalsy(obj) || (0, _is.isArray)(obj) && obj.length === 0 || (0, _is.isObject)(obj) && Object.keys(obj).length === 0;
};

exports.isEmpty = isEmpty;

var isNotEmpty = function isNotEmpty(obj) {
  return !isEmpty(obj);
};

exports.isNotEmpty = isNotEmpty;