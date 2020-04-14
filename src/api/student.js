import request from '../utils/request.js'

export default {
	getInfo(id) {
		return request({
			url:'/student',
			method:'post',
			data: {
				'id' : id,
			}
		})
	}
	
}