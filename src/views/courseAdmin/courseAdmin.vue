<template>
	<CALayout :name="name"
  :id="id" :index1="index1"
  :index2="index2" :index3="index3"
  :index4="index4" :role="role"></CALayout>
</template>

<script>
	import CALayout from '../../components/layout/layout4.vue'
	import TeacherApi from '../../api/teacher.js'
	import '../../assets/style/layout.css'

	export default {
		data() {
			return {
				name: "严二轩",
				id: "",
				role:"",
				index1: "负责课程信息",
				index2: "审核课程成绩",
				index3: "管理个人信息",
        index4: "退出系统登录"
			}
		},
		components: {
			CALayout
		},
		methods: {
		},
		created() {
		},

	}
</script>
<style>
</style>
