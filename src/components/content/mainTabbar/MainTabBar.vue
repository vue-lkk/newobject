<template>
    <div>
    <TabBar>
        <TabBarItem path="/home" activeColor='orange'>
        <img slot="item-icon" src="@/assets/img/主页1.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/主页.png" alt="">
        <div slot="item-text">首页</div>
      </TabBarItem>

      <TabBarItem path="/category" activeColor='orange'>
        <img slot="item-icon" src="@/assets/img/分类1.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/分类.png" alt="">
        <div slot="item-text">分类</div>
      </TabBarItem>

      <TabBarItem path="/cart" activeColor='orange'>
        <img slot="item-icon" src="@/assets/img/购物车1.png" alt="">
         <img slot="item-icon-active" src="@/assets/img/购物车.png" alt="">
         <div slot="item-text">购物车</div>
      </TabBarItem>

      <TabBarItem path="/profile" activeColor='orange'>
        <img slot="item-icon" src="@/assets/img/我的1.png" alt="">
         <img slot="item-icon-active" src="@/assets/img/我的.png" alt="">
         <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
    </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
    name:"MainTabBar",
    components:{
        TabBar,
        TabBarItem
    },
    data() {
        return{
            messagge:'123'
        }
    }
}
</script>

<style scoped>

</style>