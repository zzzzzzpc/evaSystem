<template>
  <div>
  <el-select v-model="value" placeholder="请选择一个毕业要求">
    <el-option
      v-for="item in index"
      :key="item.index_id"
      :label="item.index_name"
      :value="item.index_id">
      <span style="float: left">{{ item.index_name }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.index_id }}</span>
    </el-option>
  </el-select>
  <p></p>
  <div>

    <el-table ref="filterTable" :data="tableData.slice((currentPage-1) * pagesize, currentPage * pagesize)" style="width: 100%">
      <el-table-column prop="index_detail_id" label="指标点id" sortable width="180" column-key="courseId">
      </el-table-column>
      <el-table-column prop="index_detail_content" label="指标点内容" width="180">
      </el-table-column>
      <el-table-column fixed="right" label="移除" width="100">
        <template slot-scope="scope">
          <el-button @click="removeIndexDetail(scope.row)" type="danger" icon="el-icon-remove" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <p></p>
    <el-button type="primary" @click="outerVisible = true">添加指标点</el-button>
    <div style="text-align: center;margin-top: 20px;">
      <el-pagination background layout="prev, pager, next" :total="total" @current-change="current_change">
      </el-pagination>

      <el-dialog width="30%" title="添加指标点" :visible.sync="outerVisible" append-to-body>
        <div style="margin: 20px 0;"></div>
        <p>输入新的指标点的内容</p>
        <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 10}" v-model="textarea">
        </el-input>
        <p></p>
        <el-button type="primary" @click="submitIndexDetail">提交</el-button>
      </el-dialog>

    </div>

  </div>
  </div>
</template>

<script>
  import SPApi from "../../api/spAdmin.js"
  export default {
    data() {
      return {
        textarea:"",
        total: 0,
        currentPage: 1,
        pagesize: 4,
        tableData: [],//存指标点内容
        outerVisible: false,

        index: [{
          index_id: '1',
          index_name: '名称'
        }],
        value: ''
      }
    },
    methods:{
      current_change(currentPage) {
        this.currentPage = currentPage
      },
      submitIndexDetail(){
        SPApi.submitIndexDetail(this.value, this.textarea).then(res=>{
          if(res.message == "success" && this.textarea != ""){
            this.$notify({
              title: '成功',
              message: '指标点已录入！',
              type: 'success'
            });
            SPApi.getIndexDetail(this.value).then(res=>{
              this.tableData = res.tableData
              this.total = (Math.ceil(this.tableData.length / this.pagesize)) * 10
            })
          } else if(this.textarea == ""){
            this.$notify.error({
              title: '失败',
              message: '指标点不能为空',
            });
            } else {
              this.$notify.error({
                title: '失败',
                message: '录入失败，请联系管理员',
              });
            }
        })
      },
      removeIndexDetail(row){
        SPApi.removeIndexDetail(this.value, row.index_detail_id).then(res=>{
          if(res.message == "success") {
            this.$notify({
              title: '成功',
              message:'移除成功',
              type: 'success'
            });
            SPApi.getIndexDetail(this.value).then(res=>{
              this.tableData = res.tableData
              this.total = (Math.ceil(this.tableData.length / this.pagesize)) * 10
            })
          } else {
            this.$notify.error({
              title: '失败',
              message: '移除失败，请联系管理员',
            });
          }
        })
        }
      },

    watch:{
      value(val){
        SPApi.getIndexDetail(this.value).then(res=>{
          this.tableData = res.tableData
          this.total = (Math.ceil(this.tableData.length / this.pagesize)) * 10
        })
      }
    },

    created(){
      SPApi.getIndex().then(res=>{
        this.index = res.tableData
      })
    }
  }
</script>
