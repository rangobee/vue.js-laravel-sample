console.log('initialized app.');

import Vue from 'vue';
import VueRouter from 'vue-router';

// require('./bootstrap') どちらでも構わないっぽい
import './bootstrap';

Vue.use(VueRouter);

// ルーティングだけを記述した別ファイルを作成
import router from './routes';
// const router = new VueRouter({
//     mode: 'history',
//     routes: [
//         { path: '/', component: require('./components/Index.vue') },
//     ]
// })
console.log(location.href);
// 独自コンポーネントだけを記述した別ファイルを作成
import './myComponents';

const app = new Vue({
    router,
    el: '#app'
});