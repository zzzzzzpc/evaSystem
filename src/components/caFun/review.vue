<template>
  <div class="center">
    <el-table ref="filterTable" :data="tableData.slice((currentPage-1) * pagesize, currentPage * pagesize)" style="width: 100%">
      <el-table-column prop="cno" label="课程id" sortable column-key="courseId">
      </el-table-column>
      <el-table-column prop="cname" label="课程名">
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="showStu(scope.row)" type="warning">审核</el-button>
        </template>
      </el-table-column>
    </el-table>
    <p></p>
    <div style="margin: 0 auto;margin-top: 30px;">
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
            <el-button @click="reviewCourse(scope.row)" type="warning">审核通过</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <!--审核成绩部分-->
    <el-dialog :title="innertitle" :visible.sync="innerVisible" width="30%">
      <p></p>

      <div id="myChart" :style="{width: '550px', height: '300px'}"></div>
      <p>平均分：{{avg}}</p>
      <p>最高分：{{max}}</p>
      <p>最低分：{{min}}</p>
      <p></p>
      <el-button v-on:click="reviewScore($event)" type="success" id="pass" value="审核通过">审核通过</el-button>
      <el-button @click="informVisible = true" type="danger" id="fail" value="审核失败">撤销审核</el-button>
    </el-dialog>

    <el-dialog title="通知" :visible.sync="informVisible" width="30%">
      <p>输入通知教授这门课教授的消息</p>
      <el-input type="textarea" :autosize="{ minRows: 1, maxRows: 10}" v-model="textarea"/>
      <p></p>
      <el-button v-on:click="reviewScore($event)" type="success" id="" value="撤销审核">撤销审核</el-button>
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

       avg:0,
       min:0,
       max:0,

       textarea:"",

       informVisible:false,

       pass:"审核通过",
       fail:"撤销审核",
      }
    },

    methods: {
      drawLine(xdata, ydata) {
              // 基于准备好的dom，初始化echarts实例
              let myChart = this.$echarts.init(document.getElementById('myChart'))
              // 绘制图表
              // myChart.setOptions(this.)
              myChart.setOption({
                  title: { text: this.pageClass + '班学生成绩分布' },
                  tooltip: {},
                  xAxis: {
                      data: xdata
                  },
                  yAxis: {},
                  series: [{
                      name: '分数',
                      type: 'bar',
                      data: ydata
                  }]
              });
      },
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
            this.avg = res.avg
            this.max = res.max
            this.min = res.min
            var xdata = []
            var ydata = res.ydata
            this.drawLine(xdata, ydata)

          })
        }
      },

      reviewScore(event) {
        var state
        var result = event.currentTarget.value
        if(result == "审核通过")
          state = 1
        else
          state = 0
        if(this.textarea != '' && state == 0 && this.informVisible == true) {
          alert(this.textarea)
          CAApi.informTea(this.pageTag, this.textarea)
        }
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
        CAApi.getCourseClass(this.pageTag).then(res => {
          this.stuData = res.tableData
        })
        })
        this.textarea = ""
      }

    },
    created(to, from, next) {
      this.getCourseInfo()
    }


  }
</script>
