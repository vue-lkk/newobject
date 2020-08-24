<template>
    <div class="goods-list-item">
        <img v-lazy="showImage" alt="" @load="goodsImgLoad" @click="goodsClick">
        <div class="goods-info">
            <p>{{goodsItem.title}}</p>
            <span class="price">￥{{goodsItem.price}}</span>
            <span class="collect">收藏:{{goodsItem.cfav}}</span>

        </div>
    </div>
</template>

<script>
export default {
    name:'GoodsListItem',
    props:{
        goodsItem:{
            type:Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        showImage() {
            return this.goodsItem.image || this.goodsItem.show.img
        }
    },
    methods:{
        goodsImgLoad() {
            if(this.$route.path.indexOf('/home')) {
                this.$bus.$emit('goodsImgLoad')
            }else if(this.$route.path.indexOf('/detail')) {
                this.$bus.$emit('detailImgLoad')
            }
            
        },
        goodsClick() {
            this.$router.push('/detail/' + this.goodsItem.iid)
        }
    }
}
</script>

<style scoped>
.goods-list-item {
    width: 46%;
}
img{
    width: 100%;
    border-radius: 5px;
}
.goods-info{
    text-align: center;
    margin: 10px;
}
p{
    overflow: hidden;
    /* 溢出打点 */
    text-overflow:ellipsis;
    /* 一行显示 */
    white-space: nowrap;
    font-size: 16px;
}
.price,.collect {
    font-size: 14px;
    padding: 5px;

}
.price{
    color:red;
}
</style>