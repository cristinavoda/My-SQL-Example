import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';

import Navbar from './components/Navbar.vue';
import About from './views/About.vue';
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);


const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/contact', component: Contact, name: 'Contact' }
];


const router = createRouter({
  history: createWebHistory(),
  routes :[
    { path: '/', component:Home, name: 'Home' },
    { path: '/about', component: About, name: 'About' },
    { path: '/contact', component: Contact, name: 'Contact' }]
  
});

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
});


const app = createApp(App);
app.use(router); 
app.mount('#app');


