<template>
  <div>
  <el-card class="box-card">
    <el-timeline class = "text item">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp">
          {{activity.content}}
        </el-timeline-item>
      </el-timeline>
  </el-card>
  <p><p/>
  <FormatIndex></FormatIndex>
  <p><p/>
  <FormatIndexDetail/>
  </div>
</template>

<script>
  import FormatIndex from './formatIndex.vue'
  import FormatIndexDetail from './spFormIndexDetail.vue'

   export default {
      data() {
        return {
          activities: [{
            content: '第一步 格式化毕业要求',
            size: 'large',
            type: 'success',
          }, {
            content: '第二步 格式化指标点',
            type: 'info',
          }, {
            content: '第三步 分配指标点课程',
            type:'info',
            size: 'large'
          }]
        };
      },
      components:{
        FormatIndex,
        FormatIndexDetail
      },
      methods:{

      }
    };
</script>

<style>
   .text {
      font-size: 14px;
    }

    .item {
      padding: 18px 0;
    }

    .box-card {
      width: 480px;
    }
</style>
