import request from '@/utils/request'

export function login(data) {
  return request({
    url: process.env.VUE_APP_BASE_API + process.env.VUE_APP_BACKEND_PORT + '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: process.env.VUE_APP_BASE_API + process.env.VUE_APP_BACKEND_PORT + '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: process.env.VUE_APP_BASE_API + process.env.VUE_APP_BACKEND_PORT + '/user/logout',
    method: 'get'
  })
}
