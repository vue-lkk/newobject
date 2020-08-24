<template>
    <div class="cart">
      <NavBar class="nav-bar">
        <!-- <span slot="center">购物车({{cartLength}})</span> -->
        <span slot="center">购物车({{length}})</span>
      </NavBar>
      <Scroll class="content" ref="scroll">
          <CartList></CartList>
      </Scroll>
      <CartBottonBar class="bar"></CartBottonBar>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import Scroll from '@/components/common/scroll/Scroll'
import CartBottonBar from '@/views/cart/childComps/CartBottonBar'



import {mapGetters} from 'vuex'

export default {
    name:'Cart',
    components: {
      NavBar,
      CartList,
      CartBottonBar,
      Scroll
    },
    computed: {
//得到商品数量(抽取到getters)
    //   cartLength() {
    //     return this.$store.state.cartList.length
    //   }
//两种语法
    // ...mapGetters(['cartLength'])
    //如果想取另外一个名字
    ...mapGetters({
      length:'cartLength'
      
    })
    },
    activated() {
      this.$refs.scroll.refresh() 
    }
}

</script>

<style scoped>
.cart{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.nav-bar{
  color: white;
  font-weight:bold;
  background-color: var(--color-text);
}
.content {
  overflow: hidden;
  height: calc(100vh - 133px);
  position: relative;
}
.bar{
  display: flex;
  
  
}
</style>