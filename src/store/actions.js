export default {
     //注意：在actions是context(上下文)
     addCart(context,payload) {
        //（1）普通方法
              // //payload新添加的商品
              // let oldProduct = null;
              // for(let item of context.state.cartList) {
              //   if(item.iid === payload.iid) {
              //     oldProduct = item
              //   }
              // }
              // //2.判断oldProduct
              // if(oldProduct) {
              //   oldProduct.count += 1
              // }else {
              //   payload.count = 1
              //   context.state.cartList.push(payload)
              // }
        //（2）indexOf()方法
              // let index = context.state.cartList.indexOf(payload)
              // if(index === -1) {
              //   let oldProduct = context.state.cartList[index]
              //   oldProduct.count += 1
              // }else{
              //   payload.count = 1
              //   context.state.cartList.push(payload)
              // }
        //（3）find()方法
             return new Promise((resolve,reject) => {
              let oldProduct = context.state.cartList.find(item => item.iid === payload.iid) 
              if(oldProduct) {
                //oldProduct.count += 1
                context.commit('addCounter',oldProduct)
                resolve('当前的商品数量+1')
              }else {
                payload.count = 1
                //context.state.cartList.push(payload)
                context.commit('addToCart',payload)
                resolve('添加了新的商品')
              }
                reject('err')
             })
         }
}