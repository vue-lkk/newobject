export default {
       //在mutations是state(数据)
//     addCart(state,payload) {
// //（1）普通方法
//       // //payload新添加的商品
//       // let oldProduct = null;
//       // for(let item of state.cartList) {
//       //   if(item.iid === payload.iid) {
//       //     oldProduct = item
//       //   }
//       // }
//       // //2.判断oldProduct
//       // if(oldProduct) {
//       //   oldProduct.count += 1
//       // }else {
//       //   payload.count = 1
//       //   state.cartList.push(payload)
//       // }
// //（2）indexOf()方法
//       // let index = state.cartList.indexOf(payload)
//       // if(index === -1) {
//       //   let oldProduct = state.cartList[index]
//       //   oldProduct.count += 1
//       // }else{
//       //   payload.count = 1
//       //   state.cartList.push(payload)
//       // }
// //（3）find()方法
//       let oldProduct = state.cartList.find(item => item.iid === payload.iid) 
//       if(oldProduct) {
//         oldProduct.count += 1
//       }else {
//         payload.count = 1
//         state.cartList.push(payload)
//       }
//     }

     //mutations唯一的目的就是修改state中的状态
    //mutations中的每一个方法尽可能完成的事件比较单一一点
    addCounter(state,payload){
        payload.count++
    },
    addToCart(state,payload) {
        //添加选中属性
        payload.checked = true
        state.cartList.push(payload)
    }
}