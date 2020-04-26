<template>
	<el-container class="homeWrap">
		<el-header>
      <p style="font-family:PingFang SC;">西北大学毕业管理系统
      <el-tag type="primary" style="margin-left:10px;">{{role}}端</el-tag>
      </p>
		</el-header>
		<el-container>
			<el-aside width="200px">
				<el-col :span="24">
					<el-menu :default-active="$route.path" router>
            <el-menu-item index="navigation1">
							<i class="el-icon-notebook-1"></i>
							<span slot="title">{{index1}}</span>
						</el-menu-item>
            </rooter-link>
						<el-menu-item index="navigation2">
							<i class="el-icon-document-add"></i>
							<span slot="title">{{index2}}</span>
						</el-menu-item>
						<el-menu-item index="/">
							<i class="el-icon-suitcase"></i>
							<span slot="title">{{index3}}</span>
						</el-menu-item>
					</el-menu>
				</el-col>

			</el-aside>
			<el-main>

        <div class = "center">
				<div class="transition-box">预警学生名单</div>
				<el-table ref="filterTable" :data="tableData.slice((currentPage-1) * pagesize, currentPage * pagesize)" style="width: 100%">
				  <el-table-column prop="sname" label="学生姓名" sortable width="180" column-key="courseId">
				  </el-table-column>
				  <el-table-column prop="sno" label="学号">
				  </el-table-column>
				  <el-table-column prop="grade_id" label="所在班级" width="100">
				  </el-table-column>
          <el-table-column fixed="right" label="查看预警科目">
            <template slot-scope="scope">
              <el-button type="danger" icon="el-icon-search" circle @click="warning(scope.row)"></el-button>
            </template>
          </el-table-column>
				</el-table>
        <p></p>
        <div style="margin: 0 auto;margin-top: 20px;">
          <el-pagination background layout="prev, pager, next" :total="total" @current-change="current_change">
          </el-pagination>
        </div>
        </div>

        <el-dialog width="30%" title="预警科目(达成度小于0.65)" :visible.sync="visible" append-to-body>

          <el-table :data="courseData" style="width: 100%">
            <el-table-column prop="cname" label="课程名" width="180">
            </el-table-column>
            <el-table-column prop="cno" label="课程号" width="180">
            </el-table-column>
          </el-table>
        </el-dialog>

				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
  import tutorApi from '../../api/tutor.js'
	export default {

    data(){
      return{
        tableData:[],
        pagesize:4,
        total:0,
        currentPage:1,
        visible:false,
        courseData:[],
      }
    },

		props: ["name", "id", "index1", "index2", "index3", "role"],

		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
      warning(row) {
        this.visible = true
        tutorApi.getWarningCourse(row.sno).then(res=>{
          this.courseData = res.tableData
        })
      },
      current_change(currentPage) {
        this.currentPage = currentPage
      },
		},
    created(){
      tutorApi.getWarningStu(this.$store.state.id).then(res=>{
        this.tableData = res.tableData
      })
    }


	}
</script>

<style>
   .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
</style>
