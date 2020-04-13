import axios from 'axios';
const Domain = "http://148.70.15.23:8000";  // 定义根域名
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // 设置post提交数据的格式

// 封装 post 请求
export function post(action, params){
  return new Promise((resolve, reject) => {
    // url 判断是测试环境 就要拿 测试环境的域名， 正式环境的就要用 正式域名
    let url = Domain + action;
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  });
}

 // 封装 get 请求

export function get(action, params){
  return new Promise((resolve, reject) => {
    axios.get(Domain + action, params)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  });
}

export default {
  postData(action, params){
    return post(action, params)
  },
  getData(action, params){
    return get(action, params)
  }
}