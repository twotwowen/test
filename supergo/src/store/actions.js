export default {
    addCart(context, payload) {
        //利用promise回调
        return new Promise((resolve, reject) => {
            //查找之前的数组是否有该商品 用find函数也可以
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

            //判断oldProduct
            if (oldProduct) {
                //oldProduct.count += 1
                context.commit('addCounter', oldProduct)
                resolve('商品的数量+1')
            } else {
                payload.count = 1
                    //state.cartList.push(payload)
                context.commit('addToCart', payload)
                resolve('成功加入购物车')
            }
        })

    }
}