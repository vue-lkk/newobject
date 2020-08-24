<template>
    <div>
        <Swiper>
            <SwiperItem v-for="(item,index) in banners" :key="index" >
                <a :href="item.link">
                    <img :src="item.image" alt="" @load="imageLoad">
                </a>
            </SwiperItem>
        </Swiper>
    </div>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper'
import SwiperItem from '@/components/common/swiper/SwiperItem'

export default {
    name:'HomeSwiper',
    props:{
        banners:{
            type:Array,
            default() {
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem

    },
    methods:{
        imageLoad() {
            this.$emit('swiperImageLoad')
        }
    }
}
</script>