import { createRouter, createWebHistory } from 'vue-router'

import Queue from '../views/ViewQueue.vue'
import Appointment from '../views/Appointment.vue'
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import ForgetPassword from '../views/ForgetPassword.vue'
import ShopDetails from '../views/ShopDetails.vue'
import AdminHome from '../views/admin/AdminHome.vue'
import AdminAppointment from '../views/admin/AdminAppointment.vue'
import AdminManageShop from '../views/admin/AdminManageShop.vue'
import JoinQueue from '../views/JoinQueue.vue'
import MyQueue from '../views/MyQueue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/queue/:shop_id',
      name: 'queue',
      component: Queue
    },
    {
      path: '/queue/:shop_id/:phone_number',
      name: 'queueViewing',
      component: MyQueue
    },
    {
      path: '/queue/join',
      name: 'JoinQueue',
      component: JoinQueue
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: Appointment,
      meta: {
        authRequired: true,
      },
    },
    {

      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/forgetpassword',
      name: 'forgetPassword',
      component: ForgetPassword

    },
    {
      path: '/shopdetails/:shopid',
      name: 'shopdetails',
      component: ShopDetails,
      meta: {
        authRequired: true,
      },
    },
    // admin routes
    {
      path: '/admin',
      name: 'AdminHome',
      component: AdminHome,
      meta: {
        adminRequired: true,
      },
    },
    {
      path: '/admin/appointment',
      name: 'AdminAppointment',
      component: AdminAppointment,
      meta: {
        adminRequired: true,
      },
    },
    {
      path: '/admin/shop',
      name: 'AdminManageShop',
      component: AdminManageShop,
      meta: {
        adminRequired: true,
      },
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
  ]
})

import { getAuth, onAuthStateChanged } from 'firebase/auth'

router.beforeEach((to, from, next) => {
  const auth = getAuth()
  if (to.matched.some(record => record.meta.authRequired)) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next();
      }
      else {
        // alert('You must be logged in to see this page');
        next({
          path: '/',
        });
      }
    });
  }
  else if (to.matched.some(record => record.meta.adminRequired)) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user.getIdTokenResult().then(idTokenResult => {
          console.log(idTokenResult)
          if (idTokenResult.claims.role === 'admin') {
            next();
          }
          else {
            next({
              path: '/',
            });
          }
        })
      }
      else {
        // alert('You must be logged in to see this page');
        next({
          path: '/',
        });
      }
    });
  }
  else {
    next();
  }
});

export default router
