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
	}
}