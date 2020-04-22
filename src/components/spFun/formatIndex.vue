<template>
  <div>
  <p>一键导入excel格式化毕业要求</p>
  <form action="http://148.70.15.23:8000/indexTemplate/" method="post" enctype="multipart/form-data" target="view_window">
    <input type='file' name='textfield' id='textfield'>
    <input type="submit" name="submit" value="上传">
  </form>

  <p/>
  <a href="http://148.70.15.23:8000/download1/" download="http://148.70.15.23:8000/download1/" target="view_window">点击下载毕业要求模板</a>
  <a href="http://148.70.15.23:8000/downloadIndex/" download="http://148.70.15.23:8000/download1/" target="view_window">导出数据</a>
  <p/>
    <el-table ref="filterTable" :data="tableData.slice((currentPage-1) * pagesize, currentPage * pagesize)" style="width: 100%">
      <el-table-column prop="index_id" label="毕业要求id" sortable width="180" column-key="courseId">
      </el-table-column>
      <el-table-column prop="index_name" label="毕业要求名" width="180">
      </el-table-column>
      <el-table-column prop="index_content" label="毕业要求内容" width="180">
      </el-table-column>
      <el-table-column fixed="right" label="移除" width="100">
        <template slot-scope="scope">
          <el-button @click="remove(scope.row)" type="danger" icon="el-icon-remove" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <p></p>
    <el-button type="primary" @click="addIndex">添加毕业要求</el-button>
    <div style="text-align: center;margin-top: 20px;">
      <el-pagination background layout="prev, pager, next" :total="total" @current-change="current_change">
      </el-pagination>
      <el-dialog width="30%" title="添加毕业要求" :visible.sync="outerVisible" append-to-body>
        <p>输入新的毕业要求的名称</p>
        <el-input type="textarea" :autosize="{ minRows: 1, maxRows: 10}" v-model="textarea1">
        </el-input>
        <div style="margin: 20px 0;"></div>
        <p>输入新的毕业要求的内容</p>
        <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 10}" v-model="textarea2">
        </el-input>
        <p></p>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-dialog>
    </div>

  </div>
</template>

<script>
  import SPApi from '../../api/spAdmin.js'
  export default {
    data() {
      return {
        total: 0,
        currentPage: 1,
        pagesize: 4,
        tableData: [],
        outerVisible: false,

        textarea1:'',
        textarea2:'',

      }
    },
    methods: {
      current_change(currentPage) {
        this.currentPage = currentPage
      },
      getIndex() {
        SPApi.getIndex().then(res => {
          this.tableData = res.tableData
          this.total = (Math.ceil(this.tableData.length / this.pagesize)) * 10
        })
      },
      addIndex() {
        this.outerVisible = true

      },
      submit(){

        SPApi.submitIndex(this.textarea1, this.textarea2).then(res=>{
          if(res.message == "success" && this.textarea1 != "" && this.textarea2 != ""){
            this.$notify({
              title: '成功',
              message: '毕业要求已录入！',
              type: 'success'
            });
            this.getIndex()
          } else if(this.textarea1 == "" && this.textarea2 == ""){
            this.$notify.error({
              title: '失败',
              message: '内容不能为空',
            });
            } else {
              this.$notify.error({
                title: '失败',
                message: '录入失败，请联系管理员',
              });
            }
        })
      },
      remove(row){
        SPApi.removeIndex(row.index_id).then(res=>{
			console.log("90"+row.index_id)
          if(res.message == "success") {
            this.$notify({
              title: '成功',
              message:'移除成功',
              type: 'success'
            });
            this.getIndex()
          } else {
            this.$notify.error({
              title: '失败',
              message: '移除失败，请联系管理员',
            });
          }
        })

      }
    },
    created() {
      this.getIndex()
    }
  }
</script>

<style>
</style>
