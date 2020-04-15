let loginResult = [{
	role: 1
}]

export default {
	'post|/login': option => {
		return {
			status: 200,
			message: 'success',
			data: loginResult
		};
	},
	'post|/teacher': option => {
		return {
			status: 200,
			name: '肖夢杰',
			id: '1234567890'
		};
	},
	'post|/CourseInfo': option => {
		return {
			status: 200,
			tableData: [{
					courseId: "1-1",
					courseName: "数据结构",
					courseTag: "必修课程",
					courseCredit: 4,
				},
				{
					courseId: "1-2",
					courseName: "计算机网络",
					courseTag: "必修课程",
					courseCredit: 3.5,
				},
				{
					courseId: "1-3",
					courseName: "篮球",
					courseTag: "选修课程",
					courseCredit: 2,
				},
				{
				
					courseId: "1-4",
					courseName: "网页设计",
					courseTag: "必修课程",
					courseCredit: 1,
				},
			],
		};
	}
}
