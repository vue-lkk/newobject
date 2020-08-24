<template>
     <!-- 判断一个对象是否为空Object.keys(goods).length !== 0 -->
    <div v-if="Object.keys(goods).length !== 0" class="base-info">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="n-price">{{goods.lowNowPrice}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
            <span >{{goods.columns[0]}}</span>
            <span >{{goods.columns[1]}}</span>
            <span >{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info-service">
            <!-- 因为从1开始所以要减一 -->
            <span class="info-service-item" v-for="index in goods.services.length-1" 
            :key="index">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailBaseInfo',
    props:{
        goods:{
            type:Object,
            default() {
                return{}
            }
        }
    }
}
</script>

<style>
.info-title{
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;

}
.info-price{
    padding: 0 10px;
}
.info-price .n-price {
    font-size: 30px;
    color:var(--color-text);
    margin-right: 5px;

}
.info-price .o-price{
    font-size: 14px;
    margin-right: 5px;
}
.discount{
    position: relative;
    font-size: 18px;
     top: -10px;
     font-weight: bold;
}
.info-other{
    margin: 20px 0px;
    display: flex;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.info-other span{
    flex: 1;   
}
.info-service{
    height: 50px;
    line-height: 50px;
    text-align:center;
    border-bottom: 8px solid rgba(0, 0, 0, 0.1);
}
.info-service-item{
   
     padding: 5px 8px;
     margin: auto;
}
.info-service img {
    width: 20px;
}
.info-service span{
    position: relative;
    font-weight: bold;
    top: -4px;
}
</style>