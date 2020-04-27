import request from '../utils/request.js'
import QS from 'qs'

let domain = "http://148.70.15.23:8000/"
// let domain = "/"

export default {
  //获取所有学业要求
  getIndex() {
    return request({
      url: domain+'spIndex/',
      method: 'post',
      data: {}
    })
  },
  //提交学业要求
  submitIndex(newIndexName, newIndexContent) {
    return request({
      url: domain+'spSubmitIndex/',
      method: 'post',
      data: QS.stringify({
        index_name: newIndexName,
        index_content: newIndexContent
      })
    })
  },
  //移除学业要求
  removeIndex(indexId) {
    return request({
      url: domain+'spRemove/',
      method: 'post',
      data: QS.stringify({
        index_id: indexId
      })
    })
  },
  //获取某个要求下的指标点
  getIndexDetail(indexId) {
    return request({
      url: domain+'spDetail/',
      method: 'post',
      data: QS.stringify({
        index_id: indexId
      })
    })
  },
  //提交某个要求下的指标点
  submitIndexDetail(indexId, indexDetailContent) {
    return request({
      url: domain+'spContentDetail/',
      method: 'post',
      data: QS.stringify({
        index_id: indexId,
        index_detail_content: indexDetailContent
      })
    })
  },
  //移除某个要求下的指标点
  removeIndexDetail(indexId, indexDetailId) {
    return request({
      url: domain+'IndexDetailRemove/',
      method: 'post',
      data: QS.stringify({
        index_id: indexId,
        index_detail_id: indexDetailId
      })
    })
  },


  //获取某个指标点下的所有课程
  getCourse(indexDetailId) {
    return request({
      url: domain+'spCourse/',
      method: 'post',
      data: QS.stringify({
        index_detail_id: indexDetailId
      })
    })
  },

  //获取所有指标点
  allIndextDetail() {
    return request({
      url: domain+'spAllIndexDetail/',
      method: 'post',
      data: QS.stringify({
      })
    })
  },

  //在某个指标点里面移除一门课
  removeCourse(indexDetailId, courseId) {
    return request({
      url: domain+'RemoveCourse/',
      method: 'post',
      data: QS.stringify({
        index_detail_id : indexDetailId,
        cno: courseId
      })
    })
  },

  //显示某个指标点不包括的课程
  showCourse(indexDetailId) {
    return request({
      url: domain+'spShowCourse/',
      method:'post',
      data: QS.stringify({
        index_detail_id: indexDetailId
      })
    })
  },

  //在某个指标点增加一门课程
  addCourse(indexDetailId, courseId) {
    return request({
      url: domain+'spAddCourse/',
      method:'post',
      data: QS.stringify({
        index_detail_id: indexDetailId,
        cno: courseId
      })
    })
  },

  //获取某个指标点下所有课程的各自平均分！
  getAllCourseAvg(id){
	  return request({
	    url: domain+'spGetAllCourseScore/',
	    method:'post',
	    data: QS.stringify({
        index_detail_id:id
	    })
	  })
  },

  //获取每个班级平均个人评价值的分数
  getAllClassAvg(){
    return request({
      url:domain+'spGetAllClassScore/',
      method:'post',
      data:{
      }
    })
  },

  //获取整个年级个人评价值平均分！！！
  getAvg(){
    return request({
      url:domain+'spTotalAvg/',
      method:'post',
      data:{
      }
    })
  }

}
