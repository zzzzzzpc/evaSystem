import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/views/login'
import stuinterface from '@/components/views/stuinterface'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/login',
      name: 'login',
      component: login,
	  // meta:{
		 //  title:"登录"
	  // }
    },{
      path: '/stuinterface',
      name: 'stuinterface',
      component: stuinterface
    },
  ]
})
