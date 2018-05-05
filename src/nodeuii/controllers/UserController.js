import { route, GET, POST, before } from 'awilix-koa';
@route('/users')
export default  class UserController{
	constructor({userService}){
		this.userService=userService;
	}
	@route('/:id')
	@GET()
	async getUser(ctx,next){
		const result= await this.userService.getData(ctx.params.id);
		console.log(result);
    		ctx.body={data:result}
	}
}
