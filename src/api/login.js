import request from '../utils/request.js'

export default {
	login(id, pwd) {
		return request({
			url:'/login',
			method:'post',
			data: {
				'id' : id,//登录用户的id
				'pwd' : pwd//登录用户的密码
			}
		})
	}
}