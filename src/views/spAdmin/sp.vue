<template>
	<SPLayout :name="name" :id="id"
  :index1="index1" :index2="index2"
  :index3="index3" :index4="index4"
  :role="role"></SPLayout>
</template>
<script>
	import SPLayout from '../../components/layout/layout4.vue'
	import StudentApi from '../../api/student.js'
	import '../../assets/style/layout.css'

	export default {
		data() {
			return {
				name: "",
				id: "",
        role:"",
				index1: "格式化培养方案",
				index2: "成绩数据分析",
				index3: "修改个人信息",
				index4: "退出系统登录"
			}
		},
		components: {
			SPLayout
		},
		methods: {
			getInfo() {
				StudentApi.getInfo(3).then(res => {
					this.$store.state.name = res.sname
					this.name = res.sname
					this.id = this.$store.state.id
					this.$store.state.role = '专业负责人'
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
