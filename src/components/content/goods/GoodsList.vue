<template>
    <div class="goods">
        <GoodsListItem v-for="(item,index) in goods" :key="index" :goodsItem="item"></GoodsListItem>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
    name:'GoodsList',
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
.goods{
    display: flex;
    /* flex布局包裹内容 */
    flex-wrap: wrap;
    /* 均等分 */
    justify-content: space-around;
    
}
</style>