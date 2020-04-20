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
        index_detail_id: '1-1',
        index_detail_content:'121321'
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
      },
      {
        cno:'12123',
        cname:'数据结构',
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
  }

}
