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
</style>
