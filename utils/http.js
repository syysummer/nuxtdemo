import axios from 'axios';
axios.defaults.withCredentialsith = true;
axios.defaults.timeout = 30000;
export default{
    requestGet(url, params ={}){
        return new Promise((resolve,reject)=>{
            axios.get(url, params).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    requestPost(url, params ={}){
        return new Promise((resolve,reject)=>{
            axios.post(url, params).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    requestDelete(url, params ={}){
        return new Promise((resolve,reject)=>{
            axios.delete(url, params).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    requestPut(url, params ={}){
        return new Promise((resolve,reject)=>{
            axios.put(url, params).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        })
    }
}