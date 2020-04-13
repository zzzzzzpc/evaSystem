import Vue from 'vue'
import VueRouter from 'vue-router'
import Student from '../views/student/student.vue'
import Login from '../views/login/login.vue'
import Teacher from '../views/teacher/teacher.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/student',
    name: 'Student',
    component: Student
  },
  {
	  path:'/',
	  name:'Login',
	  component: Login
  },
  {
	  path:'/teacher',
	  name:'Teacher',
	  component: Teacher
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
