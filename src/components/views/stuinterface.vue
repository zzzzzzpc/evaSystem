<template>
	<div>
	<!-- header -->
	<header class="header">
		<div class="container">
			<div class="row">
				<div class="col-7 col-md-9 col-lg-8 col-xl-9">
					<div class="header__content">
						<!-- header logo -->
						<a href="#" class="header__logo">
							<img src="../../assets/img/logo1.svg" alt="">
						</a>
						<!-- end header logo -->
	
						<!-- header nav -->
						<ul class="header__nav">
							<li class="header__nav-item">
								<a href="#" class="header__nav-link">首页</a>
							</li>
							<li class="header__nav-item">
								<a href="#" class="header__nav-link">成绩</a>
							</li>
							<li class="header__nav-item">
								<a href="#" class="header__nav-link">页面</a>
							</li>
							<li class="header__nav-item">
								<a href="#" class="header__nav-link">页面</a>
							</li>
							<li class="header__nav-item">
								<a href="#" class="header__nav-link">页面</a>
							</li>
						</ul>
						<!-- end header nav -->
	
						<!-- header search -->
						<form action="#" class="header__search">
							<input class="header__search-input" type="text" placeholder="Search...">
							<a class="header__search-button" type="button">
								<span class="glyphicon glyphicon-search"></span>
							</a>
						</form>
						<!-- end header search -->
					</div>
				</div>
	
				<div class="col-5 col-md-3 col-lg-4 col-xl-3">
					<div class="header__content header__content_end">
						<div class="header__profile">
							<a class="dropdown-toggle header__profile-btn" href="#" role="button" id="dropdownMenuProfile" aria-haspopup="true" aria-expanded="false">
								<img src="../../assets/img/user.png" alt="">
								<span>{{this.pageData[0].sname}}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	<!-- end header -->
	
	<!-- main content -->
	<main class="main">
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-5 col-lg-3 col-xl-3">
					<!-- user -->
					<div class="user">
						<div class="user__head">
							<div class="user__img">
								<img src="../../assets/img/user_black.png" alt="">
							</div>
						</div>
						<div class="user__title">
							<h2>{{pageData[0].sname}}</h2>
							<p>{{pageData[0].classnum}}</p>
						</div>
						<div class="user__btns">
							<a href="add-project.html" class="user__btn user__btn--blue"><span>Post a project</span></a>
							<a href="add-job.html" class="user__btn user__btn--orange"><span>Post a job</span></a>
						</div>
						<ul class="user__stats">
							<li>
								<p>Following</p>
								<span>26</span>
							</li>
							<li>
								<p>Followers</p>
								<span>88</span>
							</li>
						</ul>
					</div>
					<!-- end user -->
				</div>
	
				<div class="col-12 col-md-7 col-lg-6 col-xl-6">
					<!-- post -->
					<div class="post">
						<div class="post__head">
							<a href="#" class="post__head-img">
								<img src="img/user8.jpg" alt="">
							</a>
							<div class="post__head-title">
								<h5><a href="#">Sebastian Lee</a></h5>
								<p>11 min ago</p>
							</div>
	
							<div class="post__dropdown">
								<a class="dropdown-toggle post__dropdown-btn" href="#" role="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<i class="icon ion-md-more"></i>
								</a>
	
								<ul class="dropdown-menu dropdown-menu-right post__dropdown-menu" aria-labelledby="dropdownMenu1">
									<li><a href="#">Edit</a></li>
									<li><a href="#">Delete</a></li>
									<li><a href="#">Hide</a></li>
								</ul>
							</div>
						</div>
	
						<div class="post__wrap">
							<div class="post__company">
								<i class="icon ion-ios-briefcase"></i>
								<span>Envato</span>
							</div>
	
							<div class="post__location">
								<i class="icon ion-ios-navigate"></i>
								<span>Australia</span>
							</div>
	
							<div class="post__actions">
								<a class="post__actions-btn post__actions-btn--green" href="#">
									<i class="icon ion-ios-bookmark"></i>
								</a>
								<a class="post__actions-btn post__actions-btn--red" href="#">
									<i class="icon ion-ios-mail"></i>
								</a>
							</div>
						</div>
	
						<h2 class="post__title">Senior Wordpress Developer</h2>
	
						<div class="post__options">
							<span>Full time</span>
							<p>$36/hr</p>
						</div>
	
						<div class="post__description">
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
							<a href="#">view more</a>
						</div>
	
						<div class="post__tags">
							<a href="#">HTML</a>
							<a href="#">CSS</a>
							<a href="#">PHP</a>
						</div>
	
						<div class="post__stats">
							<div>
								<a class="post__likes" href="#"><i class="icon ion-ios-heart"></i> <span>15</span></a>
								<a class="post__comments" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1"><i class="icon ion-ios-text"></i> <span>0</span></a>
							</div>
	
							<div class="post__views">
								<i class="icon ion-ios-eye"></i> <span>214</span>
							</div>
						</div>
	
						<div class="collapse post__collapse" id="collapse1">
							<form action="#" class="post__form">
								<input type="text" placeholder="Type your comment...">
								<button type="button"><i class="icon ion-ios-paper-plane"></i></button>
							</form>
						</div>
					</div>
					<!-- end post -->
				</div>
	
				<div class="col-12 col-md-5 col-lg-3 col-xl-3">
					<!-- sidebox -->
					<div class="sidebox sidebox--desk">
						<h4 class="sidebox__title">Most viewed this week</h4>
						<div class="sidebox__content">
							<div class="sidebox__job">
								<div class="sidebox__job-title">
									<a href="#">UI/UX Designer</a>
									<span>$20/hr</span>
								</div>
								<p class="sidebox__job-description">The generated Lorem Ipsum is therefore always free from repetition.
								</p>
							</div>
					
							<div class="sidebox__job">
								<div class="sidebox__job-title">
									<a href="#">Back-end Developer</a>
									<span>$27/hr</span>
								</div>
								<p class="sidebox__job-description">The generated Lorem Ipsum is therefore always free from repetition.
								</p>
							</div>
					
							<div class="sidebox__job">
								<div class="sidebox__job-title">
									<a href="#">Senior Java Developer</a>
									<span>$35/hr</span>
								</div>
								<p class="sidebox__job-description">The generated Lorem Ipsum is therefore always free from repetition.
								</p>
							</div>
						</div>
						<a href="#" class="sidebox__more">View more</a>
					</div>
					<!-- end sidebox -->
				</div>
			</div>
		</div>
	</main>
	<!-- end main content -->
	</div>
