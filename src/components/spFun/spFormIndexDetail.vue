<template>
  <div>
  <el-select v-model="value" placeholder="请选择一个毕业要求">
    <el-option
      v-for="item in index"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
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
          <el-button @click="" type="danger" icon="el-icon-remove" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <p></p>
    <el-button type="primary" @click="">添加指标点</el-button>
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
        <el-button type="primary" @click="">提交</el-button>
      </el-dialog>
    </div>

  </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        textarea1:"",
        textarea2:"",
        total: 0,
        currentPage: 1,
        pagesize: 4,
        tableData: [],//存指标点内容
        outerVisible: false,

        index: [{
          value: '1',
          label: '名称'
        }],
        value: ''
      }
    },
    methods:{
      current_change(currentPage) {
        this.currentPage = currentPage
      },
      getIndexDetail(){
        
      }
    },
   created(){
     getIndexDetail()
   }
  }
</script>
