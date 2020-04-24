import request from '../utils/request.js'
// 引入qs模块，用来序列化post类型的数据
import QS from 'qs'

// let domain = "http://148.70.15.23:8000/"
let domain = "/"

export default {
	getWarningStu(id, pwd) {
		return request({
			url:domain+"tutorWarning/",
			method:'post',
			data: QS.stringify({
				'id':id,//导员的工号
			})
		})
	},
  getWarningCourse(sno){
    return request({
    	url:domain+"tutorWarnCourse/",
    	method:'post',
    	data: QS.stringify({
    		'sno':sno,//学生的学号
    	})
    })
  }
}
