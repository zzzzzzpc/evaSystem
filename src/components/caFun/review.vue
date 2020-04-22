<template>
  <div>
    <el-table ref="filterTable" :data="tableData.slice((currentPage-1) * pagesize, currentPage * pagesize)" style="width: 100%">
      <el-table-column prop="cno" label="课程id" sortable width="180" column-key="courseId">
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
        <el-table-column property="classno" label="班级" width="150" sortable></el-table-column>
        <!-- <el-table-column property="sname" label="姓名" width="150"></el-table-column> -->
        <el-table-column prop="roll_state" label="登记状态" :formatter="formatter" :filters="[{text: '登记完成', value: '登记完成'}, {text: '登记缺失', value: '登记缺失'},
                       {text: '审核完成', value: '审核完成'}]"
          :filter-method="filterTag" filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag :type="scope.row.roll_state == '审核完成' ? 'primary' : 'danger'" disable-transitions>{{scope.row.roll_state}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button @click="reviewCourse(scope.row)" type="warning">审核</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <!--审核成绩部分-->
    <el-dialog :title="innertitle" :visible.sync="innerVisible" width="30%">
      <p></p>

      <el-table ref="filterTable" :data="gridData.slice((currentPage1-1) * pagesize1, currentPage1 * pagesize1)" style="width: 100%">
        <el-table-column property="sno" label="学号" width="150" sortable></el-table-column>
        <el-table-column property="sname" label="姓名" width="150"></el-table-column>
        <el-table-column property="index_detail_id" label="指标点id" width="150"></el-table-column>
        <el-table-column property="index_detail_score" label="分数" width="150"></el-table-column>
      </el-table>
      <div style="text-align: center;margin-top: 30px;">
        <el-pagination background layout="prev, pager, next" :total="total1" @current-change="current_change1">
        </el-pagination>
      </div>

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

        total1: 0,
        pagesize1: 4,
        currentPage1: 1,

        tableData: [], //显示课程

        //以下是详细信息数据
        formLabelWidth: '120px',

        outerVisible: false,
        innerVisible: false,

        //内层对话框数据
        stuData: [], //显示有哪些班级选这个课
        innerVisible: false,
        pageName: '', //用来存放查看学生选课的课程名字
        pageTag: '', //存放课程号

        pageClass:'',//存放班级号

        outertitle: '',
        innertitle: '',

        gridData:[]//存储学生指标点成绩

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
      current_change1(currentPage) {
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
        CAApi.getCourseClass(row.cno).then(res => {
          this.stuData = res.tableData
        })
      },

      reviewCourse(row) {
        this.pageClass = row.classno
        if (row.roll_state == "登记缺失") {
          this.innerVisible = false
          this.$notify.error({
            title: '错误',
            message: '登记缺失不可审核！'
          });

        } else {
          this.innerVisible = true

          this.innertitle = "审核【" + row.classno + "】班级在【" + this.pageName + "】的成绩"
          CAApi.getCourseReview(row.classno, this.pageTag).then(res => {
            this.gridData = res.tableData
            this.total1 = this.total = (Math.ceil(res.total / this.pagesize1)) * 10

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
        CAApi.setCourseState(this.pageClass, this.pageTag, state).then(res=>{
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
        CAApi.getCourseClass(row.cno).then(res => {
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
