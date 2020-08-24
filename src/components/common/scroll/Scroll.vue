//滚动
<template>
    <div class="wrapper" ref="wrapper">
        <div class="conter">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:'Scroll',
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            scroll:null
        }
    },

    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        })

        this.scroll.on('scroll',(position) => {
            this.$emit('scroll',position)
        })
        //上拉加载更多
        if(this.pullUpLoad) {
            this.scroll.on('pullingUp',() => {
                this.$emit('pullingUp')
            })
        }
    },
    methods:{
        //上拉加载更多
        finishPullUp() {
            this.scroll.finishPullUp()
        },
        //刷新
        refresh() {
            //console.log(111)
            this.scroll.refresh()
        },
        getScrollY() {
            return this.scroll ? this.scroll.y : 0
        }
    }
}
</script>