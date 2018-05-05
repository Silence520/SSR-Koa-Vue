import {createApp} from  './main.js'

export default context => {
	return new Promise((resolve,reject)=>{
		const {app, router,store}=createApp();
		router.push(context.url)
		router.onReady(()=>{
			// getMatchedComponents
			const matchCompents = router.getMatchedComponents();
			Promise.all(matchCompents.map((Component)=>{
				if (Component.asyncData) {
			                        return Component.asyncData({
			                            store
			                        })
				}
			})).then(()=>{
				context.state=store.state;
				 resolve(app);
			}).catch(reject)
		},reject);
	});
}
