<template>
    <div class="shop-info">
        <div class="shop-top">
            <img :src="shop.logo" alt="">
            <span class="title">{{shop.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailShopInfo",
    props: {
        shop:{
            type:Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style>
 .shop-top img{
     width: 100px;
     border-radius: 50%;
 }
</style>