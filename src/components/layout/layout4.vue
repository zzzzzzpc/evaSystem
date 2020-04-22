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
      	<router-link to="navigation3" class="user__btn user__btn--blue"><span>{{index3}}</span></router-link>
      </div>
      <div class="user__btns">
      	<router-link to="/" class="user__btn user__btn--blue"><span>{{index4}}</span></router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

	export default {

		props: ["name", "id", "index1", "index2", "index3", "index4", "role"],
		created() {
			this.role = this.$store.state.role
		}
	}
</script>

<style>
  .header {
    position: fixed;
    background-color: #2d2f32;
    top: 0;
    left: 0;
    right: 0;
  }
  .header__content {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -moz-box-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 80px;
    position: relative;
    padding-left: 50px;
    padding-right: 50px;
  }
  .header__profile {
    position: relative;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -moz-box-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 70px;
    margin-left: 15px;
  }
  .header__profile-btn {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -moz-box-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 40px;
    width: 100px;
  }
  .header__profile-btn img {
    display: block;
    width: 36px;
    height: 36px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
  }
  .header__profile-btn span {
    margin-left: 10px;
    color: #FFFFFF;
    text-decoration: none;
  }
  .header__logo {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -moz-box-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 50px;
    width: 500px;
    margin-left: 10px;
  }
  .user {
    position: relative;
    margin-bottom: 20px;
    top:100px;
    left:40px;
    background-color: beige;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    overflow: hidden;
    -webkit-box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1);
    box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1);
    float: left;
    width: 230px;
  }
  .user__btns {
    padding: 20px;
    border-left: 1px solid rgba(133,153,171,0.2);
    border-right: 1px solid rgba(133,153,171,0.2);
    border-top: 1px solid rgba(133,153,171,0.2);
  }
  .user__btn {
    /* width: ; */
    margin: 0 auto;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -moz-box-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 40px;
    width:150px;
    /* width: calc(50% - 10px); */
    -webkit-border-radius: 4px;
    border-radius: 4px;
    font-size: 14px;
    position: relative;
    overflow: hidden;
    color: #fff;
    font-weight: 600;
    text-decoration:none;
  }
  .user__btn:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    transition: 0.4s;
    opacity: 1;
  }
  .user__btn span {
    position: relative;
    z-index: 2;
  }
  .user__btn--blue {
    background: linear-gradient(45deg, rgba(55,150,246,0.5) 0%, rgba(55,150,246,0.05) 100%);
  }
  .user__btn--blue:before {
    background-color: #3796f6;
  }
  .user__btn--blue:hover {
    color: #3796f6;
  }
  .user__btn--blue:hover:before {
    opacity: 0;
  }
</style>
