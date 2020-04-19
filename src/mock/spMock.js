export default {
	'post|/spIndex': option =>{
		return {
      tableData:[{
        index_id : "1",
        index_name: "好好学习",
        index_content:"好好学习，天天向上！"
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
  'post|/spIndexDetail' : option => {
    return {
      tableData:[{
        index_detail_id:'1-1',//指标点id
        index_detail_content:'',//指标点内容
      },
      {
        index_detail_id:'1-2',//指标点id
        index_detail_content:'',//指标点内容
      }
      ]
    }
  }
}
