"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let config = {
	'env': process.env.NODE_ENV,
	'viewdir': _path2.default.join(__dirname, '..', 'views'),
	'staticDir': _path2.default.join(__dirname, '..', 'assets'),
	'port': 3001
};
console.log(process.env.NODE_ENV);
const init = app => {
	if (process.env.NODE_ENV == 'development') {
		const configer = {
			port: 3001
		};
		config = _lodash2.default.extend(config, configer);
	}
	if (process.env.NODE_ENV == 'production') {
		const configer = {
			port: 3001
		};
		config = _lodash2.default.extend(config, configer);
	}
	return config;
};

exports.default = app => init(app);