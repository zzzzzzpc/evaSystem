import request from '../utils/request.js'

export default {
	getInfo(tno) {
		return request({
			url: '/teacher',
			method: 'post',
			data: {
				'tno': tno,
			}
		})
	},
	getCourseInfo(tno) {
		return request({
			url: '/teaCourseInfo',
			method: 'post',
			data: {
				'tno': tno,
			},
  })
  },
  getCourseDetail(cno){
    return request({
      url: '/teaCourseDetail',
      method: 'post',
      data:{
        'cno' : cno,
      }
    })
  },
  getCourseStu(cno){
    return request({
      url: '/teaCourseStu',
      method: 'post',
      data:{
        'cno' : cno
      }
    })
  }

}
