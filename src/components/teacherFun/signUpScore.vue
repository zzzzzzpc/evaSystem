<template>
  <div>
    <el-table ref="filterTable" :data="tableData.slice((currentPage-1) * pagesize, currentPage * pagesize)" style="width: 100%">
      <el-table-column prop="cno" label="课程号" sortable width="180" column-key="courseId">
      </el-table-column>
      <el-table-column prop="cname" label="课程名" width="180">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="success" icon="el-icon-edit" circle @click="showStu(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <p></p>
    <div style="text-align: center;margin-top: 30px;">
      <el-pagination background layout="prev, pager, next" :total="total" @current-change="current_change">
      </el-pagination>
    </div>


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
              <el-button type="warning" icon="el-icon-search" circle @click="innerVisible_info = true"></el-button>
              <el-button type="primary" icon="el-icon-edit" circle @click="editStu(scope.row)"></el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
      <p></p>
      <el-dialog width="30%" title="test" :visible.sync="innerVisible_info" append-to-body>
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
        <el-button type="primary" plain>提交</el-button>
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
        this.pageTag = row.cno
        this.outerVisible = true
        TeacherApi.getCourseStu(this.pageTag).then(res => {
          this.stuData = res.tableData
        })
      },
      editStu(row) {
        this.innerVisible = true
        this.innerTitle = "登记【" + row.sname + "】的成绩"
      }
    },

    data() {
      return {
        innerTitle: "",

        multipleSelection: [],
        total: 0,
        pagesize: 4,
        currentPage: 1,
        tableData: [],
        outerVisible: false,
        innerVisible: false,
        pageTag: '',
        stuData: [],

        options: [{
          value: '指标点1',
          label: '指标点1的内容',
          state: '未登记',
        }], //存储指标点的序号
        value: '', //

        score: 60,

        innerVisible_info:false
      }
    },

    created() {
      this.getCourseInfo()
    }
  }
</script>
