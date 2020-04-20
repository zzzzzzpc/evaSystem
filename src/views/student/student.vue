<template>
	<StuLayout :name="name" :id="id"
  :index1="index1" :index2="index2"
  :index3="index3" :index4="index4"
  :role="role"></StuLayout>
</template>
<script>
	import StuLayout from '../../components/layout/layout4.vue'
	import StudentApi from '../../api/student.js'
	import '../../assets/style/layout.css'

	export default {
		data() {
			return {
				name: "",
				id: "",
        role:"",
				index1: "查询学业信息",
				index2: "查看预警通知",
				index3: "修改个人信息",
				index4: "退出系统登录"
			}
		},
		components: {
			StuLayout
		},
		methods: {
			getInfo() {
				StudentApi.getInfo(this.$store.state.id).then(res => {
					this.$store.state.name = res.sname
					this.name = res.sname
					this.id = this.$store.state.id
					this.$store.state.role = '学生'
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
