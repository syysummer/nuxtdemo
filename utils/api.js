import request from './http';
// 请求分类接口
const baseUrl = 'https://api.sunofbeach.net/shop';
export default {
    getCategories(){
      var url =  baseUrl + '/discovery/categories';
      return request.requestGet(url);
    }
}