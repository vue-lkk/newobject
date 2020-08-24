<template>
    <div id="Home">
        <!-- 上部 -->
        <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
        <TabControl :tabitems =" ['流行','新款' ,'精选']"
             class="tab-control"
             @tabClick="tabClick"
             ref="tabControl1"
             :class="{fixed:isTabFiexd}"
             v-show="isTabFiexd"></TabControl>
        <!-- 滚动内容 -->
        <Scroll  class="content"
        ref="scroll" 
        :probeType='3' 
        :pullUpLoad='true'
        @scroll='scroll'
        @pullingUp='pullingUp'>
        <!-- 轮播图 -->
            <HomeSwiper :banners='banners' @swiperImageLoad="swiperImageLoad"></HomeSwiper>
            <recommendView :recommend='recommend'></recommendView>
            <FeatureView></FeatureView>

            <TabControl :tabitems =" ['流行','新款' ,'精选']"
             class="tab-control"
             @tabClick="tabClick"
             ref="tabControl2"
             ></TabControl>
            <GoodsList :goods = 'goods[currentType].list'></GoodsList>

        </Scroll>
         <BackTop @click.native="backClick"  v-show="isShow"></BackTop>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import Scroll from '@/components/common/scroll/Scroll'
import HomeSwiper from '@/views/home/childComps/HomeSwiper'
import recommendView from '@/views/home/childComps/recommendView'
import FeatureView from '@/views/home/childComps/FeatureView'


import BackTop from '@/components/content/backTop/BackTop'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'

import {getHomeMultidata,getHomedata} from '@/network/home';
import {debounce} from '@/common/utils'

export default {
    name:'Home',
    components:{
        NavBar,
        Scroll,
        BackTop,
        HomeSwiper,
        recommendView,
        FeatureView,
        TabControl,
        GoodsList
    },
    data() {
        return {
            isShow:false,
            banners:[],
            recommend:[],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]}
            },
            currentType:'pop',
            tabOffsetTop:0,
            isTabFiexd:false,
            saveY:0,
            
        }
    },
    created() {
        this.getHomeMultidata()

        this.getHomedata("pop")
        this.getHomedata("new")
        this.getHomedata("sell")
    },
    mounted() {
        //没有抽取的代码
        // const refresh = this.debounce(this.$refs.scroll.refresh,50)
    
        const refresh = debounce(this.$refs.scroll.refresh,500)
        //监听图片加载完成
        this.$bus.$on("goodsImgLoad",() => {
            //图片加载完成后重新更新scrollerheight可滚动高度
            refresh()
        })
        
    },
    destroyed() {
        console.log(1111111111111)
    },
    activated() {
        //注意：这里刷新一定要放到前面
        this.$refs.scroll.refresh()
        this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
        // this.$refs.scroll.refresh() 不能放在后面
    },
    deactivated() {
        this.saveY = this.$refs.scroll.getScrollY()
        console.log(this.saveY)
    }, 
    methods:{
        //没有抽取的代码
        //防抖(传入一个需要执行的函数,等待时间)
        //  debounce(func,delay) {
        //      let timer = null
        //      return function (...args) {
        //          if (timer) clearTimeout(timer)
        //          timer = setTimeout(() => {
        //              func.apply(this,args)
        //          }, delay)
        //      }
        //  } ,
        swiperImageLoad() {
            //获取到['流行','新款' ,'精选']组件到顶部的距离（offsetTop）
            //注意：前提下要监听图片是否加载完成，不然获取到的距离不正确
            //console.log(this.$refs.tabControl.$el.offsetTop)
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        },
        scroll(position) {
            //console.log(position.y)1.判断 返回顶部是否显示
            this.isShow = -position.y > 300
            //2.是否吸顶
            this.isTabFiexd = -position.y > this.tabOffsetTop
        },
        backClick() {
            this.$refs.scroll.scroll.scrollTo(0,0,500)
        },
        //数据请求(轮播图和推荐数据)
        getHomeMultidata() { 
            getHomeMultidata().then(res => {
                //console.log(res)
                this.banners = res.data.banner.list;
                this.recommend = res.data.recommend.list;
            })
        },
        //数据请求(流行/新款/精选数据)
        getHomedata(type) {
            //页数
            const page = this.goods[type].page + 1
            getHomedata(type,page).then(res => {
                console.log(res)
                //将数据push()进对应的数组中
                this.goods[type].list.push(...res.data.list)
                //页码数加1
                this.goods[type].page += 1
                //刷新加载更多数据
                this.$refs.scroll.finishPullUp()

            })
        },
        //点击对应的(流行/新款/精选)更改key值 =>方法1
        tabClick(index){
        //     switch(index) {
        //         case 0:
        //             this.currentType = 'pop'
        //             break
        //         case 1:
        //             this.currentType ='new' 
        //             break
        //         case 2:
        //             this.currentType = 'sell'
        //             break
        //     }

        //点击对应的(流行/新款/精选)更改key值 =>方法2
                this.currentType = Object.keys(this.goods)[index]
                //console.log(this.currentType);
                this.$refs.tabControl1.currentIndex = index
                this.$refs.tabControl2.currentIndex = index
         },
         //上拉刷新
         pullingUp() {
             this.getHomedata(this.currentType)
         },
                
    }
}
</script>

<style scoped>
.home-nav{
    background-color: var(--color-text);
    color: white;

    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
}
.content{
    position: relative;
    height: calc(100vh - 93px);
    overflow: hidden;
    top: 44px;
    left: 0px;
    right: 0px;
}

/* 吸顶效果：如果使用了better-scroll这个方法不可用 */
/* .tab-control {
    position: sticky;
    top: 44px;
} */
.fixed{
    position: fixed;
    left: 0;
    right: 0;
    top: 43px;
    z-index: 9;
}
</style>