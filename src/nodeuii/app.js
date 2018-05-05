import Koa from'koa';
import log4js from'log4js';
import configure from'./config';
import co from'co';
import serve from'koa-static';
import { asClass, asValue ,createContainer,Lifetime} from'awilix';
import { loadControllers,scopePerRequest } from'awilix-koa';
import errorHandler from'./middlewares/errorHandler';
const app = new Koa();
//创建ioc 的容器
const container = createContainer()
//每一个请求都是一个 new service
app.use(scopePerRequest(container));
//装载所有的models 并将services 注入到 controllers
container.loadModules([`${__dirname}/services/*.js`], {
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: Lifetime.SCOPED
  }
})
//log 错误处理配置
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'logs/yodeng.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const config = configure(app);
//log处理
const logger = log4js.getLogger('cheese');
errorHandler.error(app,logger);
//注册所有的路有
app.use(loadControllers(`controllers/*.js`, { cwd: __dirname }))
//配置静态资源文件夹
app.use(serve(config.staticDir));
app.listen(config.port,()=>{
	console.log('server is runing...')
});
module.exports= app;
