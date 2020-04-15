let loginResult = [{
  role: 1
}]

export default {
  'post|/teacher': option => {
    return {
      status: 200,
      tname: '肖夢杰',
      tno: '1234567890'
    };
  },
  'post|/teaCourseInfo': option => {
    return {
      total: 4,
      status: 200,
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
  'post|/teaCourseDetail': option => {
    return {
      status: 200,
      tableData: [{
          cname: "数据结构",
          course_detail_name: "1234567890",
          index_detail_id: "1",
          index_detail_content: "qwerrtyrtyr",
        }],
    };
  },
  'post|/teaCourseStu':option =>{
    return {
      status : 200,
      tableData:[{
        sno: "2017119075",
        sname:'赵鹏程',
        roll_state:'登记完成'
      },
      {
        sno: "2017119074",
        sname:'赵小程',
        roll_state:'登记缺失'

      },
      {
        sno: "2017119073",
        sname:'赵大程',
        roll_state:'登记缺失'
      },
      {
        sno: "2017119079",
        sname:'赵晓程',
        roll_state:'登记缺失'
      }
      ]
    }
  }
}
