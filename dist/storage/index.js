'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.local = exports.mysql = undefined;

var _jsMysql = require('js-mysql');

var mysql = _interopRequireWildcard(_jsMysql);

var _index = require('./json-file-storage/index.js');

var local = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.mysql = mysql;
exports.local = local;