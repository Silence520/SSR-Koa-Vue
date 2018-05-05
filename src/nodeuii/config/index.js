import _ from "lodash";
import path from "path";

let config={
	'env':process.env.NODE_ENV,
	'viewdir': path.join(__dirname, '..','views'),
	'staticDir': path.join(__dirname, '..','assets'),
	'port':3001
};
console.log(process.env.NODE_ENV)
const init= (app) =>{
	if(process.env.NODE_ENV=='development'){
		const configer={
			port:3001,
		}
		config=_.extend(config,configer);
	}
	if(process.env.NODE_ENV=='production'){
		const configer={
			port:3001,
		}
		config=_.extend(config,configer);
	}
	return config;
}


export default app=>init(app);