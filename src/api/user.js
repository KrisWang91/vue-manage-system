import { request } from '../utils/request'

// 登录接口
export const login = data => {
  return request({
    url: 'login',
    method: 'POST',
    data
  })
}

// 获取左侧菜单接口
export const getMenus = data => {
  return request({
    url: 'menus',
    method: 'GET',
    data
  })
}

// 获取用户列表
export const getUsers = data => {
  return request({
    url: 'users',
    method: 'GET',
    params: {
      query: data.query,
      pagenum: data.pagenum,
      pagesize: data.pagesize
    }
  })
}
