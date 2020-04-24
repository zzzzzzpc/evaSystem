<template>
  <div class="center">
    <el-row>
      <div style="width: 20%;float: left;">
        <h3>一键导入成绩</h3>
        <el-button type="warning" @click="downloadfile()">下载毕业要求模板</el-button>
        <el-upload
          name="file"
          class="upload-demo"
          ref="upload"
          action="http://148.70.15.23:8000/gradeTemplate/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false">
          <el-button style="margin-top: 30px;" slot="trigger" type="primary">选取文件</el-button>
          <el-button style="margin-top: 30px;" type="success" @click="submitUpload">上传文件</el-button>
          <div slot="tip" class="el-upload__tip">只能上传模板格式的Excel文件</div>
        </el-upload>
      </div>
      <div style="width: 80%;float: right;">
        <el-table ref="filterTable" :data="tableData.slice((currentPage-1) * pagesize, currentPage * pagesize)">
          <el-table-column prop="cno" label="课程号" sortable column-key="courseId">
          </el-table-column>
          <el-table-column prop="cname" label="课程名">
          </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button type="success" icon="el-icon-edit" circle @click="showStu(scope.row)"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <p></p>
        <div style="margin: 0 auto;margin-top: 20px;">
          <el-pagination background layout="prev, pager, next" :total="total" @current-change="current_change">
          </el-pagination>
        </div>
      </div>
    </el-row>

    <el-dialog title="登记学生成绩" :visible.sync="outerVisible">
      <el-table :data="stuData">
        <el-table-column property="sno" label="学号" width="150" sortable></el-table-column>
        <el-table-column property="sname" label="姓名" width="200"></el-table-column>
        <el-table-column prop="roll_state" label="登记状态" :filters="[{text: '登记完成', value: '登记完成'}, {text: '登记缺失', value: '登记缺失'}]"
          :filter-method="filterTag" filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag :type="scope.row.roll_state == '登记完成' ? 'primary' : 'danger'" disable-transitions>{{scope.row.roll_state}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button-group>
              <el-button type="warning" icon="el-icon-search" circle @click="showStudIndex(scope.row)"></el-button>
              <el-button type="primary" icon="el-icon-edit" circle @click="editStu(scope.row)"></el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
      <p></p>
      <el-dialog width="30%" :title="innerTitleInfo" :visible.sync="innerVisible_info" append-to-body>

        <el-table :data="indexDetailData" style="width: 100%">
          <el-table-column prop="index_detail_id" label="指标点id" width="180">
          </el-table-column>
          <el-table-column prop="score" label="分值" width="180">
          </el-table-column>
        </el-table>
      </el-dialog>

      <el-dialog width="30%" :title="innerTitle" :visible.sync="innerVisible" append-to-body>
        <el-select v-model="value" clearable placeholder="请选择指标点登记">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.state }}</span>
          </el-option>

        </el-select>
        <div class="block">
          <el-slider v-model="score" show-input>
          </el-slider>
        </div>
        <el-button type="primary" plain @click="commit()">提交</el-button>
      </el-dialog>
      <div slot="footer" class="dialog-footer">
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import TeacherApi from '../../api/teacher.js'
  export default {

    methods: {
      handleClick(row) {
        console.log(row);
      },
      getCourseInfo() {
        TeacherApi.getCourseInfo(this.$store.state.id).then(res => {
          this.total = (Math.ceil(res.total / this.pagesize)) * 10
          this.tableData = res.tableData
        })
      },
      filterTag(value, row) {
        return row.roll_state === value;
      },
      current_change(currentPage) {
        this.currentPage = currentPage
      },
      showStu(row) {
        this.pageCname = row.cname
        this.pageTag = row.cno
        this.outerVisible = true
        TeacherApi.getCourseStu(this.pageTag).then(res => {
          this.stuData = res.tableData
          this.courseScore = res.course_score
        })
      },
      showStudIndex(row) {

        this.innerTitleInfo = "【" + row.sname + "】" + "在【" + this.pageCname + "】的成绩"
        this.innerVisible_info = true
        TeacherApi.getIndexDetailScore(this.pageTag, row.sno).then(res => {
          this.courseScore = res.course_score
          this.indexDetailData = res.indexDetailData
        })
      },
      downloadfile(){
        window.open("http://148.70.15.23:8000/downloadGrade/")
      },
      editStu(row) {
		  this.pageSno = row.sno
        if (row.roll_state == "审核完成") {
          this.$notify.error({
            title: '错误',
            message: '审核完成，不可修改'
          });
        } else {
          this.pageSname = row.sname
          this.innerVisible = true

          this.innerTitle = "登记【" + row.sname + "】" + "在 【" + this.pageCname + "】 的成绩"
          TeacherApi.getIndexDetailState(this.pageTag, row.sno).then(res => {
            this.options = res.options
          })
        }
      },
      commit() {
        TeacherApi.postIndexDetailScore(this.pageTag, this.pageSno, this.value, this.score).then(res => {

          // if (res.status == 200) {
		if (res.message == "success") {
            this.$notify({
              title: '成功',
              message: '分值已经录入系统',
              type: 'success'
            });
            TeacherApi.getCourseStu(this.pageTag).then(res => {
              this.stuData = res.tableData
            })
          } else {
            this.$notify.error({
              title: '错误',
              message: '分值录入失败，请联系管理员'
            });
          }
        })

      }
    },

    data() {
      return {

        innerTitle: "",
        innerTitleInfo: "",

        multipleSelection: [],
        total: 0,
        pagesize: 4,
        currentPage: 1,
        tableData: [],
        outerVisible: false,
        innerVisible: false,
        pageTag: '', //课程号
        pageCname: '',
        pageSname: '',
		pageSno:'',
        stuData: [],

        options: [{
          value: '指标点1编号',
          label: '指标点1的内容',
          state: '未登记',
        }], //存储指标点的序号
        value: '', //

        score: 60,

        innerVisible_info: false,
        indexDetailData: [], //学生指标点的详细信息

        courseScore: 0
      }
    },

    created() {
      this.getCourseInfo()
    }
  }
</script>

<style>
  .el-row {
    width: 100%;
  }
</style>
