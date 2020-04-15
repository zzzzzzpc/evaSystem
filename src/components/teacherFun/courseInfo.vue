<template>
  <div>
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
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="showDetail(scope.row)" type="primary" icon="el-icon-message" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <p></p>
    <div style="text-align: center;margin-top: 30px;">
      <el-pagination background layout="prev, pager, next" :total="total" @current-change="current_change">
      </el-pagination>
    </div>
    <!-- 展示对话框 -->
    <el-dialog title="课程详细信息" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="course_detail_name" label="课程教学大纲" width="150"></el-table-column>
        <el-table-column property="index_detail_id" label="指标点id" width="200"></el-table-column>
        <el-table-column property="index_detail_content" label="指标点内容" width="200"></el-table-column>
      </el-table>
      <p></p>
      <el-button type="primary" @click="showStu">查看选课学生名单</el-button>
      <el-dialog width="30%" title="选课学生名单" :visible.sync="innerVisible" append-to-body>
        <el-table :data="stuData">
          <el-table-column property="sno" label="学号" width="150" sortable></el-table-column>
          <el-table-column property="sname" label="姓名" width="150"></el-table-column>
        </el-table>
      </el-dialog>
    </el-dialog>
  </div>
</template>

<script>
  import TeacherApi from '../../api/teacher.js'
  export default {
    data() {
      return {
        multipleSelection: [],
        total: 0,
        pagesize: 4,
        currentPage: 1,
        tableData: [],
        //以下是详细信息数据
        gridData: [], //gridData放置详细信息
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '120px',
        outerVisible: false,
        //内层对话框数据
        stuData: [],
        innerVisible: false,
        pageTag: '' //用来存放查看学生选课的课程号
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
      getCourseInfo() {
        TeacherApi.getCourseInfo(this.$store.state.id).then(res => {
          this.total = (Math.ceil(res.total / this.pagesize)) * 10
          this.tableData = res.tableData

        })
      },
      showDetail(row) {
        this.pageTag = row.cno
        this.dialogTableVisible = true
        TeacherApi.getCourseDetail(row.cno).then(res => {

          this.gridData = [{
            cname: res.tableData[0].cname,
            course_detail_name: res.tableData[0].course_detail_name,
            index_detail_id: res.tableData[0].index_detail_id,
            index_detail_content: res.tableData[0].index_detail_content
          }]

        })
      },
      showStu() {
        this.innerVisible = true
        TeacherApi.getCourseStu(this.pageTag).then(res => {
          this.stuData = res.tableData
        })

      }

    },
    created(to, from, next) {
      this.getCourseInfo()
    }


  }
</script>
