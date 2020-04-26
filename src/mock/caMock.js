export default {
  'post|/courseAdmin': option => {
    return {
      tname: '肖夢杰',//教师姓名
    };
  },
  'post|/caCourseInfo': option => {
    return {
      total: 4,//一共教了多少课程的数目
      tableData: [{
          cno: "1-1",
          cname: "数据结构",
          nature: "必修课程",
          ca_name: "张三",
          tperiod: 36,
          credit: 4,
        },
        {
          cno: "1-2",
          cname: "计算机网络",
          nature: "必修课程",
          ca_name: "张三",
          tperiod: 54,
          credit: 3.5,
        },
        {
          cno: "1-3",
          cname: "篮球",
          nature: "选修课程",
          ca_name: "张三",
          tperiod: 72,
          credit: 2,
        },
        {

          cno: "1-4",
          cname: "网页设计",
          nature: "必修课程",
          ca_name: "张三",
          tperiod: 144,
          credit: 1,
        },
      ],
    };
  },
  'post|/caCourseDetail': option => {
    return {
      tableData: [{
        cname: "数据结构",//课程名
        course_detail_name: "1234567890",//课程教学大纲
        index_detail_id: "1",//指标点id
        index_detail_content: "qwerrtyrtyr",//指标点的内容
      }],
    };
  },
  'post|/caCourseClass': option => {
    return {
      tableData: [{

          classno: "2017-1",//班级号
          roll_state: '登记完成',
        },
        {
          classno: "2017-2",
          roll_state: '审核完成'

        },
        {
          classno: "2017-3",
          roll_state: '登记缺失'
        },
        {
          classno: "2017-4",
          roll_state: '登记缺失'
        }
      ]
    }
  },

  'post|/caCourseState' :option => {
    return {
      message:"success" //修改成功就是success否则返回fail
    }
  },

  'post|/caCourseReview' :option =>{
    return {
      avg: 86,//这个班这门课这个指标点的平均分
      min: 60,//这个班这门课这个指标点的最低分
      max: 96,//这个班这门课这个指标点的最高分
      ydata:[100,66,44,33,22,11,10,9,8,7,6,5,4,3,2,1]//返回这个指标点所有人成绩从高到低排列
    }

  },
  'post|/caInform' :option =>{
    return {
      message:"success"//通知失败返回fail
    }

  },
  'post|/caCourseIndexDetail' :option =>{
    return {
     tableData:[{
       index_detail_id:'1-1'//指标点id
     },
     {
       index_detail_id:'1-2'
     }]
    }

  },

}
