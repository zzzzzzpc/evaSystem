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
import CourseAdmin from '../views/courseAdmin/courseAdmin.vue'
import Review from '../components/caFun/review.vue'
import SpAdmin from '../views/spAdmin/sp.vue'
import SPFormat from '../components/spFun/spFormat.vue'
import SPCharts from '../components/spFun/charts.vue'
import Tutor from '../views/tutor/tutor.vue'
import caCourseInfo from '../components/caFun/courseInfo.vue'

Vue.use(VueRouter)

  const routes = [
  {
	  path:'/',
	  name:'Login',
	  component: Login
  },
  {
	  path:'/teacherInfo',
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
     path:'/studentInfo',
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
    {
      path:'/courseAdminInfo',
      name:'CourseAdmin',
      component: CourseAdmin,
      children:[
        {
            path: 'navigation1',
        		name: 'caCourseInfo',
            component: caCourseInfo
        },
        {

        		path:'navigation2',
        		name: 'caReview',
        		component: Review
        },
        {
            path:'navigation3',
            name: 'caChangeInfo',
            component: ChangeInfo
        }
      ]
     },
     {
       path:'/spAdminInfo',
       name:'spAdmin',
       component: SpAdmin,
       children:[
         {
             path: 'navigation1',
         		 name: 'spFormat',
             component: SPFormat,
         },
         {

         		path:'navigation2',
         		name: 'spCharts',
         		component: SPCharts
         },
         {
             path:'navigation3',
             name: 'spChangeInfo',
             component: ChangeInfo
         }
       ]
      },
	  {
	    path:'/tutorInfo',
	    name:'TutorInfo',
	    component: Tutor,
	    children:[
	      {
	          path: 'navigation1',
	      		 name: 'tutorFormat',
	          component: SPCharts,
	      },
	      {

	      		path:'navigation2',
	      		name: 'tutorChangeInfo',
	      		component: ChangeInfo
	      },
	      // {
	      //     path:'navigation3',
	      //     name: 'tutorChangeInfo',
	      //     component: ChangeInfo
	      // }
	    ]
	   },
]

const router = new VueRouter({
  routes
})

export default router
