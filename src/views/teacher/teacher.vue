<template>
	<TeaLayout :name="name" :id="id" :index1="index1" :index2="index2" :index3="index3" :index4="index4"></TeaLayout>
</template>

<script>
	import TeaLayout from '../../components/layout/teaLayout.vue'
	import TeacherApi from '../../api/teacher.js'
	import '../../assets/style/layout.css'

	export default {
		data() {
			return {
				name: "",
				id: "",
				index1: "所授课程信息",
				index2: "登记学生成绩",
				index3: "修改个人信息",
				index4: "退出系统登录"
			}
		},
		components: {
			TeaLayout
		},
		methods: {
			getInfo() {
				TeacherApi.getInfo(this.$store.state.id).then(res => {
					this.$store.commit('modify', res.id)
					this.name = res.tname
					this.id = res.tno
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
