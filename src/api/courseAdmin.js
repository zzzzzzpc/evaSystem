import request from '../utils/request.js'
import QS from 'qs'

let domain = "http://148.70.15.23:8000"
// let domain =""

export default {
  //请求课程负责人基本信息
  getInfo(tno) {
    return request({
      url: domain+'/courseAdmin/',
      method: 'post',
      data: QS.stringify({
        'tno': tno
      })
    })
  },
  //获取课程负责人负责的课程
  getCourseInfo(cano) {
    return request({
      url: domain+'/caCourseInfo/',
      method: 'post',
      data: QS.stringify({
        'cano': cano
      })
    })
  },
  //获取课程的教学大纲内容
  getCourseDetail(cno) {
    return request({
      url: domain+'/caCourseDetail/',
      method: 'post',
      data: QS.stringify({
        'cno': cno
      })
    })
  },
  //获取选这门课的班级名单
  getCourseClass(cno) {
    return request({
      url: domain+'/caCourseClass/',
      method: 'post',
      data: QS.stringify({
        'cno': cno
      })
    })
  },
  //修改改班级在某门课的成绩的审核状态
  setCourseState(classno, cno, state){
    return request({
      url: domain+'/caCourseState/',
      method:'post',
      data:QS.stringify({
        'classno':classno,
        'cno':cno,
        'state':state//state状态，1是已经审核，0是没有通过审核
      })
    })
  },

  //获取这门课这个班某个指标点的情况
  getCourseReview(classno,cno, index_detail_id) {
    return request({
      url: domain+'/caCourseReview/',
      method:'post',
      data:QS.stringify({
        'classno':classno,
        'cno':cno,
        'index_detail_id':index_detail_id
      })
    })
  },
  //给对应老师审核不通过的通知
  informTea(cno, textarea) {
    return request({
      url: domain+'/caInform/',
      method:'post',
      data:QS.stringify({
        'cno':cno,
        'textarea':textarea//通知的内容
      })
    })
  },
  //获取这门课所有的对应的指标点
  getCourseIndexDetail(cno){
    return request({
      url: domain+'/caCourseIndexDetail/',
      method:'post',
      data:QS.stringify({
        'cno':cno,
      })
    })
  }

}
