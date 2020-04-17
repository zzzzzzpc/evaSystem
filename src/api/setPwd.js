import request from '../utils/request.js'

export default {
	setPwd(id, pwd) {
		return request({
			url:'/setPwd',
			method:'post',
			data: {
				'id' : id,
				'pwd' : pwd
			}
		})
	}
}
