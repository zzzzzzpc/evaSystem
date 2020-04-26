export default {
  'post|/tutorWarning': option => {
    return {
      tableData:[{
        sname:"李四",//有预警学生的姓名
        sno:"12345",//有预警学生的学号
        grade_id:"2017-3",//有预警学生的班级
      }]
    };
  },
  'post|/tutorWarnCourse': option => {
    return {
      tableData:[{
        cname:"数据结构",
        cno:"1-1",
      },
      {
        cname:"计算机组成原理",
        cno:"1-2",
      }]
    };
  },
}
