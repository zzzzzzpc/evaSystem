import request from '../utils/request.js'

export default {
  //请求课程负责人基本信息
  getInfo(tno) {
    return request({
      url: '/courseAdmin',
      method: 'post',
      data: {
        'tno': tno,
      }
    })
  },
  //获取课程负责人负责的课程
  getCourseInfo(tno) {
    return request({
      url: '/caCourseInfo',
      method: 'post',
      data: {
        'tno': tno,
      },
    })
  },
  //获取课程的教学大纲内容
  getCourseDetail(cno) {
    return request({
      url: '/caCourseDetail',
      method: 'post',
      data: {
        'cno': cno,
      }
    })
  },
  //获取选这门课的学生名单
  getCourseStu(cno) {
    return request({
      url: '/caCourseStu',
      method: 'post',
      data: {
        'cno': cno
      }
    })
  },
  //修改改学生在某门课的成绩的审核状态
  setCourseState(sno, cno, state){
    return request({
      url:'/caCourseState',
      method:'post',
      data:{
        'sno':sno,
        'cno':cno,
        'state':state,//state状态，1是已经审核，0是没有通过审核
      }
    })
  }

}
