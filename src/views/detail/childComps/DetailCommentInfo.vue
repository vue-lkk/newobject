<template>
    <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
        <div class="info-header">
            <div class="header-title">用户评价</div>
            <div class="header-more">
                更多
                <i class="arrow-right"></i>
            </div>
        </div>
    <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
        <p>{{commentInfo.content}}</p>
        <div class="info-other">
            <span class="date">{{commentInfo.created | showDate}}</span>
            <span>{{commentInfo.style}}</span>
        </div>
        <div class="info-img" v-for="(item,index) in commentInfo.images" :key="index">
            <img :src="item " alt="">
        </div>
    </div>
    </div>
</template>

<script>
import {formatDate} from '@/common/utils'

export default {
    name:'DetailCommentInfo',
    props:{
        commentInfo:{
            type:Object,
            default() {
                return {}
            }
        }
    },
    filters:{
        showDate(value) {
            //1.将时间戳转成Date对象
            const date = new Date(value * 1000)

            //将date进行格式化
            return formatDate(date,'yyyy/MM/dd  hh:mm:ss')
        }
    }
}
</script>

<style scoped>
.info-img img{
    width: 100px;
    height: 100px;
    float: left;
    margin: 5px;
}
</style>