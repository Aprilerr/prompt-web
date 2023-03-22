import request from '@/utils/request'
import url_env from './config'

export function login(data) {
  return request({
    url: url_env + '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: url_env + '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: url_env + '/user/logout',
    method: 'get'
  })
}
