<template>
	<TULayout :name="name" :id="id"
  :index1="index1" :index2="index2"
  :index3="index3"
  :role="role"></TULayout>
</template>
<script>
	import TULayout from '../../components/layout/layout3.vue'
	import '../../assets/style/layout.css'

	export default {
		data() {
			return {
				name: "",
				id: "",
        role:"",
				index1: "成绩数据分析",
				index2: "修改个人信息",
				index3: "退出系统登录",
			}
		},
		components: {
			TULayout
		},
		methods: {
			// getInfo() {
			// 	StudentApi.getInfo(3).then(res => {
			// 		this.$store.state.name = res.sname
			// 		this.name = res.sname
			// 		this.id = this.$store.state.id
			// 		this.$store.state.role = '专业负责人'
			// 		this.role = this.$store.state.role
			// 	})
			// }
		},
		created() {
			// this.getInfo()
		},

	}
</script>

<style>

</style>
