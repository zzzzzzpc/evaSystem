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
				index1: "唱歌",
				index2: "跳舞",
				index3: "籃球",
				index4: "rapppppr"
			}
		},
		components: {
			Layout
		},
		methods: {
			getInfo() {
				TeacherApi.getInfo(3).then(res => {
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
