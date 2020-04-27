<template>
	<div>
	  <header class="header" id="myheader">
	    <div class="header__content">
	      <div class="header__logo">
	        <img style="height: 60px;margin-right: 20px;" src="../../assets/img/badge.png"/>
	        <h1 style="font-family: 'Avenir', Helvetica, Arial, sans-serif;color: white;">西北大学毕业管理系统</h1>
	        <el-tag type="primary" style="margin-left:10px;margin-top: 5px;">{{role}}端</el-tag>
	      </div>
	      <div class="header__profile">
	        <a class="dropdown-toggle header__profile-btn" href="#" role="button" id="dropdownMenuProfile" aria-haspopup="true" aria-expanded="false">
	          <img src="@/assets/img/user.png" alt="">
	          <span>{{name}}</span>
	        </a>
	      </div>
	    </div>
	  </header>

	  <div class="user">
	    <div class="user__btns" style="text-align: center;">
	    	<h3>菜单</h3>
	    </div>
	    <div class="user__btns">
	    	<router-link to="navigation1" class="user__btn user__btn--blue"><span>{{index1}}</span></router-link>
	    </div>
	    <div class="user__btns">
	    	<router-link to="navigation2" class="user__btn user__btn--blue"><span>{{index2}}</span></router-link>
	    </div>
	    <div class="user__btns">
	    	<router-link to="/" class="user__btn user__btn--blue"><span>{{index3}}</span></router-link>
	    </div>
	  </div>

    <div class="center">
       <div class="transition-box" style="background-color: #CC5A5A;">预警学生信息</div>
      <el-table ref="filterTable" :data="tableData.slice((currentPage-1) * pagesize, currentPage * pagesize)" style="width: 100%">
        <el-table-column prop="sname" label="姓名" sortable column-key="courseId">
        </el-table-column>
        <el-table-column prop="sno" label="学号">
        </el-table-column>
        <el-table-column prop="grade_id" label="班级">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button-group>
              <el-button type="danger" icon="el-icon-search" circle @click="warning(scope.row)"></el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin: 0 auto;margin-top: 30px;">
        <el-pagination background layout="prev, pager, next" :total="total" @current-change="current_change">
        </el-pagination>
      </div>

      <el-dialog width="30%" :title="innerTitleInfo" :visible.sync="visible" append-to-body>

        <el-table :data="courseData.slice((currentPage1-1) * pagesize, currentPage1 * pagesize)" style="width: 100%">
          <el-table-column prop="cname" label="课程名" width="180">
          </el-table-column>
          <el-table-column prop="cno" label="课程号" width="180">
          </el-table-column>
        </el-table>
        <div style="margin: 0 auto;margin-top: 30px;">
          <el-pagination background layout="prev, pager, next" :total="total1" @current-change="current_change1">
          </el-pagination>
        </div>
      </el-dialog>



    </div>

	  <router-view></router-view>
	</div>
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
        currentPage1:1,
        visible:false,
        courseData:[],
        total1:[],
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
          this.total1 = (Math.ceil(this.courseData.length / this.pagesize)) * 10
        })
      },
      current_change(currentPage) {
        this.currentPage = currentPage
      },
      current_change1(currentPage) {
        this.currentPage1 = currentPage
      },

		},
    created(){
      tutorApi.getWarningStu(this.$store.state.id).then(res=>{
        this.tableData = res.tableData
        this.total = (Math.ceil(this.tableData.length / this.pagesize)) * 10
      })
      this.role = this.$store.state.role
    }


	}
</script>

<style>
</style>
