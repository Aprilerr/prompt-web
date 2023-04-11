import request from '@/utils/request'
import url_env from './config'

export function getList(params) {
  return request({
    url: process.env.VUE_APP_BACKEND_PORT + '/table/list',
    method: 'get',
    params
  })
}
