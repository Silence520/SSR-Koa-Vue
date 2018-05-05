import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

//init

const defaultSatate={
	count:0,
	topics:[]
}


const inBrowser = typeof window != 'undefined';
//开发环境
// if(!inBrowser || process.env.NODE == 'development'){
	Vue.use(Vuex);
// }
//ssr 
let state =(inBrowser && window.__INITIAL_STATE__) || defaultSatate;

//mutationsv decrement
const mutations={
	 INCREMENT: state => ++state.count,
	 DECREMENT: state => --state.count,
	 TOPICS_LIST:(state,topics) => {
	 	console.log("收到的值为",topics);
	 	state.topics=topics;
	 }
}

export function createStore(){
	const store =new Vuex.Store({
		state,
		actions,
		getters,
		mutations
	})
	return  store;
}
