<template>
  <div>
   <div class="transition-box" style="background-color: #CC5A5A;">课程平均分</div>

   <p></p>

   <el-table ref="filterTable" :data="tableData.slice((currentPage-1) * pagesize, currentPage * pagesize)" style="width: 100%">
     <el-table-column prop="cno" label="课程id" sortable width="180" column-key="courseId">
     </el-table-column>
     <el-table-column prop="cname" label="课程名" width="180">
     </el-table-column>
     <el-table-column prop="score" label="平均分" width="180">
     </el-table-column>
   </el-table>
   <div style="text-align: center;margin-top: 30px;">
     <el-pagination background layout="prev, pager, next" :total="total" @current-change="current_change">
     </el-pagination>
   </div>

   <hr/>
   <div class="transition-box" style="background-color: #CC5A5A;">班级平均分</div>
   <div id="myChart" :style="{width: '1000px', height: '300px'}"></div>
   <div id="myChart2" :style="{width: '600px', height: '600px'}"></div>



   <hr/>
   <div class="transition-box" style="background-color: #CC5A5A;">年级平均分</div>
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
   drawLine2(){
     let myChart = this.$echarts.init(document.getElementById('myChart2'))

     var data = [
         [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
         [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
     ];
     myChart.setOption({
       backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
               offset: 0,
               color: '#f7f8fa'
           }, {
               offset: 1,
               color: '#cdd0d5'
           }]),
           title: {
               text: '1990 与 2015 年各国家人均寿命与 GDP'
           },
           legend: {
               right: 10,
               data: ['1990', '2015']
           },
           xAxis: {
               splitLine: {
                   lineStyle: {
                       type: 'dashed'
                   }
               }
           },
           yAxis: {
               splitLine: {
                   lineStyle: {
                       type: 'dashed'
                   }
               },
               scale: true
           },
           series: [{
               name: '1990',
               data: data[0],
               type: 'scatter',
               symbolSize: function (data) {
                   return Math.sqrt(data[2]) / 5e2;
               },
               emphasis: {
                   label: {
                       show: true,
                       formatter: function (param) {
                           return param.data[3];
                       },
                       position: 'top'
                   }
               },
               itemStyle: {
                   shadowBlur: 10,
                   shadowColor: 'rgba(120, 36, 50, 0.5)',
                   shadowOffsetY: 5,
                   color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                       offset: 0,
                       color: 'rgb(251, 118, 123)'
                   }, {
                       offset: 1,
                       color: 'rgb(204, 46, 72)'
                   }])
               }
           }, {
               name: '2015',
               data: data[1],
               type: 'scatter',
               symbolSize: function (data) {
                   return Math.sqrt(data[2]) / 5e2;
               },
               emphasis: {
                   label: {
                       show: true,
                       formatter: function (param) {
                           return param.data[3];
                       },
                       position: 'top'
                   }
               },
               itemStyle: {
                   shadowBlur: 10,
                   shadowColor: 'rgba(25, 100, 150, 0.5)',
                   shadowOffsetY: 5,
                   color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                       offset: 0,
                       color: 'rgb(129, 227, 238)'
                   }, {
                       offset: 1,
                       color: 'rgb(25, 183, 207)'
                   }])
               }
           }]





     })
   }

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
      this.drawLine2()
    })

  },
  watch:{

  }
}


</script>

<style>

</style>
