import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddTask from '@/views/AddTask.vue';
import TaskList from '@/views/TaskList.vue';
import CombinedView from '@/views/CombinedView';
import AboutView from '@/views/AboutView.vue';
// Importa los otros componentes en esta sección

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, 
  {
    path: '/addtask',
    name: 'AddTask', // Ruta para añadir tareas
    component: AddTask // Aquí se debe cargar el componente AddTask
    // Implementa la lógica para añadir nuevas tareas.
  },
  {
    path: '/about',
    name: 'About', // Ruta para añadir tareas
    component: AboutView // Aquí se debe cargar el componente AddTask
    // Implementa la lógica para añadir nuevas tareas.
  },
  {
    path: '/lista_tareas',
    name: 'Lista de Tareas', // Ruta para añadir tareas
    component: TaskList // Aquí se debe cargar el componente AddTask
    // Implementa la lógica para añadir nuevas tareas.
  },
  {
    path: '/vista_combinada',
    name: 'Vista Combinada', // Ruta para añadir tareas
    component: CombinedView // Aquí se debe cargar el componente AddTask
    // Implementa la lógica para añadir nuevas tareas.
  },
  // Las demás rutas deben ir aquí también
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
