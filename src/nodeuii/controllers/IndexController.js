import { route, GET, POST, before } from 'awilix-koa';
import { createBundleRenderer } from'vue-server-renderer';
const fs = require('fs');
 const path = require("path");
const LRU =  require ('lru-cache');
@route('/')
@route('/test')
@route('/about')
@route('/topics')
export default class helloAPI {
	constructor({ indexService }) {
		this.indexService = indexService,
		this.metaDictionaries={
			'index':{
				title:'yideng',
				meta:'<meta name="keywords" content=yideng>',
			}
		}
	}
	createRenderer(serverbundle,template,clientManifest){
		return createBundleRenderer(serverbundle,{
			cache:LRU({
			   max: 10000
			 }),
			runInNewContext:false,
			template,
			clientManifest

		})
	}
	@GET()
	async getIndex(ctx) {
	    	// await this.indexService.init(ctx);
	    	// ctx.body= result;
	    	const rootPath = path.join(__dirname, '..');
	    	const clientManifest = require('../assets/vue-ssr-client-manifest.json');
		const serverBundle = require('../assets/vue-ssr-server-bundle.json');
		const template = fs.readFileSync(rootPath +'/assets/index.html','utf-8');
		const context = {url:ctx.url};
		const ssrrender  = this.createRenderer(serverBundle,template,clientManifest);

		// return  new Promise((reslove,reject)=>{
		// 	const ssrStream = ssrrender.renderToStream(context);
		// 	ctx.status=200;
		// 	ctx.type=html;
		// 	ssrStream.on("error",err=>{console.log(err)}).pipe(ctx.res);
		// })

		function createSsrStreamPromise() {
		    return new Promise((resolve, reject) => {
		        if (!ssrrender) {
		            return ctx.body = 'waiting for compilation.. refresh in a moment.'
		        }
		        const ssrStream = ssrrender.renderToStream(context);
		        ctx.status = 200;
		        ctx.type = 'html';
		        ssrStream.on('error', err =>{reject(err)}).pipe(ctx.res);
		    });
		}
		await createSsrStreamPromise(context);

	}
}