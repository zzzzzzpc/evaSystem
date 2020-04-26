<template>
  <div style="margin: 0 auto;">
  <p>一键导入excel分配课程指标点</p>
  <form action="http://148.70.15.23:8000/courseTemplate/" method="post" enctype="multipart/form-data" target="view_window">
    <input type='file' name='textfield' id='textfield' />
    <input type="submit" name="submit" value="上传" />
  </form>

  <p>
  <a href="http://148.70.15.23:8000/download2/" download="http://148.70.15.23:8000/download2/" target="view_window">点击下载课程模板</a>
  <a href="http://148.70.15.23:8000/downloadCourse/" download="http://148.70.15.23:8000/download1/" target="view_window">导出数据</a>
  <p/>
    <el-select v-model="value" placeholder="请选择一个指标点">
      <el-option v-for="item in index" :key="item.index_detail_id" :value="item.index_detail_id">
        <span style="float: left">{{ item.index_detail_id }}</span>
      </el-option>
    </el-select>
    <p></p>

    <el-table ref="filterTable" :data="tableData.slice((currentPage-1) * pagesize, currentPage * pagesize)" style="width: 100%">
      <el-table-column prop="cno" label="课程id" sortable width="180" column-key="courseId">
      </el-table-column>
      <el-table-column prop="cname" label="课程名" width="180">
      </el-table-column>
      <el-table-column fixed="right" label="移除" width="100">
        <template slot-scope="scope">
          <el-button @click="removeCourse(scope.row)" type="danger" icon="el-icon-remove" circle></el-button>
        </template>
      </el-table-column>
    </el-table>

    <p></p>
    <el-button type="primary" @click="showCourse()">添加课程</el-button>
    <div style="text-align: center;margin-top: 20px;">
      <el-pagination background layout="prev, pager, next" :total="total" @current-change="current_change">
      </el-pagination>
    </div>

    <el-dialog width="30%" title="添加课程" :visible.sync="outerVisible" append-to-body>
      <el-table ref="filterTable" :data="gridData.slice((currentPage1-1) * pagesize1, currentPage1 * pagesize1)" style="width: 100%">
        <el-table-column prop="cno" label="课程id" sortable width="180" column-key="courseId">
        </el-table-column>
        <el-table-column prop="cname" label="课程名" width="180">
        </el-table-column>
        <el-table-column prop="weight" label="权重" width="180">
        </el-table-column>
        <el-table-column fixed="right" label="添加" width="100">
          <template slot-scope="scope">
            <el-button @click="addCourse(scope.row)" type="primary" icon="el-icon-plus" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <p></p>
      <el-pagination background layout="prev, pager, next" :total="total1" @current-change="current_change1">
      </el-pagination>
    </el-dialog>

  </div>
</template>

<script>
  import SPApi from "../../api/spAdmin.js"
  export default {

    data() {
      return {
        total: 0,
        currentPage: 1,
        pagesize: 4,
        tableData: [], //存课程

        index: [], //保存指标点的id的数组

        value: '', //保存指标点的id

        gridData: [], //新增加的课程
        outerVisible: false,
        total1: 0,
        currentPage1: 1,
        pagesize1: 4,
      }
    },
    methods: {
      current_change(currentPage) {
        this.currentPage = currentPage
      },
      current_change1(currentPage) {
        this.currentPage1 = currentPage
      },
      getIndexDetail() {

        SPApi.allIndextDetail().then(res => {
          this.index = res.tableData
        })
      },
      removeCourse(row) {
        SPApi.removeCourse(this.value, row.cno).then(res => {
          if (res.message == "success") {
            this.$notify({
              title: '成功',
              message: '移除成功',
              type: 'success'
            });
            SPApi.getCourse(this.value).then(res => {
              this.tableData = res.tableData
              this.total = (Math.ceil(this.gridData.length / this.pagesize)) * 10
            })
          } else {
            this.$notify.error({
              title: '失败',
              message: '移除失败，请联系管理员',
            });
          }
        })
      },
     //获取没有的课程
     showCourse(row) {
       this.outerVisible = true
        SPApi.showCourse(this.value).then(res=>{
          this.gridData = res.tableData
          this.total1 = (Math.ceil(this.gridData.length / this.pagesize1)) * 10
        })
     },
     addCourse(row) {
       SPApi.addCourse(this.value, row.cno).then(res=>{
         if (res.message == "success") {
           this.$notify({
             title: '成功',
             message: '添加成功',
             type: 'success'
           });
           SPApi.showCourse(this.value).then(res=>{
             this.gridData = res.tableData
             this.total1 = (Math.ceil(this.gridData.length / this.pagesize1)) * 10
           });
           SPApi.getCourse(this.value).then(res => {
             this.tableData = res.tableData
             this.total = (Math.ceil(this.tableData.length / this.pagesize)) * 10
           });
         } else {
           this.$notify.error({
             title: '失败',
             message: '添加失败，请联系管理员',
           });
         }
       })


     }
    },
    watch: {
      value(val) {
        SPApi.getCourse(this.value).then(res => {
          this.tableData = res.tableData
          this.total = (Math.ceil(this.tableData.length / this.pagesize)) * 10
        })
      }
    },
    created() {
      this.getIndexDetail()
    }
  }
</script>

<style>
</style>
