let loginResult = [{
	role : 1
}]

export default {
	'post|/login': option =>{
		return {
			status: 200,
			message : 'success',
			data: loginResult
		};
	},
	'post|/teacher': option =>{
		return {
			status: 200,
			name : '肖夢杰',
			id: 'xmj5201314'
		};
	}
}

