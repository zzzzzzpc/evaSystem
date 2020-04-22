<template>
  <div class="center">
    <el-card class="box-card">
      <img style="width: 100px; height: 100px" src="../../assets/img/user_black.png" />
      <p>姓名：{{name}}</p>
      <p>ID：{{id}}</p>
      <p>学院：信息科学与技术学院</p>
      <p>所在专业：软件工程</p>
      <el-button @click="setPasswordShow = true" type="danger">修改密码</el-button>
    </el-card>
    <el-dialog width="30%" title="修改密码" :visible.sync="setPasswordShow" append-to-body>
      <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
      <p></p>
      <el-input placeholder="请再次输入密码" v-model="pwdAgain" show-password></el-input>
      <p></p>
      <el-button @click="setPwd" type="primary">提交</el-button>
    </el-dialog>
  </div>
</template>

<script>
  import Api from '../../api/setPwd.js'
  export default {
    data: () => ({
      show: true,
      id: '',
      name: '',
      setPasswordShow: false,
      pwd: '',
      pwdAgain: ''
    }),
    created() {
      this.id = this.$store.state.id
      this.name = this.$store.state.name

    },
    methods: {
      setPwd() {
        if (this.pwd == this.pwdAgain && this.pwd != '' && this.pwdAgain != '') {
          Api.setPwd(this.$store.state.id, this.pwd)
          this.$notify({
            title: '成功',
            message: '密码修改成功',
            type: 'success'
          });
        } else {
          this.$notify.error({
            title: '错误',
            message: '两次密码需一致且不为空'
          });
        }
      }
    }


  }
</script>

<style>
  .box-card {
    margin: 0 auto;
  }
</style>
