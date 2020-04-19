import request from '../utils/request.js'
import QS from 'qs'

export default {
	setPwd(id, pwd) {
		return request({
			url:'/setPwd',
			method:'post',
			data: QS.stringify({
				'id' : id,
				'pwd' : pwd
			})
		})
	}
}
