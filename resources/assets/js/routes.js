import VueRouter from 'vue-router';
console.log('initialized routes.');
import Index from './components/Index.vue';
import Test  from './components/Test.vue';
const routes = [
    { path: '/',     name: 'index', component: Index },
    { path: '/test', name: 'test',  component: Test },
];

export default new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active',
});