import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import topics from '../components/topics';
import Test from '../components/test/test.vue';
Vue.use(Router);

export function createRouter() {
    const router = new Router({
      mode:'history',
      routes: [{
          path: '/',
          component: HelloWorld
        },
        {
          path: '/about',
          component: ()=> import('../components/about.vue')
        },
        {
          path: '/topics',
          component: topics
        },
        {
          path: '/test',
          component: Test
        }]
    })
    return router;
}

