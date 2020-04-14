<template>
	<el-container class="homeWrap">
		<el-header>
			<i class="el-icon-user-solid"></i>
			姓名:{{name}}&nbsp;&nbsp;
			<i class="el-icon-collection-tag"></i>
			ID:{{id}}

		</el-header>
		<el-container>
			<el-aside width="200px">

				<el-col :span="24">

					<el-menu :default-active="$route.path" router>
						<el-menu-item index="/navigation1">
							<i class="el-icon-crop"></i>
							<span slot="title">{{index1}}</span>
						</el-menu-item>
						<el-menu-item index="/navigation2">
							<i class="el-icon-crop"></i>
							<span slot="title">{{index2}}</span>
						</el-menu-item>
						<el-menu-item insdex="/" disabled>
							<i class="el-icon-crop"></i>
							<span slot="title">{{index3}}</span>
						</el-menu-item>
						<el-menu-item index="/">
							<i class="el-icon-crop"></i>
							<span slot="title">{{index4}}</span>
						</el-menu-item>
					</el-menu>
				</el-col>
			</el-aside>
			<el-main>
				<router-view />
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	export default {
		props: ["name", "id", "index1", "index2", "index3", "index4"],

		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
</style>
