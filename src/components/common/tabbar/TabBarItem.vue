<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
            path:String,
            activeColor:{
                type:String,
                default:'blue'
            }
    },
    methods:{
        itemClick() {
            this.$router.push(this.path)

            },
    },
    computed:{
        isActive() {
          return  this.$route.path.indexOf(this.path) !== -1
        },
         activeStyle() {
            return this.isActive ? {color:this.activeColor} : {}
        }

    }
   
}
</script>

<style scoped>
 .tab-bar-item {
    /* 均等分布 */
    flex:1;
    text-align: center; 
    height: 49px;
    font-size: 14px;
    font-weight: bold;
    }
    .tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 3px;
        /* 去掉图片下面默认的3px */
        vertical-align: middle;
        margin-bottom: 2px;
    }
</style>