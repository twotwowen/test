export default {
    //   addCart(state, payload) {
    //     //payload新添加的商品
    //     let oldProduct = null;
    //     for (let item of state.cartList) {
    //         if (item.iid === payload.iid) {
    //             oldProduct = item
    //         }
    //     }

    //     //查找之前的数组是否有该商品 用find函数也可以
    //     //let olaProduct = state.cartList.find(item => item.iid === payload.iid)

    //     if (oldProduct == null) {
    //         payload.count = 1
    //         state.cartList.push(payload)
    //     } else {
    //         oldProduct.count += 1
    //     }

    // }

    addCounter(state, payload) {
        payload.count++
    },
    addToCart(state, payload) {
        payload.checked = true
        state.cartList.push(payload)
    }
}