<template>
	<div style="display: flex;justify-content: center;margin-top: 150px;text-align: center;">
		<el-card style="width: 400px;background-color: rgba(255,255,255,0.9);">
			<div slot="header" class="clearfix">
				<h2>学生毕业管理系统</h2>
			</div>
			<el-row>
				<el-col :span="5"><i class="el-icon-user">用户名:</i></el-col>
				<el-col :span="16">
					<el-input class="sno" v-model="user.username" placeholder="请输入学号/工号"></el-input>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="5"><i class="el-icon-lock">密码:</i></el-col>
				<el-col :span="16">
					<el-input type="password" v-model="user.password" placeholder="请输入密码" @keydown.enter.native="doLogin"></el-input>
				</el-col>
			</el-row>
			
			<el-button style="width: 180px;" type="primary" @click="doLogin">登录</el-button>
		</el-card>
	</div>
</template>

<script>
	import login from '../../api/login.js'

	export default {
		//单页面中不支持前面的data:{}方式
		data() {
			//相当于以前的function data(){},这是es5之前的写法，新版本可以省略掉function
			return {
				//之前是在里面直接写username，password等等，但是这里要写return
				//因为一个组件不管要不要被其他组件用，只要这样定义了，它就会认为可能这个组件会在其他的组件中使用
				//比如说在这里定义了一个变量，然后把这个组件引入到A组件中，A组件中修改了这个变量
				//同时这个组件也在B组件中引用了，这时候A里面一修改，B里面也变了，它们用的是一个值
				//可是一般来说可能希望在不同的组件中引用的时候，使用不同的值，所以这里要用return
				//这样在A组件和B组件分别引用这个变量的时候是不会互相影响的
				user: {
					username: '',
					password: '',
					//为了登录方便，可以直接在这里写好用户名和密码的值
				}
			}
		},

		methods: {
			doLogin() { //一点击登录按钮，这个方法就会执行
				// alert(JSON.stringify(this.user)) //可以直接把this.user对象传给后端进行校验用户名和密码
				login.login(this.user.username, this.user.password).then(res => {
					if (res.message == 'success'){
					  this.$store.state.id = this.user.username
					  this.$store.state.role = res.role
					  this.$store.state.name = res.name
					  console.log("34343"+this.$store.state.role)
					  if(this.$store.state.role == "导员")
              this.$router.push({path: '/tutorInfo/navigation2'})
					  else if(this.$store.state.role == "教师")
              this.$router.push({path: '/teacherInfo/navigation3'})
					  else if(this.$store.state.role == "课程负责人")
              this.$router.push({path: '/courseAdminInfo/navigation3'})
					  else if(this.$store.state.role == "专业负责人")
              this.$router.push({path: '/spAdminInfo/navigation3'})
					  else
              this.$router.push({path: '/studentInfo/navigation3'})

					}
					else
						alert("登录失败！");
				})
			}
		},
		// 组件内路由--进入组件时
		beforeRouteEnter(to, form, next){
			window.document.body.className="login_body"
			next();
		},
		beforeRouteLeave(to, form, next){
			window.document.body.className="";
			next();
		}

	}
</script>

<style>
	.el-col i{
		margin-top: 10px;
	}
	.el-row{
		margin-bottom: 20px;
	}
	.login_body {
		background-image: url('../../assets/img/mainBg.jpg');
		filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../../assets/img/mainBg.jpg', sizingMethod='scale');
		background-position: right bottom;
		background-attachment: fixed;
		background-repeat: no-repeat;
			-webkit-background-size: cover;
			-moz-background-size: cover;
			-o-background-size: cover;
		background-size: cover;
	
	}
</style>