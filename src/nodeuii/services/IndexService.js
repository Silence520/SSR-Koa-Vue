
class IndexService{
	constructor(){
		// this.metaDictionries={
		// 	'index':{
		// 		title:'yideng',
		// 		meta:'<meta name="keywords" content="yideng">',
		// 	}
		// }
	}
	// createRenderer(serverbundle,template,clientManifes){
	// 	return createBundleRenderer(serverbundle,{
	// 		cache:LRU({
	// 		   max: 10000
	// 		 }),
	// 		runInNewContext:false,
	// 		template,
	// 		clientManifes

	// 	})
	// }
	async init(ctx){
		// const clientManifes = require('../assets/vue-ssr-client-manifest.json');
		// const serverbundle = require('../assets/vue-ssr-server-bundle.json');
		// const template = fs.readFileSync('../assets/index.html');
		// const context = {url:ctx.url};
		// const ssrrender  = this.createRenderer(serverbundle,template,clientManifes);

		// return  new Promise((reslove,reject)=>{
		// 	const ssrStream = ssrrender.renderToStream(context);
		// 	ctx.status=200;
		// 	ctx.type=html;
		// 	ssrStream.on("error",err=>{console.log(err)}).pipe(ctx.res);
		// })
	}
}
export default IndexService;
