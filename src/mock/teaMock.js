export default {
  'post|/teacher': option => {
    return {
      tname: '肖夢杰',//教师姓名
    };
  },
  'post|/teaCourseInfo': option => {
    return {
      total: 4,//一共教了多少课程的数目
      tableData: [{
          cno: "10",
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
  'post|/teaCourseDetail': option => {
    return {
      tableData: [{
        cname: "数据结构",//课程名
        course_detail_name: "1234567890",//课程教学大纲
        index_detail_id: "1",//指标点id
        index_detail_content: "qwerrtyrtyr",//指标点的内容
      }],
    };
  },
  'post|/teaCourseStu': option => {
    return {
      tableData: [{
        /*这里roll_state指的是课程的登记状态，
        * 如果这门课的成绩登记完成了（数据库中有课程达成度值）
        * 但是这门课的审核状态为没有审核
        * 那么返回一个**登记完成**
        * 如果审核也通过了，那么返回一个**审核完成**
        * 如果数据库中没有课程达成的值，那么返回登记缺失
        */
          sno: "2017119075",
          sname: '赵鹏程',
          roll_state: '登记完成',
        },
        {
          sno: "2017119074",
          sname: '赵小程',
          roll_state: '登记完成'

        },
        {
          sno: "2017119073",
          sname: '赵大程',
          roll_state: '登记缺失'
        },
        {
          sno: "2017119079",
          sname: '赵晓程',
          roll_state: '登记缺失'
        }
      ]
    }
  },
  'post|/teaCourseIndexDetailScore': option => {
    return {
      message:"success",//成功就返回success,失败fail
    }

  },
  'post|/teaIndexDetailState': option => {
    return {
      options: [{
          value: '指标点1编号',
          label: '指标点1的内容',
          state: '未登记',
        },
        {
          value: '指标点2编号',
          label: '指标点2的内容',
          state: '已登记',
        }
      ], //存储指标点的序号
    }
  },
  'post|/teaIndexDetailScore' : option => {
    return {
      indexDetailData: [{
        index_detail_id:"1-1",//指标点编号
        score:"3"//指标点的具体值
      },
      {
        index_detail_id:"1-2",
        score: "4"
      },
      {
        index_detail_id:"1-3",
        score:"5"
      }]
    }
  },

  'post|/teaInform': option => {
    return {
      textarea:"这里返回给这个教师的消息"
    }
  }
}
