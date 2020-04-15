<template>
	<Layout :name="name" :id="id" :index1="index1" :index2="index2" :index3="index3" :index4="index4"></Layout>
	
</template>

<script>
	import Layout from '../../components/layout.vue'
	import TeacherApi from '../../api/teacher.js'
	import '../../assets/style/layout.css'

	export default {
		data() {
			return {
				name: "",
				id: "",
				index1: "所授课程信息",
				index2: "等级学生成绩",
				index3: "修改个人信息",
				index4: "退出系统登录"
			}
		},
		components: {
			Layout
		},
		methods: {
			getInfo() {
				TeacherApi.getInfo(this.$store.state.id).then(res => {
					this.$store.commit('modify', res.id)
					this.name = res.name
					this.id = res.id
				})
			}
		},
		created() {
			this.getInfo()
		},

	}
</script>

<style>

</style>
