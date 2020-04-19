<template>
  <div>
    <el-table ref="filterTable" :data="tableData.slice((currentPage-1) * pagesize, currentPage * pagesize)" style="width: 100%">
      <el-table-column prop="cno" label="课程号" sortable width="180" column-key="courseId">
      </el-table-column>
      <el-table-column prop="cname" label="课程名" width="180">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="showStu(scope.row)" type="warning">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
    <p></p>
    <div style="text-align: center;margin-top: 30px;">
      <el-pagination background layout="prev, pager, next" :total="total" @current-change="current_change">
      </el-pagination>
    </div>
    <!-- 展示对话框 -->

    <el-dialog width="30%" :title="outertitle" :visible.sync="outerVisible" append-to-body>
      <el-table :data="stuData">
        <el-table-column property="sno" label="学号" width="150" sortable></el-table-column>
        <el-table-column property="sname" label="姓名" width="150"></el-table-column>
        <el-table-column prop="roll_state" label="课程状态" :formatter="formatter" :filters="[{text: '登记完成', value: '登记完成'}, {text: '登记缺失', value: '登记缺失'},
                       {text: '审核完成', value: '审核完成'}]"
          :filter-method="filterTag" filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag :type="scope.row.roll_state == '审核完成' ? 'primary' : 'danger'" disable-transitions>{{scope.row.roll_state}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="reviewCourse(scope.row)" type="warning">审核</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <!--审核成绩部分-->
    <el-dialog :title="innertitle" :visible.sync="innerVisible" width="20%">
      <p>课程达成度：{{courseScore}}</p>
      <el-table :data="gridData">
        <el-table-column property="index_detail_id" label="指标点编号" width="100"></el-table-column>
        <el-table-column property="score" label="分值" width="100"></el-table-column>
      </el-table>
      <p></p>
      <el-button @click="reviewScore()" type="success" id="pass" value="审核通过">审核通过</el-button>
      <el-button @click="reviewScore()" type="danger" id="fail" value="审核失败">撤销审核</el-button>
    </el-dialog>

  </div>
</template>

<script>
  import CAApi from '../../api/courseAdmin.js'
  import TeacherApi from '../../api/teacher.js'
  export default {
    data() {
      return {

        total: 0,
        pagesize: 4,
        currentPage: 1,
        tableData: [], //显示课程

        //以下是详细信息数据
        gridData: [], //显示学生成绩
        formLabelWidth: '120px',

        outerVisible: false,
        innerVisible: false,

        //内层对话框数据
        stuData: [], //显示有哪些学生选这个课
        innerVisible: false,
        pageName: '', //用来存放查看学生选课的课程名字
        pageTag: '', //存放课程的号码
        sno:'',

        outertitle: '',
        innertitle: '',
        courseScore: 0,
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
        return row.roll_state === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      current_change(currentPage) {
        this.currentPage = currentPage
      },
      getCourseInfo() {
        CAApi.getCourseInfo(this.$store.state.id).then(res => {
          this.total = (Math.ceil(res.total / this.pagesize)) * 10
          this.tableData = res.tableData

        })
      },

      showStu(row) {
        this.pageName = row.cname
        this.pageTag = row.cno
        this.outertitle = "审核【" + this.pageName + "】的成绩"
        this.outerVisible = true
        CAApi.getCourseStu(row.cno).then(res => {
          this.stuData = res.tableData
        })
      },

      reviewCourse(row) {
        this.sno = row.sno
        if (row.roll_state == "登记缺失") {
          this.innerVisible = false
          this.$notify.error({
            title: '错误',
            message: '登记缺失不可审核！'
          });

        } else {
          this.innerVisible = true

          this.innertitle = "审核【" + row.sname + "】在【" + this.pageName + "】的成绩"
          TeacherApi.getIndexDetailScore(this.pageTag, row.sno).then(res => {
            this.gridData = res.indexDetailData
            this.courseScore = res.course_score
          })
        }
      },

      reviewScore() {
        var state
        var result = document.getElementById('pass').value
        if(result == "审核通过")
          state = 1
        else
          state = 0
        CAApi.setCourseState(this.sno, this.pageTag, state).then(res=>{
          if(res.message == "fail") {
            this.$notify.error({
              title: '失败',
              message: '审核修改失败，请联系管理员'
            });
          } else {
            this.$notify({
              title: '成功',
              message: '审核修改成功',
              type: 'success'
            });

        }
        CAApi.getCourseStu(this.pageTag).then(res => {
          this.stuData = res.tableData
          })
        })

      }

    },
    created(to, from, next) {
      this.getCourseInfo()
    }


  }
</script>
