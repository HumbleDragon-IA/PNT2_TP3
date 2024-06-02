import { createRouter, createWebHistory } from 'vue-router';
import Formulario from './components/Formulario.vue';
import Api from './components/Api.vue';

const routes = [
  { path: '/', component: Api },
  { path: '/formulario', component: Formulario },
  { path: '/formulario/:id', component: Formulario, props: true },
  { path: '/api', component: Api },
  { path: '/:pathMatch(.*)*', component: Api }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;