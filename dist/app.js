'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _awilix = require('awilix');

var _awilixKoa = require('awilix-koa');

var _errorHandler = require('./middlewares/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();
//创建ioc 的容器
const container = (0, _awilix.createContainer)();
//每一个请求都是一个 new service
app.use((0, _awilixKoa.scopePerRequest)(container));
//装载所有的models 并将services 注入到 controllers
container.loadModules([`${__dirname}/services/*.js`], {
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: _awilix.Lifetime.SCOPED
  }
});
//log 错误处理配置
_log4js2.default.configure({
  appenders: { cheese: { type: 'file', filename: 'logs/yodeng.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const config = (0, _config2.default)(app);
//log处理
const logger = _log4js2.default.getLogger('cheese');
_errorHandler2.default.error(app, logger);
//注册所有的路有
app.use((0, _awilixKoa.loadControllers)(`controllers/*.js`, { cwd: __dirname }));
//配置静态资源文件夹
app.use((0, _koaStatic2.default)(config.staticDir));
app.listen(config.port, () => {
  console.log('server is runing...');
});
module.exports = app;