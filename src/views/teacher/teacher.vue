<template>
	<TeaLayout :name="name"
  :id="id" :index1="index1"
  :index2="index2" :index3="index3"
  :index4="index4" :role="role"></TeaLayout>
</template>

<script>
	import TeaLayout from '../../components/layout/layout4.vue'
	import TeacherApi from '../../api/teacher.js'
	import '../../assets/style/layout.css'

	export default {
		data() {
			return {
				name: "",
				id: "",
				role:"",
				index1: "所授课程信息",
				index2: "管理学生成绩",
				index3: "管理个人信息",
				index4: "退出系统登录"
			}
		},
		components: {
			TeaLayout
		},
		methods: {
			getInfo() {
				TeacherApi.getInfo(this.$store.state.id).then(res => {
          this.$store.state.name = res.tname
					this.name = res.tname
					this.id = this.$store.state.id
          this.$store.state.role = '老师'
					this.role = this.$store.state.role
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
