<template>
	<el-container class="homeWrap">
		<el-header >
      <p style="font-family:PingFang SC">西北大学毕业管理系统
      <el-tag type="primary">{{role}}端</el-tag>
      </p>

			<!-- <i class="el-icon-user-solid"></i>
			姓名:{{name}}&nbsp;&nbsp;
			<i class="el-icon-collection-tag"></i>
			ID:{{id}}
      <i class="el-icon-collection-tag"></i> -->
		</el-header>
		<el-container>
			<el-aside width="200px">


				<el-col :span="24">

					<el-menu :default-active="$route.path" router >

            <el-menu-item index="navigation1">
							<i class="el-icon-notebook-1"></i>
							<span slot="title">{{index1}}</span>
						</el-menu-item>
            </rooter-link>
						<el-menu-item index="navigation2">
							<i class="el-icon-document-add"></i>
							<span slot="title">{{index2}}</span>
						</el-menu-item>
						<el-menu-item index="navigation3">
							<i class="el-icon-suitcase"></i>
							<span slot="title">{{index3}}</span>
						</el-menu-item>
						<el-menu-item index="/">
							<i class="el-icon-switch-button"></i>
							<span slot="title">{{index4}}</span>
						</el-menu-item>
					</el-menu>
				</el-col>

			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>

	export default {

		props: ["name", "id", "index1", "index2", "index3", "index4", "role"],

		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		created() {
			this.role = this.$store.state.role
		}
	}
</script>

<style>
   .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
</style>
