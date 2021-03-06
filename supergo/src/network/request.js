import axios from 'axios'

export function request(config) {
    //创建axios的实例
    const instance = axios.create({
        //baseURL: 'http://123.207.32.32:8000',
        //baseURL: '',
      //接口已过期
        timeout: 10000
    })

    //axios的拦截器
    //请求拦截
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        //console.log(err);
    })

    //响应拦截
    instance.interceptors.response.use(res => {
            return res.data
        }, err => {
            //console.log(err);
        })
        //发送真正的网络请求
    return instance(config)
}
