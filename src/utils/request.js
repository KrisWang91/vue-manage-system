// 导入axios
import axios from 'axios'

// 配置请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

export function request (options) {
  return new Promise((resolve, reject) => {
    axios(options)
      .then(res => {
        console.log(res)
        return resolve(res.data)
      })
  })
}
