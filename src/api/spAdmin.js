import request from '../utils/request.js'

export default {
  //获取所有学业要求
  getIndex() {
    return request({
      url: '/spIndex',
      method: 'post',
      data: {}
    })
  },
  //提交学业要求
  submitIndex(newIndexName, newIndexContent) {
    return request({
      url: '/spSubmitIndex',
      method: 'post',
      data: {
        index_name: newIndexName,
        index_content: newIndexContent
      }
    })
  },
  //移除学业要求
  removeIndex(indexId) {
    return request({
      url: '/spRemove',
      method: 'post',
      data: {
        index_id: indexId
      }
    })
  },
  //获取某个要求下的指标点
  getIndexDetail(indexId) {
    return request({
      url: '/spDetail',
      method: 'post',
      data: {
        index_id: indexId
      }
    })
  },
  //提交某个要求下的指标点
  submitIndexDetail(indexId, indexDetailContent) {
    return request({
      url: '/spContentDetail',
      method: 'post',
      data: {
        index_id: indexId,
        index_detail_content: indexDetailContent
      }
    })
  },
  //移除某个要求下的指标点
  removeIndexDetail(indexId, indexDetailId) {
    return request({
      url: '/IndexDetailRemove',
      method: 'post',
      data: {
        index_id: indexId,
        index_detail_id: indexDetailId
      }
    })
  },


  //获取某个指标点下的所有课程
  getCourse(indexDetailId) {
    return request({
      url: '/spCourse',
      method: 'post',
      data: {
        index_detail_id: indexDetailId
      }
    })
  },

  //获取所有指标点
  allIndextDetail(indexDetailId) {
    return request({
      url: '/spAllIndexDetail',
      method: 'post',
      data: {
        // index_detail_id: indexDetailId
      }
    })
  },

  //在某个指标点里面移除一门课
  removeCourse(indexDetailId, courseId) {
    return request({
      url:'/RemoveCourse',
      method: 'post',
      data:{
        index_detail_id : indexDetailId,
        cno: courseId
      }
    })
  },

  //显示某个指标点不包括的课程
  showCourse(indexDetailId) {
    return request({
      url:'/spShowCourse',
      method:'post',
      data:{
        index_detail_id: indexDetailId
      }
    })
  },

  //在某个指标点增加一门课程
  addCourse(indexDetailId, courseId) {
    return request({
      url:'/spAddCourse',
      method:'post',
      data:{
        index_detail_id: indexDetailId,
        cno: courseId
      }
    })
  },

  //获取所有课程的平均分！
  getAllCourseAvg(){
	  return request({
	    url:'/spGetAllCourseScore',
	    method:'post',
	    data:{
	    }
	  })
  },

  //获取每个班级平均的分数
  getAllClassAvg(){
    return request({
      url:'/spGetAllClassScore',
      method:'post',
      data:{
      }
    })
  },

  //获取整个年级平均分！！！
  getAvg(){
    return request({
      url:'/spTotalAvg',
      method:'post',
      data:{
      }
    })
  }

}
