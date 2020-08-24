<template>
    <div>
        <Swiper>
            <SwiperItem v-for="(item,index) in toImages" :key="index" class="swiper">
                <img :src="item" alt="">
            </SwiperItem>
        </Swiper>
    </div>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper'
import SwiperItem from '@/components/common/swiper/SwiperItem'

export default {
    nmae:'DtailSwiper',
    components:{
        Swiper,
        SwiperItem
    },
    props: {
        toImages:{
            type:Array,
            default () {
                return []

            }
        }
    }
}
</script>

<style scoped>
.swiper{
    /* widows: 100vh; */
    height: 300px;
}
.swiper img{
    height: 120%;
}
</style>