import request from '../utils/request.js'
import QS from 'qs'

// let domain = "http://148.70.15.23:8000/"
let domain = "/"

export default {
  //获取学生姓名
	getInfo(sno) {
		return request({
			url: domain+'studentInfo/',
			method:'post',
			data: QS.stringify({
				'sno' : sno
			})
		})
	},
  //获取学生所选课程大纲内容及其分值
  getCourseDetailScore(sno,cno) {
    return request({
      url: domain+'stuCourseDetailScore/',
      method: 'post',
      data: QS.stringify({
        'cno': cno,
        'sno' :sno
      })
    })
  },
  //获取学生选了哪些课
  getCourseStuSelect(sno) {
    return request({
      url: domain+'stuCourseSelect/',
      method: 'post',
      data: QS.stringify({
        'sno': sno
      })
    })
  },
  //获取课程预警
  getCourseWarningStu(sno) {
    return request({
      url:domain+'stuWarning/',
      method:'post',
      data:QS.stringify({
        'sno' : sno
      })
    })
  },
  //获取这个学生在每个指标点的分数情况
  getIndexStu(sno) {
    return request({
      url: domain+'stuIndex/',
      method:'post',
      data:QS.stringify({
        'sno':sno
      })
    })
  }

}
