import VueRouter from 'vue-router';
console.log('initialized routes.');
const routes = [
    { path: '/', name: 'index', component: require('./components/Index.vue') },
    { path: '/test', name: 'test', component: require('./components/Test.vue') },
];

export default new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active',
});