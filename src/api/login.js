import request from '../utils/request.js'
// 引入qs模块，用来序列化post类型的数据
import QS from 'qs'

export default {
	login(id, pwd) {
		// let param = new URLSearchParams();
		// param.append("id", id);
		// param.append("pwd", pwd);
		return request({
			url:'/login',
			method:'post',
			data: QS.stringify({
				'id':id,
				'pwd':pwd
			})
		})
	}
}