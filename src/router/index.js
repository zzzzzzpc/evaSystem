import Vue from 'vue'
import VueRouter from 'vue-router'
import Student from '../views/student/student.vue'
import Login from '../views/login/login.vue'
import Teacher from '../views/teacher/teacher.vue'
import CourseInfo from '../components/teacherFun/courseInfo.vue'
import SignUpScore from '../components/teacherFun/signUpScore.vue'
import SelectedCourses from '../components/studentFun/selectedCourses.vue'
import Warning from '../components/studentFun/warning.vue'

Vue.use(VueRouter)

  const routes = [
  {
	  path:'/',
	  name:'Login',
	  component: Login
  },
  {
	  path:'/teacher',
	  name:'Teacher',
	  component: Teacher,
    children:[
      {
          path: '/tea_navigation1',
      		name: 'CourseInfo',
          component: CourseInfo
      },
      {

      		path:'/tea_navigation2',
      		name: 'SignUpScore',
      		component: SignUpScore
      }

    ]
   },



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
