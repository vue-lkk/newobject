<template>
    <div class="bottom-bar">

        <div class="bar-item bar-left">
            <div>
                <i class="icon service"></i>
                <span class="text">客服</span>
            </div>
            <div>
                <i class="icon shop"></i>
                <span class="text">店铺</span>
            </div>
            <div>
                <i class="icon sselect"></i>
                <span class="text">收藏</span>
            </div>
        </div>

        <div class="bar-item bar-right">
            <div class="cart" @click="addToCart">加入购物车</div>
            <div class="buy">购买</div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'DetailBottomBar',
    methods: {
        addToCart() {
            this.$emit('addToCart')
        }
    }

}
</script>

<style scoped>
  .bottom-bar {
      height: 49px;
      background:#fff;
      position:fixed;
      left: 0;
      right: 0;
      bottom: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.3);
      z-index: 9;
     
  }
  .bar-item {
      display: flex;
      flex: 1;
     
     
  }
  .bar-left {
      float: left;
      
  }
  .bar-left .icon{
      width: 60px;
      height: 49px;
      line-height: 49px;
      margin-left: 30px;
      text-align: center;
      
  }
  .bar-right {
      width: 180px;
      height: 49px;
      line-height: 49px;
      float: right;
      font-size:16px ;
      font-weight: bold;
      text-align: center;
      
     
  }
  .bar-right .cart {
      width: 90px;
      height: 49px;
      background: yellow;
  }
  .bar-right .buy {
       width: 90px;
      height: 49px;
      background: rgb(247, 89, 168);
      color: white;
  }
</style>