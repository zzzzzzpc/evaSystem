import request from '../utils/request.js'

export default {
  //获取学生姓名
	getInfo(sno) {
		return request({
			url:'/student',
			method:'post',
			data: {
				'sno' : sno,
			}
		})
	},
  //获取学生所选课程大纲内容及其分值
  getCourseDetailScore(sno,cno) {
    return request({
      url: '/stuCourseDetailScore',
      method: 'post',
      data: {
        'cno': cno,
        'sno' :sno,
      }
    })
  },
  //获取学生选了哪些课
  getCourseStuSelect(sno) {
    return request({
      url: '/stuCourseSelect',
      method: 'post',
      data: {
        'sno': sno
      }
    })
  },
  //获取课程预警
  getCourseWarningStu(sno) {
    return request({
      url:'/stuWarning',
      method:'post',
      data:{
        'sno' : sno
      }
    })
  },
  //获取这个学生在每个指标点的分数情况
  getIndexStu(sno) {
    return request({
      url: '/stuIndex',
      method:'post',
      data:{
        'sno':sno
      }
    })
  }

}
