<template>
  <div class="center">
   <div class="transition-box" style="background-color: #CC5A5A;">课程平均分</div>
   <p>计算公式：(∑选这门课每个学生这门课的课程达成度)/这门课学生数量</p>

   <p></p>

   <el-table ref="filterTable" :data="tableData.slice((currentPage-1) * pagesize, currentPage * pagesize)" style="width: 100%">
     <el-table-column prop="cno" label="课程id" sortable column-key="courseId">
     </el-table-column>
     <el-table-column prop="cname" label="课程名">
     </el-table-column>
     <el-table-column prop="score" label="平均分">
     </el-table-column>
   </el-table>
   <div style="margin: 0 auto;margin-top: 30px;">
     <el-pagination background layout="prev, pager, next" :total="total" @current-change="current_change">
     </el-pagination>
   </div>

   <hr/>
   <div class="transition-box" style="background-color: #CC5A5A;">班级平均分</div>
   <p>计算公式：(∑某个班每门课课程达成度)/课程数量</p>
   <div id="myChart" :style="{width: '1000px', height: '300px'}"></div>





   <hr/>
   <div class="transition-box" style="background-color: #CC5A5A;">年级平均分</div>
   <p>计算公式：(∑每个班班级平均分)/班级数量</p>
   <el-progress type="circle" v-model="percentage" :percentage="percentage"></el-progress>
  </div>

</template>


<script>
import SPApi from '../../api/spAdmin.js'
import echarts from "echarts/lib/echarts"
export default {
  data(){
    return {
      total: 0,
      currentPage: 1,
      pagesize: 4,
      tableData: [], //存课程

      percentage:0


    }
  },

  methods:{
    current_change(currentPage) {
      this.currentPage = currentPage
    },
    drawLine(xdata, ydata){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            // myChart.setOptions(this.)
            myChart.setOption({
                title: { text: '每个班级的平均分(年级-班级)' },
                tooltip: {},
                xAxis: {
                    data: xdata
                },
                yAxis: {},
                series: [{
                    name: '平均分',
                    type: 'bar',
                    data: ydata
                }]
            });
        },

  },
  created() {

    SPApi.getAvg().then(res=>{

      this.percentage = res.avg
    })
  },
  mounted(){
    SPApi.getAllCourseAvg().then(res=>{
      this.tableData = res.tableData
    })
    SPApi.getAllClassAvg().then(res=>{
      this.drawLine(res.xdata, res.ydata)
    })

  },
  watch:{

  }
}


</script>

<style>

</style>