</template>

<script>
	import 'bootstrap/dist/css/bootstrap.min.css';
	import 'bootstrap/dist/js/bootstrap.min.js';
	export default {
		data() {
			return {
				pageData: [{
					// sname:"",
					// classnum:""
					}],
			};
		},
		created() {
			const sno = sessionStorage.getItem('sno');
			// [ { "sno": "114", "sname": "憨憨严轶轩", "sex": "M", "ultimate_eva": null, "classnum": "软工五班", "i_id_id": "201710753", "major": "软件工程" } ]
			let param = new URLSearchParams();
			param.append("sno", sno);
			console.log(sno);
			this.$axios({
					url:'http://148.70.15.23:8000/stuinface/',
					method:'post',
					data: param,
					// header: {'Content-Type':'application/json'}
				})
			.then(res => {
				console.log(res);
				this.pageData = JSON.parse(res.data);
				
			})
			.catch(err => {
				console.log(err);
			});
		}
	};
</script>

<style>
	.container{width: 1310px;}
	/*==============================
		Header
	==============================*/
	.header {
		display: block;
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
		height: 70px;
		position: relative;
	}
	.header__content_end {
		-webkit-justify-content: flex-end;
		-ms-flex-pack: end;
		justify-content: flex-end;
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
		width: 110px;
		margin-left: 10px;
	}
	.header__logo img {
		width: 100%;
		height: 100%;
		display: block;
	}
	.header__nav {
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
		position: fixed;
		top: 70px;
		left: 0;
		bottom: 0;
		background-color: #fff;
		z-index: 99;
		width: 260px;
		padding: 25px 15px 0;
		-webkit-transform: translate3d(-260px, 0, 0);
		-moz-transform: translate3d(-260px, 0, 0);
		transform: translate3d(-260px, 0, 0);
		-webkit-transition: 0.4s ease;
		-moz-transition: 0.4s ease;
		transition: 0.4s ease;
		border-right: 1px solid rgba(133,153,171,0.2);
		border-top: 1px solid rgba(133,153,171,0.2);
	}
	.header__nav-link {
	  font-size: 14px;
	  color: #364e65;
	}
	.header__nav-link:hover {
	  color: #3796f6;
	}
	.header__nav-item {
	  width: 100%;
	  display: block;
	  margin-bottom: 20px;
	  position: relative;
	}
	.header__nav-item:last-child {
	  margin-bottom: 0;
	}
	.header__nav-item.show .header__nav-link {
	  color: #3796f6;
	}
	.header__search {
	  display: none;
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
	  width: 40px;
	}
	.header__profile-btn span {
	  display: none;
	}
	.header__profile-btn img {
	  display: block;
	  width: 36px;
	  height: 36px;
	  -webkit-border-radius: 50%;
	  border-radius: 50%;
	}
	@media (min-width: 360px) {
	  .header__profile, {
	    margin-left: 25px;
	  }
	}
	@media (min-width: 576px) {
	  .header__profile, {
	    margin-left: 30px;
	  }
	}
	@media (min-width: 768px) {
	  .header__search {
	    position: relative;
	    display: block;
	  }
	  .header__search ::-webkit-input-placeholder {
	    color: #dadedf;
	    opacity: 1;
	  }
	  .header__search ::-moz-placeholder {
	    color: #dadedf;
	    opacity: 1;
	  }
	  .header__search :-moz-placeholder {
	    color: #dadedf;
	    opacity: 1;
	  }
	  .header__search :-ms-input-placeholder {
	    color: #dadedf;
	    opacity: 1;
	  }
	  .header__search-input {
	    width: 240px;
	    height: 40px;
	    -webkit-border-radius: 4px;
	    border-radius: 4px;
	    background-color: rgba(255,255,255,0.1);
	    font-size: 14px;
	    color: #fff;
	    padding: 0 50px 0 20px;
	    border: none;
	  }
	  .header__search-button {
	    position: absolute;
	    height: 40px;
	    color: #dadedf;
	    font-size: 22px;
	    top: 50%;
	    margin-top: -20px;
	    right: 20px;
	    line-height: 42px;
	  }
	  .header__search-button:hover {
	    color: #3796f6;
	  }
	  .header__logo {
	    margin-left: 40px;
	  }
	}
	@media (min-width: 992px) {
	  .header__profile.show .header__profile-btn span {
	    color: #3796f6;
	  }
	  .header__profile-btn {
	    width: auto;
	  }
	  .header__profile-btn span {
	    display: block;
	    font-size: 14px;
	    color: #dadedf;
	    font-weight: 600;
	    margin-left: 10px;
	    -webkit-transition: 0.4s;
	    -moz-transition: 0.4s;
	    transition: 0.4s;
	  }
	  .header__profile-btn:hover span {
	    color: #3796f6;
	  }
	}
	@media (min-width: 1200px) {
	  .header__btn {
	    display: none;
	  }
	  .header__logo {
	    margin-left: 0;
	  }
	  .header__nav {
	    -webkit-transform: translate3d(0, 0, 0);
	    -moz-transform: translate3d(0, 0, 0);
	    transform: translate3d(0, 0, 0);
	    padding: 0;
	    background-color: transparent;
	    width: auto;
	    -webkit-box-orient: horizontal;
	    -webkit-box-direction: normal;
	    -webkit-flex-direction: row;
	    -moz-box-direction: row;
	    -ms-flex-direction: row;
	    flex-direction: row;
	    -webkit-align-items: center;
	    -ms-flex-align: center;
	    align-items: center;
	    position: relative;
	    top: auto;
	    right: auto;
	    bottom: auto;
	    border: none;
	  }
	  .header__nav-item {
	    margin: 0 30px 0 0;
	    width: auto;
	  }
	  .header__nav-item:last-child {
	    margin: 0;
	  }
	  .header__nav-link {
	    line-height: 70px;
	    display: block;
	    color: #dadedf;
	  }
	  .header__search-input {
	    width: 200px;
	  }
	  .header__profile .header__dropdown-menu {
	    margin-top: 0;
	  }
	  .header__profile .header__dropdown-menu.show {
	    margin-top: 15px;
	  }
	}
	@media (min-width: 1310px) {
	  .header__nav-item {
	    margin: 0 40px 0 0;
	    width: auto;
	  }
	  .header__nav-item:last-child {
	    margin: 0;
	  }
	  .header__search-input {
	    width: 250px;
	  }
	}
	/*==============================
		Main
	==============================*/
	.main {
		padding-top: 60px;
		padding-bottom: 20px;
	}
	.main--breadcrumb {
	  padding-top: 70px;
	}
	.main__title {
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-orient: horizontal;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: row;
	  -moz-box-direction: row;
	  -ms-flex-direction: row;
	  flex-direction: row;
	  -webkit-justify-content: flex-start;
	  -ms-flex-pack: start;
	  justify-content: flex-start;
	  -webkit-align-items: center;
	  -ms-flex-align: center;
	  align-items: center;
	  font-weight: 600;
	  color: #364e65;
	  font-size: 18px;
	  line-height: 100%;
	  margin-bottom: 20px;
	  margin-top: 40px;
	  position: relative;
	  padding-left: 20px;
	}
	.main__title:before {
	  content: '';
	  position: absolute;
	  display: block;
	  top: 0;
	  bottom: 0;
	  width: 3px;
	  background-color: #3796f6;
	  left: 0;
	  -webkit-border-radius: 3px;
	  border-radius: 3px;
	  -webkit-box-shadow: 0 0 10px 0 rgba(55,150,246,0.3);
	  box-shadow: 0 0 10px 0 rgba(55,150,246,0.3);
	}
	.main__btn {
	  display: block;
	  width: 140px;
	  height: 40px;
	  background: linear-gradient(45deg, rgba(55,150,246,0.5) 0%, rgba(55,150,246,0.05) 100%);
	  color: #fff;
	  font-size: 13px;
	  -webkit-border-radius: 4px;
	  border-radius: 4px;
	  letter-spacing: 0.4px;
	  text-transform: uppercase;
	  font-weight: 600;
	  position: relative;
	  overflow: hidden;
	  margin: 40px auto 20px;
	}
	.main__btn:before {
	  content: '';
	  position: absolute;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  background-color: #3796f6;
	  z-index: 1;
	  -webkit-transition: 0.4s;
	  -moz-transition: 0.4s;
	  transition: 0.4s;
	  opacity: 1;
	}
	.main__btn span {
	  position: relative;
	  z-index: 2;
	}
	.main__btn:hover {
	  color: #3796f6;
	}
	.main__btn:hover:before {
	  opacity: 0;
	}
	.main__btn--margin {
	  margin: 10px auto 20px;
	}
	.main__nav {
	  position: relative;
	  margin-bottom: 20px;
	  background-color: #fff;
	  -webkit-border-radius: 4px;
	  border-radius: 4px;
	  overflow: hidden;
	  -webkit-box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1);
	  box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1);
	  border: 1px solid rgba(133,153,171,0.2);
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-orient: horizontal;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: row;
	  -moz-box-direction: row;
	  -ms-flex-direction: row;
	  flex-direction: row;
	  -webkit-justify-content: flex-start;
	  -ms-flex-pack: start;
	  justify-content: flex-start;
	  -webkit-align-items: center;
	  -ms-flex-align: center;
	  align-items: center;
	  padding: 0 0 0 20px;
	}
	.main__nav a {
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
	  height: 60px;
	  width: auto;
	  font-size: 14px;
	  color: #364e65;
	}
	.main__nav a:before {
	  content: '';
	  position: absolute;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  height: 2px;
	  display: block;
	  background-color: #3796f6;
	  -webkit-transition: 0.4s ease;
	  -moz-transition: 0.4s ease;
	  transition: 0.4s ease;
	  -webkit-transform: translateY(2px);
	  -moz-transform: translateY(2px);
	  transform: translateY(2px);
	  opacity: 0;
	  -webkit-box-shadow: 0 0 10px 0 rgba(55,150,246,0.3);
	  box-shadow: 0 0 10px 0 rgba(55,150,246,0.3);
	}
	.main__nav a.active:before {
	  opacity: 1;
	  -webkit-transform: translateY(0);
	  -moz-transform: translateY(0);
	  transform: translateY(0);
	}
	.main__nav li {
	  margin-right: 30px;
	}
	.main__nav li:last-child {
	  margin-right: 0;
	}
	.main__box {
	  position: relative;
	  padding: 20px;
	  border: 1px solid rgba(133,153,171,0.2);
	  -webkit-box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1);
	  box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1);
	  -webkit-border-radius: 4px;
	  border-radius: 4px;
	  background-color: #fff;
	  margin-bottom: 20px;
	}
	.main__box .post__tags {
	  margin-bottom: -15px;
	}
	.main__box-title {
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
	  -webkit-align-items: flex-start;
	  -ms-flex-align: start;
	  align-items: flex-start;
	  height: 40px;
	  line-height: 100%;
	  font-size: 16px;
	  font-weight: 600;
	  color: #364e65;
	  margin-bottom: 20px;
	  border-bottom: 1px solid rgba(133,153,171,0.2);
	  padding-top: 2px;
	}
	.main__box-text {
	  font-size: 14px;
	  line-height: 24px;
	  color: #364e65;
	  margin-bottom: 20px;
	}
	.main__box-text:last-child {
	  margin-bottom: 0;
	}
	.main__box-text span {
	  color: #8599ab;
	  font-size: 12px;
	}
	.main__box-text b {
	  font-weight: 600;
	}
	.main__box-text a {
	  color: #3796f6;
	}
	.main__box-text a:hover {
	  color: #fa7268;
	  text-decoration: underline;
	}
	.main__box-list {
	  font-size: 14px;
	  line-height: 24px;
	  color: #364e65;
	  margin-bottom: 20px;
	}
	.main__box-list li {
	  position: relative;
	  padding-left: 15px;
	}
	.main__box-list li:before {
	  content: '';
	  position: absolute;
	  left: 0;
	  top: 50%;
	  width: 4px;
	  height: 4px;
	  -webkit-border-radius: 50%;
	  border-radius: 50%;
	  background-color: #3796f6;
	  margin-top: -1px;
	  -webkit-box-shadow: 0 0 10px 0 rgba(55,150,246,0.3);
	  box-shadow: 0 0 10px 0 rgba(55,150,246,0.3);
	}
	.main__box-list:last-child {
	  margin-bottom: 0;
	}
	.main__box-list b {
	  font-weight: 600;
	}
	.main__box-list a {
	  color: #3796f6;
	}
	.main__box-list a:hover {
	  color: #fa7268;
	  text-decoration: underline;
	}
	@media (min-width: 768px) {
	  .main {
	    padding-top: 65px;
	  }
	  .main--breadcrumb {
	    padding-top: 70px;
	  }
	}
	/*==============================
		User
	==============================*/
	.user {
	  position: relative;
	  margin-bottom: 20px;
	  background-color: #fff;
	  -webkit-border-radius: 4px;
	  border-radius: 4px;
	  overflow: hidden;
	  -webkit-box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1);
	  box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1);
	}
	.user__head {
	  background-color: #3796f6;
	  position: relative;
	  height: 120px;
	  width: 100%;
	}
	.user__img {
	  position: absolute;
	  display: block;
	  width: 130px;
	  height: 130px;
	  background-color: #fff;
	  -webkit-border-radius: 50%;
	  border-radius: 50%;
	  border: 5px solid #fff;
	  bottom: -65px;
	  left: 50%;
	  margin-left: -65px;
	  overflow: hidden;
	}
	.user__img img {
	  width: 100%;
	  height: auto;
	}
	.user__title {
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-orient: vertical;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: column;
	  -moz-box-direction: column;
	  -ms-flex-direction: column;
	  flex-direction: column;
	  -webkit-justify-content: center;
	  -ms-flex-pack: center;
	  justify-content: center;
	  -webkit-align-items: center;
	  -ms-flex-align: center;
	  align-items: center;
	  padding: 75px 20px 20px;
	  border-left: 1px solid rgba(133,153,171,0.2);
	  border-right: 1px solid rgba(133,153,171,0.2);
	}
	.user__title h2 {
	  font-size: 18px;
	  color: #364e65;
	  font-weight: 600;
	  margin-bottom: 10px;
	  line-height: 100%;
	}
	.user__title p {
	  margin-bottom: 0;
	  line-height: 100%;
	  font-size: 14px;
	  color: #8599ab;
	  font-weight: 400;
	}
	.user__btns {
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
	  padding: 20px;
	  border-left: 1px solid rgba(133,153,171,0.2);
	  border-right: 1px solid rgba(133,153,171,0.2);
	  border-top: 1px solid rgba(133,153,171,0.2);
	}
	.user__btn {
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
	  width: calc(50% - 10px);
	  -webkit-border-radius: 4px;
	  border-radius: 4px;
	  font-size: 14px;
	  position: relative;
	  overflow: hidden;
	  color: #fff;
	  font-weight: 600;
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
	.user__btn--orange {
	  background: linear-gradient(45deg, rgba(250,114,104,0.5) 0%, rgba(250,114,104,0.05) 100%);
	}
	.user__btn--orange:before {
	  background-color: #fa7268;
	}
	.user__btn--orange:hover {
	  color: #fa7268;
	}
	.user__btn--orange:hover:before {
	  opacity: 0;
	}
	.user__stats {
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-orient: horizontal;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: row;
	  -moz-box-direction: row;
	  -ms-flex-direction: row;
	  flex-direction: row;
	  -webkit-justify-content: flex-start;
	  -ms-flex-pack: start;
	  justify-content: flex-start;
	  -webkit-align-items: flex-start;
	  -ms-flex-align: start;
	  align-items: flex-start;
	  padding: 20px;
	  border: 1px solid rgba(133,153,171,0.2);
	}
	.user__stats li {
	  width: 50%;
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-orient: vertical;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: column;
	  -moz-box-direction: column;
	  -ms-flex-direction: column;
	  flex-direction: column;
	  -webkit-justify-content: center;
	  -ms-flex-pack: center;
	  justify-content: center;
	  -webkit-align-items: center;
	  -ms-flex-align: center;
	  align-items: center;
	}
	.user__stats li p {
	  margin-bottom: 5px;
	  line-height: 100%;
	  font-size: 14px;
	  color: #8599ab;
	}
	.user__stats li span {
	  font-size: 24px;
	  line-height: 100%;
	  display: block;
	  color: #364e65;
	}
	.user__stats:last-child {
	  -webkit-border-radius: 0 0 4px 4px;
	  border-radius: 0 0 4px 4px;
	}
	.user__list {
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
	  border-top: 1px solid rgba(133,153,171,0.2);
	  border-left: 1px solid rgba(133,153,171,0.2);
	  border-right: 1px solid rgba(133,153,171,0.2);
	  padding: 15px 20px;
	}
	.user__list li {
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
	  width: 100%;
	}
	.user__list li span {
	  font-size: 14px;
	  line-height: 28px;
	  color: #8599ab;
	}
	.user__list li span:first-child {
	  color: #364e65;
	}
	/*==============================
		Sidebox
	==============================*/
	.sidebox {
	  position: relative;
	  margin-bottom: 20px;
	  -webkit-box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1);
	  box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1);
	}
	.sidebox__title {
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
	  height: 60px;
	  width: 100%;
	  padding: 0 20px;
	  background-color: #fff;
	  color: #364e65;
	  font-size: 16px;
	  font-weight: 600;
	  border: 1px solid rgba(133,153,171,0.2);
	  margin-top: 0;
	  margin-bottom: 0;
	  -webkit-border-radius: 4px 4px 0 0;
	  border-radius: 4px 4px 0 0;
	}
	.sidebox__title button {
	  font-size: 12px;
	  font-weight: 400;
	  color: #8599ab;
	}
	.sidebox__title button:hover {
	  color: #3796f6;
	}
	.sidebox__content {
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
	  padding: 20px;
	  border-bottom: 1px solid rgba(133,153,171,0.2);
	  border-left: 1px solid rgba(133,153,171,0.2);
	  border-right: 1px solid rgba(133,153,171,0.2);
	  background-color: #fff;
	}
	.sidebox__more {
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
	  border-bottom: 1px solid rgba(133,153,171,0.2);
	  border-left: 1px solid rgba(133,153,171,0.2);
	  border-right: 1px solid rgba(133,153,171,0.2);
	  height: 40px;
	  width: 100%;
	  color: #3796f6;
	  font-size: 14px;
	  font-weight: 600;
	  background-color: #fafafa;
	  -webkit-border-radius: 0 0 4px 4px;
	  border-radius: 0 0 4px 4px;
	}
	.sidebox__more:hover {
	  color: #fa7268;
	}
	.sidebox__user {
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-orient: horizontal;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: row;
	  -moz-box-direction: row;
	  -ms-flex-direction: row;
	  flex-direction: row;
	  -webkit-justify-content: flex-start;
	  -ms-flex-pack: start;
	  justify-content: flex-start;
	  -webkit-align-items: center;
	  -ms-flex-align: center;
	  align-items: center;
	  margin-bottom: 15px;
	  width: 100%;
	}
	.sidebox__user:last-child {
	  margin-bottom: 0;
	}
	.sidebox__user-img {
	  display: block;
	  width: 40px;
	  height: 40px;
	  -webkit-border-radius: 50%;
	  border-radius: 50%;
	  margin-right: 12px;
	  overflow: hidden;
	}
	.sidebox__user-img img {
	  width: 100%;
	}
	.sidebox__user-title h5 {
	  font-size: 14px;
	  color: #364e65;
	  font-weight: 600;
	  margin-bottom: 5px;
	  line-height: 100%;
	}
	.sidebox__user-title h5 a {
	  color: #364e65;
	}
	.sidebox__user-title h5 a:hover {
	  color: #fa7268;
	}
	.sidebox__user-title p {
	  font-size: 13px;
	  color: #8599ab;
	  margin-bottom: 0;
	  line-height: 100%;
	}
	.sidebox__user-btn {
	  display: block;
	  margin-left: auto;
	  color: #8599ab;
	  font-size: 30px;
	  height: 40px;
	  width: auto;
	  line-height: 38px;
	  position: relative;
	}
	.sidebox__user-btn:before {
	  content: '';
	  position: absolute;
	  top: 0;
	  bottom: 0;
	  left: -20px;
	  width: 1px;
	  background-color: rgba(133,153,171,0.2);
	  pointer-events: none;
	}
	.sidebox__user-btn:hover {
	  color: #3796f6;
	}
	.sidebox__job {
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
	  margin-bottom: 15px;
	  width: 100%;
	}
	.sidebox__job:last-child {
	  margin-bottom: 0;
	}
	.sidebox__job-title {
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
	  margin-bottom: 8px;
	  width: 100%;
	}
	.sidebox__job-title a,
	.sidebox__job-title span {
	  font-size: 14px;
	  color: #364e65;
	  font-weight: 600;
	  line-height: 100%;
	}
	.sidebox__job-title a:hover {
	  color: #fa7268;
	}
	.sidebox__job-description {
	  margin-bottom: 0;
	  font-size: 13px;
	  line-height: 19px;
	  color: #8599ab;
	}
	.sidebox__share {
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
	  border: 1px solid rgba(133,153,171,0.2);
	  background-color: #fff;
	  -webkit-border-radius: 4px;
	  border-radius: 4px;
	  padding: 10px 20px;
	  height: 60px;
	}
	.sidebox__share span {
	  font-size: 14px;
	  font-weight: 400;
	  color: #364e65;
	}
	.sidebox__share ul {
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-orient: horizontal;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: row;
	  -moz-box-direction: row;
	  -ms-flex-direction: row;
	  flex-direction: row;
	  -webkit-justify-content: flex-start;
	  -ms-flex-pack: start;
	  justify-content: flex-start;
	  -webkit-align-items: center;
	  -ms-flex-align: center;
	  align-items: center;
	}
	.sidebox__share ul li {
	  margin-right: 15px;
	}
	.sidebox__share ul li:last-child {
	  margin-right: 0;
	}
	.sidebox__share ul li.facebook a {
	  color: #3b5999;
	}
	.sidebox__share ul li.instagram a {
	  color: $clr2;
	}
	.sidebox__share ul li.instagram a i:before {
	  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
	  -webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
	  color: $yellow;
	}
	.sidebox__share ul li.twitter a {
	  color: #1da1f2;
	}
	.sidebox__share ul li.vk a {
	  color: #45668e;
	}
	.sidebox__share ul a {
	  font-size: 24px;
	  color: #3796f6;
	  letter-spacing: 0.4px;
	}
	.sidebox__share ul a:hover {
	  color: #fa7268;
	}
	.sidebox__apply {
	  border: 1px solid rgba(133,153,171,0.2);
	  background-color: #fff;
	  -webkit-border-radius: 4px;
	  border-radius: 4px;
	  padding: 20px;
	}
	.sidebox__faq {
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
	  margin-bottom: 15px;
	  width: 100%;
	}
	.sidebox__faq:last-child {
	  margin-bottom: 0;
	}
	.sidebox__faq h5 {
	  font-size: 15px;
	  color: #364e65;
	  font-weight: 600;
	  line-height: 23px;
	  margin-bottom: 7px;
	}
	.sidebox__faq p {
	  margin-bottom: 0;
	  font-size: 13px;
	  line-height: 21px;
	  color: #8599ab;
	}
	.sidebox__nav {
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
	  padding: 20px;
	  border-bottom: 1px solid rgba(133,153,171,0.2);
	  border-left: 1px solid rgba(133,153,171,0.2);
	  border-right: 1px solid rgba(133,153,171,0.2);
	  background-color: #fff;
	  -webkit-border-radius: 0 0 4px 4px;
	  border-radius: 0 0 4px 4px;
	}
	.sidebox__nav a {
	  font-size: 14px;
	  color: #364e65;
	  position: relative;
	}
	.sidebox__nav a:before {
	  content: '';
	  position: absolute;
	  display: block;
	  width: 6px;
	  height: 6px;
	  -webkit-border-radius: 50%;
	  border-radius: 50%;
	  background-color: #3796f6;
	  pointer-events: none;
	  left: 0;
	  top: 50%;
	  margin-top: -3px;
	  opacity: 0;
	  -webkit-transition: 0.4s;
	  -moz-transition: 0.4s;
	  transition: 0.4s;
	  -webkit-box-shadow: 0 0 10px 0 rgba(55,150,246,0.3);
	  box-shadow: 0 0 10px 0 rgba(55,150,246,0.3);
	}
	.sidebox__nav a:hover,
	.sidebox__nav a.active {
	  color: #3796f6;
	}
	.sidebox__nav a.active {
	  padding-left: 15px;
	}
	.sidebox__nav a.active:before {
	  opacity: 1;
	}
	.sidebox__nav li {
	  margin-bottom: 10px;
	}
	.sidebox__nav li:last-child {
	  margin-bottom: 0;
	}
	.sidebox__nav .filter__label {
	  line-height: 100%;
	}
	.sidebox__search {
	  background-color: #fff;
	  padding: 20px;
	  border-left: 1px solid rgba(133,153,171,0.2);
	  border-right: 1px solid rgba(133,153,171,0.2);
	  border-bottom: 1px solid rgba(133,153,171,0.2);
	  position: relative;
	}
	.sidebox__search button {
	  position: absolute;
	  height: 40px;
	  color: #8599ab;
	  font-size: 22px;
	  top: 50%;
	  margin-top: -20px;
	  right: 35px;
	  line-height: 42px;
	}
	.sidebox__search button:hover {
	  color: #3796f6;
	}
	.sidebox--desk {
	  display: none;
	}
	@media (min-width: 1200px) {
	  .sidebox--desk {
	    display: block;
	  }
	}
	/*==============================
		Post
	==============================*/
	.post {
	  position: relative;
	  padding: 20px;
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
	  margin-bottom: 20px;
	}
	.post--clear {
	  padding: 20px 20px 0;
	}
	.post__head {
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-orient: horizontal;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: row;
	  -moz-box-direction: row;
	  -ms-flex-direction: row;
	  flex-direction: row;
	  -webkit-justify-content: flex-start;
	  -ms-flex-pack: start;
	  justify-content: flex-start;
	  -webkit-align-items: center;
	  -ms-flex-align: center;
	  align-items: center;
	  position: relative;
	  margin-bottom: 10px;
	  width: 100%;
	}
	.post__head-img {
	  display: block;
	  width: 46px;
	  height: 46px;
	  -webkit-border-radius: 50%;
	  border-radius: 50%;
	  margin-right: 12px;
	  overflow: hidden;
	}
	.post__head-img img {
	  width: 100%;
	}
	.post__head-title h5 {
	  font-size: 16px;
	  color: #364e65;
	  font-weight: 600;
	  margin-bottom: 6px;
	  line-height: 100%;
	}
	.post__head-title h5 a {
	  color: #364e65;
	}
	.post__head-title h5 a:hover {
	  color: #fa7268;
	}
	.post__head-title p {
	  font-size: 12px;
	  color: #8599ab;
	  margin-bottom: 0;
	  line-height: 100%;
	}
	.post__dropdown {
	  position: absolute;
	  right: 0;
	  top: 0;
	  display: block;
	}
	.post__dropdown.show .post__dropdown-btn {
	  color: #3796f6;
	}
	.post__dropdown-btn {
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
	  font-size: 24px;
	  color: #8599ab;
	  line-height: 24px;
	}
	.post__dropdown-btn i {
	  line-height: 24px;
	}
	.post__dropdown-btn:hover {
	  color: #3796f6;
	}
	.post__dropdown-menu {
	  position: absolute;
	  left: auto;
	  right: 0;
	  background-color: #fff;
	  padding: 10px 20px;
	  display: block;
	  width: 100%;
	  width: 140px;
	  text-align: left;
	  z-index: 3;
	  pointer-events: none;
	  opacity: 0;
	  -webkit-transition: 0.4s ease;
	  -moz-transition: 0.4s ease;
	  transition: 0.4s ease;
	  transition-property: opacity, margin;
	  margin-top: 0;
	  top: 100%;
	  border-right: 1px solid rgba(133,153,171,0.2);
	  border-left: 1px solid rgba(133,153,171,0.2);
	  border-bottom: 1px solid rgba(133,153,171,0.2);
	  border-top: 2px solid #3796f6;
	  -webkit-box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1);
	  box-shadow: 0 2px 26px 0 rgba(133,153,171,0.1);
	  -webkit-border-radius: 0 0 4px 4px;
	  border-radius: 0 0 4px 4px;
	}
	.post__dropdown-menu li {
	  padding: 0;
	}
	.post__dropdown-menu a {
	  font-size: 14px;
	  color: #364e65;
	  line-height: 36px;
	  display: block;
	  font-weight: 400;
	}
	.post__dropdown-menu a:hover {
	  color: #3796f6;
	}
	.post__dropdown-menu.show {
	  z-index: 1000;
	  pointer-events: auto;
	  opacity: 1;
	  margin-top: 10px;
	}
	.post__wrap {
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-orient: horizontal;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: row;
	  -moz-box-direction: row;
	  -ms-flex-direction: row;
	  flex-direction: row;
	  -webkit-justify-content: flex-start;
	  -ms-flex-pack: start;
	  justify-content: flex-start;
	  -webkit-align-items: center;
	  -ms-flex-align: center;
	  align-items: center;
	  margin-bottom: 10px;
	  width: 100%;
	  -webkit-flex-wrap: wrap;
	  -ms-flex-wrap: wrap;
	  flex-wrap: wrap;
	}
	.post__company {
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-orient: horizontal;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: row;
	  -moz-box-direction: row;
	  -ms-flex-direction: row;
	  flex-direction: row;
	  -webkit-justify-content: flex-start;
	  -ms-flex-pack: start;
	  justify-content: flex-start;
	  -webkit-align-items: center;
	  -ms-flex-align: center;
	  align-items: center;
	  margin-right: 15px;
	}
	.post__company i {
	  font-size: 16px;
	  color: #3796f6;
	  margin-right: 8px;
	  margin-top: 1px;
	  line-height: 24px;
	}
	.post__company span {
	  font-size: 14px;
	  color: #8599ab;
	  line-height: 24px;
	}
	.post__location {
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-orient: horizontal;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: row;
	  -moz-box-direction: row;
	  -ms-flex-direction: row;
	  flex-direction: row;
	  -webkit-justify-content: flex-start;
	  -ms-flex-pack: start;
	  justify-content: flex-start;
	  -webkit-align-items: center;
	  -ms-flex-align: center;
	  align-items: center;
	}
	.post__location i {
	  font-size: 18px;
	  color: #5bceae;
	  margin-right: 8px;
	  line-height: 24px;
	  margin-top: 2px;
	}
	.post__location span {
	  font-size: 14px;
	  color: #8599ab;
	  line-height: 24px;
	}
	.post__actions {
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-orient: horizontal;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: row;
	  -moz-box-direction: row;
	  -ms-flex-direction: row;
	  flex-direction: row;
	  -webkit-justify-content: flex-start;
	  -ms-flex-pack: start;
	  justify-content: flex-start;
	  -webkit-align-items: center;
	  -ms-flex-align: center;
	  align-items: center;
	  margin-left: auto;
	  width: 100%;
	  margin-top: 13px;
	}
	.post__actions-btn {
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
	  height: 30px;
	  width: 30px;
	  -webkit-border-radius: 4px;
	  border-radius: 4px;
	  color: #fff;
	  font-size: 18px;
	  margin-right: 15px;
	  position: relative;
	  overflow: hidden;
	}
	.post__actions-btn:before {
	  content: '';
	  position: absolute;
	  display: block;
	  top: 0;
	  right: 0;
	  bottom: 0;
	  left: 0;
	  -webkit-transition: 0.4s;
	  -moz-transition: 0.4s;
	  transition: 0.4s;
	  z-index: 1;
	  pointer-events: none;
	  opacity: 1;
	}
	.post__actions-btn i,
	.post__actions-btn span {
	  position: relative;
	  z-index: 2;
	}
	.post__actions-btn--green {
	  background: linear-gradient(45deg, rgba(91,206,174,0.5) 0%, rgba(91,206,174,0.05) 100%);
	}
	.post__actions-btn--green:before {
	  background-color: #5bceae;
	}
	.post__actions-btn--green:hover {
	  color: #5bceae;
	}
	.post__actions-btn--red {
	  background: linear-gradient(45deg, rgba(236,84,122,0.5) 0%, rgba(236,84,122,0.05) 100%);
	}
	.post__actions-btn--red:before {
	  background-color: #ec547a;
	}
	.post__actions-btn--red:hover {
	  color: #ec547a;
	}
	.post__actions-btn--blue {
	  background: linear-gradient(45deg, rgba(55,150,246,0.5) 0%, rgba(55,150,246,0.05) 100%);
	  width: auto;
	  padding: 0 10px;
	  font-size: 13px;
	}
	.post__actions-btn--blue:before {
	  background-color: #3796f6;
	}
	.post__actions-btn--blue:hover {
	  color: #3796f6;
	}
	.post__actions-btn:last-child {
	  margin-right: 0;
	}
	.post__actions-btn:hover:before {
	  opacity: 0;
	}
	.post__title {
	  font-size: 18px;
	  font-weight: 600;
	  color: #364e65;
	  margin-bottom: 15px;
	  line-height: 26px;
	}
	.post__options {
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-orient: horizontal;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: row;
	  -moz-box-direction: row;
	  -ms-flex-direction: row;
	  flex-direction: row;
	  -webkit-justify-content: flex-start;
	  -ms-flex-pack: start;
	  justify-content: flex-start;
	  -webkit-align-items: center;
	  -ms-flex-align: center;
	  align-items: center;
	  margin-bottom: 15px;
	}
	.post__options span {
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
	  height: 24px;
	  padding: 0 10px;
	  -webkit-border-radius: 4px;
	  border-radius: 4px;
	  background-color: #3796f6;
	  color: #fff;
	  font-size: 13px;
	  margin-right: 20px;
	}
	.post__options p {
	  margin-bottom: 0;
	  font-size: 14px;
	  line-height: 100%;
	  color: #364e65;
	  font-weight: 600;
	}
	.post__description {
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
	  margin-bottom: 20px;
	  width: 100%;
	}
	.post__description p {
	  font-size: 14px;
	  line-height: 24px;
	  color: #8599ab;
	  margin-bottom: 0;
	  margin-top: 15px;
	}
	.post__description p:first-child {
	  margin-top: 0;
	}
	.post__description ul {
	  font-size: 14px;
	  line-height: 24px;
	  color: #8599ab;
	  margin-top: 15px;
	}
	.post__description ul:first-child {
	  margin-top: 0;
	}
	.post__description ul li {
	  position: relative;
	  padding-left: 20px;
	}
	.post__description ul li:before {
	  content: '';
	  position: absolute;
	  display: block;
	  width: 4px;
	  height: 4px;
	  -webkit-border-radius: 50%;
	  border-radius: 50%;
	  background-color: #3796f6;
	  left: 0;
	  top: 50%;
	  margin-top: -2px;
	}
	.post__description a {
	  color: #fa7268;
	  font-weight: 600;
	  font-size: 14px;
	  margin-top: 5px;
	}
	.post__description a:hover {
	  color: #fa7268;
	  text-decoration: underline;
	}
	.post__tags {
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-orient: horizontal;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: row;
	  -moz-box-direction: row;
	  -ms-flex-direction: row;
	  flex-direction: row;
	  -webkit-justify-content: flex-start;
	  -ms-flex-pack: start;
	  justify-content: flex-start;
	  -webkit-align-items: flex-start;
	  -ms-flex-align: start;
	  align-items: flex-start;
	  margin-bottom: 5px;
	}
	.post__tags a {
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
	  height: 26px;
	  padding: 0 11px;
	  -webkit-border-radius: 4px;
	  border-radius: 4px;
	  border: 1px solid rgba(133,153,171,0.2);
	  background-color: #fafafa;
	  color: #8599ab;
	  font-size: 13px;
	  margin-right: 15px;
	  margin-bottom: 15px;
	}
	.post__tags a:hover {
	  color: #3796f6;
	}
	.post__stats {
	  width: 100%;
	  border-top: 1px solid rgba(133,153,171,0.2);
	  padding-top: 20px;
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
	}
	.post__stats div {
	  font-size: 14px;
	  color: #8599ab;
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-orient: horizontal;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: row;
	  -moz-box-direction: row;
	  -ms-flex-direction: row;
	  flex-direction: row;
	  -webkit-justify-content: flex-start;
	  -ms-flex-pack: start;
	  justify-content: flex-start;
	  -webkit-align-items: center;
	  -ms-flex-align: center;
	  align-items: center;
	  line-height: 14px;
	}
	.post__stats div i {
	  margin-right: 7px;
	  font-size: 16px;
	  line-height: 14px;
	}
	.post__stats div span {
	  margin-bottom: 3px;
	}
	.post__stats div .post__likes i {
	  margin-bottom: 1px;
	}
	.post__stats div.post__views i {
	  font-size: 18px;
	}
	.post__stats div.post__views span {
	  margin-bottom: 1px;
	}
	.post__stats a {
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-orient: horizontal;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: row;
	  -moz-box-direction: row;
	  -ms-flex-direction: row;
	  flex-direction: row;
	  -webkit-justify-content: flex-start;
	  -ms-flex-pack: start;
	  justify-content: flex-start;
	  -webkit-align-items: center;
	  -ms-flex-align: center;
	  align-items: center;
	  margin-right: 20px;
	  color: #8599ab;
	}
	.post__stats a i {
	  -webkit-transition: 0.4s;
	  -moz-transition: 0.4s;
	  transition: 0.4s;
	}
	.post__stats a:last-child {
	  margin-right: 0;
	}
	.post__likes:hover i {
	  color: #ec547a;
	}
	.post__comments:hover i {
	  color: #3796f6;
	}
	.post__comments[aria-expanded="true"] i {
	  color: #3796f6;
	}
	.post__collapse {
	  width: 100%;
	  position: relative;
	}
	.post__form {
	  border-top: 1px solid rgba(133,153,171,0.2);
	  margin-top: 20px;
	  padding-top: 20px;
	  position: relative;
	  display: block;
	}
	.post__form input {
	  width: calc(100% - 60px);
	  height: 40px;
	  -webkit-border-radius: 4px;
	  border-radius: 4px;
	  background-color: #fafafa;
	  border: 1px solid rgba(133,153,171,0.2);
	  font-size: 14px;
	  color: #364e65;
	  padding: 0 20px;
	}
	.post__form input:focus {
	  border-color: #3796f6;
	}
	.post__form button {
	  position: absolute;
	  height: 40px;
	  width: 40px;
	  color: #fff;
	  font-size: 20px;
	  top: 20px;
	  right: 0;
	  background-color: #3796f6;
	  -webkit-border-radius: 4px;
	  border-radius: 4px;
	  background: linear-gradient(45deg, rgba(55,150,246,0.5) 0%, rgba(55,150,246,0.05) 100%);
	  overflow: hidden;
	}
	.post__form button:before {
	  content: '';
	  position: absolute;
	  display: block;
	  top: 0;
	  right: 0;
	  bottom: 0;
	  left: 0;
	  -webkit-transition: 0.4s;
	  -moz-transition: 0.4s;
	  transition: 0.4s;
	  z-index: 1;
	  pointer-events: none;
	  opacity: 1;
	  background-color: #3796f6;
	}
	.post__form button i {
	  position: relative;
	  z-index: 2;
	}
	.post__form button:hover {
	  color: #3796f6;
	}
	.post__form button:hover:before {
	  opacity: 0;
	}
	.post__comment {
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  -webkit-box-orient: horizontal;
	  -webkit-box-direction: normal;
	  -webkit-flex-direction: row;
	  -moz-box-direction: row;
	  -ms-flex-direction: row;
	  flex-direction: row;
	  -webkit-justify-content: flex-start;
	  -ms-flex-pack: start;
	  justify-content: flex-start;
	  -webkit-align-items: center;
	  -ms-flex-align: center;
	  align-items: center;
	  position: relative;
	  -webkit-flex-wrap: wrap;
	  -ms-flex-wrap: wrap;
	  flex-wrap: wrap;
	  margin-top: 20px;
	  width: 100%;
	}
	.post__comment-img {
	  display: block;
	  width: 40px;
	  height: 40px;
	  -webkit-border-radius: 50%;
	  border-radius: 50%;
	  margin-right: 12px;
	  overflow: hidden;
	}
	.post__comment-img img {
	  width: 100%;
	}
	.post__comment-title h5 {
	  font-size: 14px;
	  color: #364e65;
	  font-weight: 600;
	  margin-bottom: 5px;
	  line-height: 100%;
	}
	.post__comment-title h5 a {
	  color: #364e65;
	}
	.post__comment-title h5 a:hover {
	  color: #fa7268;
	}
	.post__comment-title p {
	  font-size: 12px;
	  color: #8599ab;
	  margin-bottom: 0;
	  line-height: 100%;
	}
	.post__comment-text {
	  display: block;
	  margin-top: 10px;
	  width: 100%;
	  margin-bottom: 0;
	  font-size: 14px;
	  line-height: 24px;
	  color: #8599ab;
	}
	.post__apply {
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
	  width: 140px;
	  height: 40px;
	  background: linear-gradient(45deg, rgba(55,150,246,0.5) 0%, rgba(55,150,246,0.05) 100%);
	  color: #fff;
	  font-size: 13px;
	  -webkit-border-radius: 4px;
	  border-radius: 4px;
	  letter-spacing: 0.4px;
	  text-transform: uppercase;
	  font-weight: 600;
	  position: relative;
	  overflow: hidden;
	  margin-bottom: 20px;
	}
	.post__apply:before {
	  content: '';
	  position: absolute;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  background-color: #3796f6;
	  z-index: 1;
	  -webkit-transition: 0.4s;
	  -moz-transition: 0.4s;
	  transition: 0.4s;
	  opacity: 1;
	}
	.post__apply span {
	  position: relative;
	  z-index: 2;
	}
	.post__apply:hover {
	  color: #3796f6;
	}
	.post__apply:hover:before {
	  opacity: 0;
	}
	@media (min-width: 576px) {
	  .post__wrap {
	    margin-bottom: 5px;
	  }
	  .post__actions {
	    width: auto;
	    margin-top: 0;
	  }
	}
</style>
