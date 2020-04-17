import Vue from 'vue'
import VueRouter from 'vue-router'
import Student from '../views/student/student.vue'
import Login from '../views/login/login.vue'
import Teacher from '../views/teacher/teacher.vue'
import teaCourseInfo from '../components/teacherFun/courseInfo.vue'
import teaSignUpScore from '../components/teacherFun/signUpScore.vue'
import ChangeInfo from '../components/common/ChangeInfo.vue'
import stuCourseInfo from '../components/studentFun/courseInfo.vue'
import stuWarning from '../components/studentFun/warning.vue'

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
          path: 'navigation1',
      		name: 'teaCourseInfo',
          component: teaCourseInfo
      },
      {

      		path:'navigation2',
      		name: 'teaSignUpScore',
      		component: teaSignUpScore
      },
      {
          path:'navigation3',
          name: 'teaChangeInfo',
          component: ChangeInfo
      }
    ]
   },
   {
     path:'/student',
     name:'Student',
     component: Student,
     children:[
       {
           path: 'navigation1',
       		name: 'stuCourseInfo',
           component: stuCourseInfo
       },
       {

       		path:'navigation2',
       		name: 'stuWarning',
       		component: stuWarning
       },
       {
           path:'navigation3',
           name: 'stuChangeInfo',
           component: ChangeInfo
       }
     ]
    },
]

const router = new VueRouter({
  routes
})

export default router
