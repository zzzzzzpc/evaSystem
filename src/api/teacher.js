import request from '../utils/request.js'

export default {
  //请求老师基本信息
  getInfo(tno) {
    return request({
      url: '/teacher',
      method: 'post',
      data: {
        'tno': tno,
      }
    })
  },
  //获取老师所教的课程
  getCourseInfo(tno) {
    return request({
      url: '/teaCourseInfo',
      method: 'post',
      data: {
        'tno': tno,
      },
    })
  },
  //获取课程的教学大纲内容
  getCourseDetail(cno) {
    return request({
      url: '/teaCourseDetail',
      method: 'post',
      data: {
        'cno': cno,
      }
    })
  },
  //获取选这门课的学生名单
  getCourseStu(cno) {
    return request({
      url: '/teaCourseStu',
      method: 'post',
      data: {
        'cno': cno
      }
    })
  },
  //上传老师给指标点的分值
  postIndexDetailScore(cno, sno, index_detail_id, score) {
    return request({
      url: '/teaCourseIndexDetailScore',
      method: 'post',
      data: {
        'cno': cno,
        'sno': sno,
        'index_detail_id': index_detail_id,
        'score': score
      }
    })
  },
  //获取这个学生在某个课程指标点的登记情况
  getIndexDetailState(cno, sno) {
    return request({
      url: '/teaIndexDetailState',
      method: 'post',
      data: {
        'cno': cno,
        'sno': sno
      }
    })
  },

  //查看某个学生某门课的具体成绩指标点以及总成绩
  getIndexDetailScore(cno, sno) {
    return request({
      url:'/teaIndexDetailScore',
      method: 'post',
      data:{
        'cno': cno,
        'sno': sno

      }
    })
  }


}
