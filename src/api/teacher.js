import request from '../utils/request.js'

export default {
	getInfo(id) {
		return request({
			url: '/teacher',
			method: 'post',
			data: {
				'id': id,
			}
		})
	},
	getCourseInfo(id) {
		return request({
			url: '/CourseInfo',
			method: 'post',
			data: {
				'id': id,
			}

		})
	}

}
