import request from '@/utils/request'
import url_env from './config'

export function getList(params) {
  return request({
    url: url_env + '/table/list',
    method: 'get',
    params
  })
}
