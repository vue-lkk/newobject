//推荐组件
<template>
    <div class="recommend-view">
        <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'recommendView',
    props:{
        recommend: {
            typr:Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped>
.recommend-view{
    display: flex;
    text-align: center;
    width: 100%;
    margin-top: 10px;
    font-size: 12px;
    padding: 0 0 30px 0;
    border-bottom: 10px solid rgba(0,0,0,.1);
}
.recommend-item{
    flex: 1;
}
.recommend-item img{
    width:70px;
    height:70px;
    margin-bottom: 8px;
}
</style>