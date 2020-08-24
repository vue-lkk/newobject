<template>
    <div>
        <NavBar>
            <div slot="left" @click="backHome" class="left">
                <img src="@/assets/img/返回.png" alt="">
            </div>
            <div slot="center" class="title">
                <div v-for="(item,index) in title" 
                :key="index"
                :class="{active:index === currentIndex}"
                @click="isactive(index)"
                class="title-item">{{item}}</div>
            </div>
        </NavBar>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
    name:'DetailNavBar',
    components:{
        NavBar
    },
    data() {
        return {
            title:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        isactive(index) {
            this.currentIndex = index
            this.$emit('titleClick',index)
        },
        backHome () {
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.title{
    display: flex;
}
.title-item{
    flex: 1;
}
.active{
    color: var(--color-text);
}
.left img{
    margin-top: 10px;
    width: 20px;
}
</style>