import Vue from 'vue';

import Modal from './components/Modal.vue';
import Navi from './components/Navigation.vue';
console.log('initialized components.');
Vue.component('my-modal', Modal);
Vue.component('my-navi', Navi);