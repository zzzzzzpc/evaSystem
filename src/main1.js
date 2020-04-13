// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
// import jQuery from 'jquery'
// import 'bootstrap'
// 引入axios，并加到原型链中
import axios from 'axios';
Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/api'  //关键代码

//自己写的样式
import './assets/css/style-login.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

// 添加请求拦截器
// axios.interceptors.request.use(function (config) {
// 　　// 在发送请求之前做些什么
// if (window.localStorage.getItem('access-token')) {
//     config.headers.Authorization = window.localStorage.getItem('access-token');
// }
// console.log(window.localStorage.getItem('access-token'));
// 　　return config
// }, function (error) {
// 　　// 对请求错误做些什么
// return Promise.reject(error)
// });
 
// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
// 　　// 对响应数据做点什么
// 　　return response
// }, function (error) {
// 　　// 对响应错误做点什么
// 　　return Promise.reject(error)
// });

// import axios from 'axios'
const service = axios.create({
	baseUrl: '/login',
	timeout: 5000
})

service.interceptors.request.use(
	config => {
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

service.interceptors.response.use(
	response => {
		const res = response.data
		return res
	},
	error => {

	}
)

export default service
