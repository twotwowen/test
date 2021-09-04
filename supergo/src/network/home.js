import { request } from "./request";

export function getHomeMultidata() {
    return request({
        //注意：url不能大写！！！已踩坑
        url: '/home/multidata'

    })
}

export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}