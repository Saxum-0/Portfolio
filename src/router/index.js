import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

import ErrorView from '../views/ErrorView.vue'

import ProjectViewCC from '../views/ProjectViewCC.vue'

import ProjectViewCV from '../views/ProjectViewCV.vue'

import ProjectViewFC from '../views/ProjectViewFC.vue'

import ContactView from '../views/ContactView.vue'


const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [

    {

      path: '/',

      name: 'home',

      component: HomeView

    },


    {

      path: '/contact',

      name: 'contact',

      component: ContactView

    },

    {

      path: '/:pathMatch(.*)*',

      name: 'error',

      component: ErrorView

    },

    {

      path: '/projectViewCC',

      name: 'projectCC',

      component: ProjectViewCC

    },
    {

      path: '/projectViewCV',

      name: 'projectCV',

      component: ProjectViewCV

    },
    {

      path: '/projectViewFC',

      name: 'projectFC',

      component: ProjectViewFC

    }
  ]

})




export default router

