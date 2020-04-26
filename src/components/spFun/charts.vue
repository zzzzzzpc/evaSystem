<template>
  <div class="center">
   <div class="transition-box" style="background-color: #CC5A5A;">课程平均分</div>

   <p></p>
   <el-select v-model="value" placeholder="请选择一个指标点">
     <el-option v-for="item in index" :key="item.index_detail_id" :value="item.index_detail_id">
       <span style="float: left">{{ item.index_detail_id }}</span>
     </el-option>
   </el-select>
   <p>返回该指标点下每门课的平均值</p>
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
   <div class="transition-box" style="background-color: #CC5A5A;">班级平均个人评价值</div>
   <p>计算公式：(∑某个班每个同学个人评价值)/这个班人数</p>
   <div id="myChart" :style="{width: '1000px', height: '300px'}"></div>





   <hr/>
   <div class="transition-box" style="background-color: #CC5A5A;">年级个人毕业评价值</div>
   <p>计算公式：(∑全年级每个同学个人评价值)/全年级人数</p>
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

      percentage:0,
      value:'',
      index:[],


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
    SPApi.allIndextDetail().then(res=>{
      this.index = res.tableData
    })
    SPApi.getAvg().then(res=>{
      this.percentage = res.avg
    })


  },
  mounted(){
    SPApi.getAllCourseAvg(this.value).then(res=>{
      this.tableData = res.tableData
    })
    SPApi.getAllClassAvg().then(res=>{
      this.drawLine(res.xdata, res.ydata)
    })

  },
  watch:{

    value(val) {
      SPApi.getAllCourseAvg(this.value).then(res => {
        this.tableData = res.tableData
        this.total = (Math.ceil(this.tableData.length / this.pagesize)) * 10
      })
    }
  }
}


</script>

<style>

</style>
