import request from '../utils/request.js'
// Vue.prototype.$request = request

export default {
  login(id, pwd) {
    let param = new URLSearchParams()
    param.append("id", id)
    param.append("pwd", pwd)
    return request({
        //url: 'http://148.70.15.23:8000/login/',
        url:'/login',
        method: 'post',
        params: {
          'id': id,
          'pwd':pwd
        }

    })
}
}
