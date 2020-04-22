<template>
  <div class="center">
    <el-table ref="filterTable" :data="tableData.slice((currentPage-1) * pagesize, currentPage * pagesize)" style="width: 100%">
      <el-table-column prop="cno" label="课程号" sortable column-key="courseId">
      </el-table-column>
      <el-table-column prop="cname" label="课程名">
      </el-table-column>
      <el-table-column prop="warning" label="预警状态" :formatter="formatter" :filters="[{text: '预警', value: '预警'}, {text: '未预警', value: '未预警'}]"
        :filter-method="filterTag" filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag :type="scope.row.warning == '预警' ? 'danger' : 'primary'" disable-transitions>{{scope.row.warning}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 0 auto;margin-top: 30px;">
      <el-pagination background layout="prev, pager, next" :total="total" @current-change="current_change">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import StudentApi from '../../api/student.js'
  export default {
    data() {
      return {
        courseScore:'',
        multipleSelection: [],
        total: 0,
        pagesize: 4,
        currentPage: 1,
        tableData: [],
        //以下是详细信息数据

        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '120px',
        outerVisible: false,
        //内层对话框数据
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
        return row.warning === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      current_change(currentPage) {
        this.currentPage = currentPage
      },
      getCourseInfo() {
        StudentApi.getCourseWarningStu(this.$store.state.id).then(res => {
          this.total = (Math.ceil(res.total / this.pagesize)) * 10
          // alert(res.tableData[0].warning)
          this.tableData = res.tableData
        })
      },
    },
    created(to, from, next) {
      this.getCourseInfo()
    }


  }
</script>
