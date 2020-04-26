export default {
	'post|/spIndex': option =>{
		return {
      tableData:[{
        index_id : "1",
        index_name: "好好学习1",
        index_content:"好好学习，天天向上!"
      }]

		};
	},
  'post|/spSubmitIndex': option =>{
  	return {
      message:"success" //失败返回fail
  	};
  },
  'post|/spRemove': option => {
    return {
      message:"success" //失败返回fail
    }
  },
  'post|/spDetail' : option =>{
    return {
      tableData:[{
        index_detail_id: '1-1',//指标点id
        index_detail_content:'121321'//指标点内容
      },
      {
        index_detail_id: '1-1',
        index_detail_content:'121321'
      }]

    }
  },
  'post|/spContentDetail' : option=>{
    return {
      message: "success"
    }
  },
  'post|/IndexDetailRemove':option =>{
    return {
      message: "success"
    }
  },

  'post|/spCourse':option =>{
    return {
      tableData:[{
        cno:'1123',
        cname:'数据结构',
        weight:0.1
      },
      {
        cno:'12123',
        cname:'数据结构',
        weight:0.2
      }]
  }
  },
  'post|/spAllIndexDetail': option =>{
    return {
      tableData:[{
        index_detail_id:'1-1'
      },
      {
        index_detail_id:'1-2'
      }]
    }
  },

  'post|/RemoveCourse': option =>{
    return {
      message: "success"
    }
  },

  'post|/spShowCourse': option =>{
    return {
      tableData:[{
        cno:'12345',
        cname:'计算机网络',
      },
      {
        cno:"123df",
        cname:"网络设计"
      }]
    }
  },
  'post|/spAddCourse': option =>{
    return {
      message:"success"
    }
  },
  'post|/spGetAllCourseScore':option =>{
    return {
      tableData:[{
        cno:"1",
        cname:"计算机网络",
        score:0.9,
      },
      {
        cno:"2",
        cname:"数据结构",
        score:0.99,
      }]
    }
  },

  'post|/spGetAllClassScore':option => {
    return {
      xdata:['2017-1','2017-2','2017-3','2017-4'],//存储年级和班级，格式为年级-班级
      ydata:['99', '80', '70','99'],//对应班级的分数
      //例如存储班级2017-1对应的成绩就是99,2017-2对应成绩是80
      //2017-1的意思说的是2017级1班
    }


  },
  'post|/spTotalAvg':option =>{
    return {
      avg:90//整个年级平均分
    }
  }

}
