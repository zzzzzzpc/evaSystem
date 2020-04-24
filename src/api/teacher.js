import request from '../utils/request.js'
import QS from 'qs'

// let domain = "http://148.70.15.23:8000/"
let domain = "/"

export default {
  //请求老师基本信息
  getInfo(tno) {
    return request({
      url: domain+'teacherInfo/',
      method: 'post',
      data: QS.stringify({
        'tno': tno
      })
    })
  },
  //获取老师所教的课程
  getCourseInfo(tno) {
    return request({
      url: domain+'teaCourseInfo/',
      method: 'post',
      data: QS.stringify({
        'tno': tno
      })
    })
  },
  //获取课程的教学大纲内容
  getCourseDetail(cno) {
    return request({
      url: domain+'teaCourseDetail/',
      method: 'post',
      data: QS.stringify({
        'cno': cno
      })
    })
  },
  //获取选这门课的学生名单
  getCourseStu(cno) {
    return request({
      url: domain+'teaCourseStu/',
      method: 'post',
      data: QS.stringify({
        'cno': cno
      })
    })
  },
  //上传老师给指标点的分值
  postIndexDetailScore(cno, sno, index_detail_id, score) {
		console.log("asas"+sno)
    return request({
      url: domain+'teaCourseIndexDetailScore/',
      method: 'post',
      data: QS.stringify({
        'cno': cno,
        'sno': sno,
        'index_detail_id': index_detail_id,
        'score': score
      })
    })
  },
  //获取这个学生在某个课程指标点的登记情况
  getIndexDetailState(cno, sno) {
    return request({
      url: domain+'teaIndexDetailState/',
      method: 'post',
      data: QS.stringify({
        'cno': cno,
        'sno': sno
      })
    })
  },

  //查看某个学生某门课的具体成绩指标点以及总成绩
  getIndexDetailScore(cno, sno) {
    return request({
      url:domain+'teaIndexDetailScore/',
      method: 'post',
      data:QS.stringify({
        'cno': cno,
        'sno': sno

      })
    })
  },
  //获取这个教师下的通知
  getInform(tno) {
    return request({
      url:domain+'teaInform/',
      method: 'post',
      data:QS.stringify({
        'tno': tno,

      })
    })
  }



}
