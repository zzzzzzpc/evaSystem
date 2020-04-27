<template>
  <div class="center">
    <div class="transition-box" style="background-color: #CC5A5A;">个人评价达成度：{{indiv_score}}</div>
    <hr/>



    <div class="transition-box">毕业要求评价结果</div>
    <el-table ref="filterTable" :data="graData.slice((currentPageGra-1) * pagesize, currentPageGra * pagesize)" style="width: 100%">
      <el-table-column prop="index_id" label="毕业要求id" sortable width="180" column-key="courseId">
      </el-table-column>
      <el-table-column prop="index_name" label="毕业要求名">
      </el-table-column>
      <el-table-column prop="score" label="评价值" width="100">
      </el-table-column>
    </el-table>

    <p></p>
    <div style="margin: 0 auto;margin-top: 30px;">
      <el-pagination background layout="prev, pager, next" :total="total_gra" @current-change="current_change_gra">
      </el-pagination>
    </div>
    <hr/>



    <div class="transition-box">指标点评价达成度</div>
    <el-table ref="filterTable" :data="indexTableData.slice((currentPageIndex-1) * pagesize, currentPageIndex * pagesize)" style="width: 100%">
      <el-table-column prop="index_detail_id" label="指标点序号" sortable column-key="courseId">
      </el-table-column>
      <el-table-column prop="index_detail_content" label="指标点内容">
      </el-table-column>

      <el-table-column prop="score" label="指标点分数" width="100">
      </el-table-column>
      </el-table-column>
    </el-table>
    <p></p>
    <div style="margin: 0 auto;margin-top: 30px;">
      <el-pagination background layout="prev, pager, next" :total="total_index" @current-change="current_change_index">
      </el-pagination>
    </div>
    <p></p>
    <hr/>
    <div class="transition-box">课程达成度</div>
    <el-table ref="filterTable" :data="tableData.slice((currentPage-1) * pagesize, currentPage * pagesize)" style="width: 100%">
      <el-table-column prop="cno" label="课程号" sortable width="180" column-key="courseId">
      </el-table-column>
      <el-table-column prop="cname" label="课程名" width="180">
      </el-table-column>
      <el-table-column prop="credit" label="课程学分" width="100">
      </el-table-column>
      </el-table-column>
      <el-table-column prop="ca_name" label="课程负责人" width="100">
      </el-table-column>
      </el-table-column>
      <el-table-column prop="tperiod" label="课时" width="100">
      </el-table-column>
      <el-table-column prop="nature" label="课程类型" :formatter="formatter" :filters="[{text: '必修课程', value: '必修课程'}, {text: '选修课程', value: '选修课程'}]"
        :filter-method="filterTag" filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag :type="scope.row.nature == '必修课程' ? 'primary' : 'success'" disable-transitions>{{scope.row.nature}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="查看课程详细成绩" width="100">
        <template slot-scope="scope">
          <el-button @click="showStuScoreDetail(scope.row)" type="primary" icon="el-icon-info" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <p></p>
    <div style="margin: 0 auto;margin-top: 30px;">
      <el-pagination background layout="prev, pager, next" :total="total" @current-change="current_change">
      </el-pagination>
    </div>
    <!-- 展示对话框 -->
    <el-dialog title="课程详细信息" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="course_detail_name" label="课程教学大纲"></el-table-column>
        <el-table-column property="index_detail_id" label="指标点id"></el-table-column>
        <el-table-column property="index_detail_content" label="指标点内容" width="300"></el-table-column>
        <el-table-column property="index_score" label="评价值"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
  import StudentApi from '../../api/student.js'
  export default {
    data() {
      return {
        indiv_score: 100,

        multipleSelection: [],
        total: 0,
        total_index:0,

        pagesize: 4,
        currentPage: 1,
        currentPageIndex: 1,
        tableData: [],
        indexTableData:[],
        //以下是详细信息数据
        gridData: [], //gridData放置详细信息
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '120px',
        outerVisible: false,
        //内层对话框数据
        pageTag: '' ,//用来存放查看学生选课的课程号

        currentPageGra:1,
        total_gra:0,
        graData:[],//存放各种毕业要求


      }
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('courseId');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.nature === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      current_change(currentPage) {
        this.currentPage = currentPage
      },
      current_change_index(currentPageIndex) {
        this.currentPageIndex = currentPageIndex
      },
      current_change_gra(currentPageGra) {
        this.currentPageGra = currentPageGra
      },

      getStuIndex(){
        StudentApi.getIndexStu(this.$store.state.id).then(res =>{
          this.indiv_score = res.indiv_score
          this.total_index = res.total
          this.indexTableData = res.tableData
          this.total_index =  (Math.ceil(res.tableData.length / this.pagesize)) * 10
        })
      },

      getCourseInfo() {
        StudentApi.getCourseStuSelect(this.$store.state.id).then(res => {
          this.total = (Math.ceil(res.total / this.pagesize)) * 10
          this.tableData = res.tableData

        })
      },
      showStuScoreDetail(row) {
        this.pageTag = row.cno
        this.dialogTableVisible = true
        StudentApi.getCourseDetailScore(this.$store.state.id, row.cno).then(res => {
           this.gridData = res.tableData
        })
      },
      getIndexGra(){
        StudentApi.getAllIndex(this.$store.state.id).then(res =>{
          this.s = (Math.ceil(res.tableData.length / this.pagesize)) * 10
          this.graData = res.tableData
        })
      }
    },
    created(to, from, next) {
      this.getCourseInfo()
      this.getStuIndex()
      this.getIndexGra()
    }


  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 50px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding-top: 15px;
    box-sizing: border-box;
  }
</style>
