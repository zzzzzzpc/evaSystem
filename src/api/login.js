import request from '../utils/request.js'

export default {
	login(id, pwd) {
		return request({
			url:'/login',
			method:'post',
			data: {
				'id' : id,
				'pwd' : pwd
			}
		})
	}
}