export default {

  'post|/stuCourseSelect': option => {
    return {
      total: 1,//一共选了多少门课的数量
      tableData: [{
        cno: "1-1",
        cname: "数据结构",
        nature: "必修课程",
        ca_name: "张三",//课程负责人
        tperiod: 36,//课时
        credit: 4,//学分
      }],
    }
  },
  'post|/stuCourseDetailScore': option => {
    return {
      tableData: [{
        cname: "数据结构",//课程名
        course_detail_name: "1234567890",//课程教学大纲内容
        index_detail_id: "1",//指标点编号
        index_detail_content: "qwerrtyrtyr",//指标点内容
        score: "90",//这个课在这个指标点的实际分值
      }],
    }

  },
  'post|/stuWarning': option => {
    return {
      total:1,//需要预警课程的数目
       tableData: [{
         cno: "1-1",//课程号
         cname: "数据结构",//课程名
         warning: "预警",//分为"预警"和"未预警"
       }],
    }
  },

  'post|/stuIndex': option => {
    return {
      total:1,//一共有多少指标点
      indiv_score: 80,//个人评价值
      tableData:[{
        index_detail_id: '1-1',//指标点的id
        index_detail_content: "1234312431",//指标点的内容
        score:'66'//这个指标点对应的分数
      }]
    }
  }
}
