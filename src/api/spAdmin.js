import request from '../utils/request.js'

export default {
	getIndex() {
		return request({
			url:'/spIndex',
			method:'post',
			data: {
			}
		})
	},
  submitIndex(newIndexName, newIndexContent){
    return request({
    	url:'/spSubmitIndex',
    	method:'post',
    	data: {
        index_name:newIndexName,
        index_content:newIndexContent
    	}
    })
  },
  removeIndex(indexId){
    return request({
      url:'/spRemove',
      method:'post',
      data:{
        index_id: indexId
      }
    })
  },
  getIndexDetail(indexId){
    return request({
      url:'/spIndexDetail',
      method:'post',
      data:{
        index_id : indexId
      }
    })
  }

}
