import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import NotFound404 from '@/components/NotFound404';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery,
    },
    {
      path: '*',
      component: NotFound404,
    },
  ],
});
