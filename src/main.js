// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import VueResource from 'vue-resource';
import 'element-ui/lib/theme-default/index.css';
import MasterMailboxWaitForHandle from './components/MasterMailbox-WaitForHandle';
import MasterMailboxComplete from './components/MasterMailbox-Complete';
import MasterMailboxMailForm from './components/MasterMailbox-MailForm';
import MasterMailboxRecycleBin from './components/MasterMailbox-RecycleBin';
import Welcome from './components/Welcome';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.use(ElementUI);

const routes = [{
  path: '/jzdb',
  component: MasterMailboxWaitForHandle
}, {
  path: '/jzbj',
  component: MasterMailboxComplete
}, {
  path: '/mailform/:id',
  component: MasterMailboxMailForm
}, {
  path: '/jzhsz',
  component: MasterMailboxRecycleBin
}, {
  path: '/',
  component: Welcome
}];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
