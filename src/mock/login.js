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
	'post|/student': option =>{
		return {
			status: 200,
			name : '言言',
			id: '1234567890'
		};
	}
}

