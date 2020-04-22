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
					console.log("45454"+res)
					console.log("45454"+res.tname)
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
  .center {
    position: relative;
    margin:0 auto;
    padding: 20px;
    top: 100px;
    border: 1px solid rgba(133,153,171,0.2);
    -webkit-box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1);
    box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1);
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background-color: #fff;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 900px;
    text-align:center;
    background-color: beige;
  }
</style>
