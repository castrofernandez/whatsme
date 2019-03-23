'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var isType = _interopRequireWildcard(require("./is.type"));

var isOther = _interopRequireWildcard(require("./is.other"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var whats = function whats(obj) {
  return geyKey(getFirstType(obj));
};
/* Aux */


var geyKey = function geyKey() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return obj.type || '';
};

var getFirstType = function getFirstType(obj) {
  return isType.validators.find(function (_ref) {
    var check = _ref.check;
    return check(obj);
  });
};

var whatsme = _objectSpread({}, isType.exposedMethods, isOther, {
  whats: whats
});

var _default = whatsme;
exports.default = _default;