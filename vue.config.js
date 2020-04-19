module.exports = {
	//baseUrl:'/',
	lintOnSave:false,
	productionSourceMap:false,
	devServer:{
		host:'localhost',
		port:8080,
		open:true,
		proxy:{
			'/api':{
				target:'http://148.70.15.23:8000/',
				ws:true,
				changeOrigin:true,
				pathRewrite:{
				 	'^/api':'/'
				}
			}
		}, //配置多个代理
	}
}
