"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _dns = require("dns");

let UserService = class UserService {
	/**
 *IndexModel  类，生成一段异步数据
 *@class 
 */
	constructor(app) {}
	/**
 * 获取具体的API接口数据
 *@returns {Promise} 返回异步数据
 *@example
 *return new Promise
 *getDate()
 */
	getData(id) {
		console.log(id);
		return new Promise((resolve, reject) => {
			// setTimeout(()=>{
			// 	resolve(`hello user Actioin ->${id}`)
			// },1000)
			resolve([{ title: "koa" }, { title: "webpack" }, { title: "vue" }]);
		});
	}
}; /**
   *@fileOverview 实现index 数据
   *@author lihaibo
   *@version 1.0
   */

exports.default = UserService;