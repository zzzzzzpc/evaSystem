import request from '../utils/request.js'
import QS from 'qs'

let domain = "http://148.70.15.23:8000/"

export default {
  //请求课程负责人基本信息
  getInfo(tno) {
    return request({
      url: domain+'courseAdmin/',
      method: 'post',
      data: QS.stringify({
        'tno': tno
      })
    })
  },
  //获取课程负责人负责的课程
  getCourseInfo(tno) {
    return request({
      url: domain+'caCourseInfo/',
      method: 'post',
      data: QS.stringify({
        'tno': tno
      })
    })
  },
  //获取课程的教学大纲内容
  getCourseDetail(cno) {
    return request({
      url: domain+'caCourseDetail/',
      method: 'post',
      data: QS.stringify({
        'cno': cno
      })
    })
  },
  //获取选这门课的学生名单
  getCourseStu(cno) {
    return request({
      url: domain+'caCourseStu/',
      method: 'post',
      data: QS.stringify({
        'cno': cno
      })
    })
  },
  //修改改学生在某门课的成绩的审核状态
  setCourseState(sno, cno, state){
    return request({
      url: domain+'caCourseState/',
      method:'post',
      data:QS.stringify({
        'sno':sno,
        'cno':cno,
        'state':state//state状态，1是已经审核，0是没有通过审核
      })
    })
  }

}
