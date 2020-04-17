export default {
	'post|/login': option =>{
		return {
			message : 'success',//失败返回'fail'
      role: '老师',
      //按照身份返回“学生”，
      //“老师”，“辅导员”，
      //“课程负责人”，“专业负责人”

		};
	},
	'post|/student': option =>{
		return {
			status: 200,
			sname : '言言',
			id: '1234567890'
		};
	}
}
