<template>
  <div>
    <el-card class="box-card">
      <el-timeline class="text item">
        <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon" :type="activity.type"
          :color="activity.color" :size="activity.size" :timestamp="activity.timestamp">
          {{activity.content}}
        </el-timeline-item>
      </el-timeline>
      <el-button type="success" @click="last">上一步</el-button>
      <el-button type="success" @click="next">下一步</el-button>

    </el-card>
    <p></p>
    <FormatIndex v-if="show1"></FormatIndex>
    <p></p>
    <FormatIndexDetail v-if="show2"></FormatIndexDetail>
    <p></p>
    <FormatCourse v-if="show3"></FormatCourse>

  </div>
</template>

<script>
  import FormatIndex from './formatIndex.vue'
  import FormatIndexDetail from './spFormIndexDetail.vue'
  import FormatCourse from './formatCourse.vue'

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
          type: 'info',
          size: 'large'
        }],
        count: 0,
        show1: true,
        show2: false,
        show3: false,
      };
    },
    components: {
      FormatIndex,
      FormatIndexDetail,
      FormatCourse
    },
    methods: {
      next() {
        if (this.count == 0) {
          this.show1 = false;
          this.show2 = true;
          this.show3 = false;
          this.activities[1].type = "success"
        } else if (this.count == 1) {
          this.show1 = false;
          this.show2 = false;
          this.show3 = true;
          this.activities[2].type = "success"
        }
        if(this.count < 2)
          this.count += 1;
      },
      last(){
        if(this.count == 1) {
          this.show1 = true;
          this.show2 = false;
          this.show3 = false;
          this.activities[1].type = "info"
        } else if(this.count==2){
          this.show1 = false;
          this.show2 = true;
          this.show3 = false;
          this.activities[2].type = "info"
        }
        if(this.count != 0)
          this.count -=1;
      }

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
