// 导入axios
import axios from 'axios'
import { getSession } from '@/utils/auth.js'

// 配置请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

axios.interceptors.request.use(config => {
  const session = getSession()
  config.headers.Authorization = session
  return config
})

export function request (options) {
  return new Promise((resolve, reject) => {
    axios(options)
      .then(res => {
        console.log(res)
        return resolve(res.data)
      })
  })
}
