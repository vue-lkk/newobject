<template>
    <div id="detail">
        <DetailNavBar class="nav-bar" @titleClick='titleClick' ref="navbar"></DetailNavBar>
        <Scroll class="content" ref="scroll"
        :probeType="3"
        @scroll='contentScroll'> 
            <DetailSwiper :toImages= "toImages"></DetailSwiper>
            <DetailBaseInfo :goods="Goods"></DetailBaseInfo>
            <DetailShopInfo :shop='Shop'></DetailShopInfo>
            <DetailGoodsInfo :detailInfo='detailInfo' @imageLoad="imageLoad"></DetailGoodsInfo>
            <DetailParamsInfo ref="params" :paramInfo='paramInfo'></DetailParamsInfo>
            <DetailCommentInfo ref="comment" :commentInfo='commentInfo'></DetailCommentInfo>
            <GoodsList ref="recommend" :goods='recommends'></GoodsList>
        </Scroll>
        <BackTop @click.native="backClick" v-show="isShow"></BackTop>
        <DetailBottomBar @addToCart="addToCart"></DetailBottomBar>
    </div>
</template>

<script>
import DetailNavBar from '@/views/detail/childComps/DetailNavBar'
import DetailSwiper from '@/views/detail/childComps/DetailSwiper'
import DetailBaseInfo from '@/views/detail/childComps/DetailBaseInfo'
import DetailShopInfo from '@/views/detail/childComps/DetailShopInfo'
import DetailGoodsInfo from '@/views/detail/childComps/DetailGoodsInfo'
import DetailParamsInfo from '@/views/detail/childComps/DetailParamInfo'
import DetailCommentInfo from '@/views/detail/childComps/DetailCommentInfo'
import DetailBottomBar from '@/views/detail/childComps/DetailBottomBar'


import Scroll from '@/components/common/scroll/Scroll'

import GoodsList from '@/components/content/goods/GoodsList'
import {Detail,Goods,Shop,GoodsParam,getRecommend} from '@/network/detail'

import {backTopMixin} from '@/common/mixin'

import {mapActions} from 'vuex'

export default {
    name:'Detail',
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamsInfo,
        DetailCommentInfo,
        GoodsList, 
        DetailBottomBar,         
        Scroll
        
    },
    mixins: [backTopMixin],
    data() {
        return {
            iid:null,
            toImages:[],
            Goods:{},
            Shop:{},
            detailInfo:{},
            paramInfo: {},
            commentInfo:{},
            recommends:[],
            themeTopYs:[],
            currentIndex:0

        }
    },
    created() {
        this.iid = this.$route.params.iid
        console.log(this.iid)

        Detail(this.iid).then(res => {
            //获取顶部图片轮播图数据
            console.log(res)
            this.toImages = res.result.itemInfo.topImages

            //获取商品信息
            this.Goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
            //取出店铺的信息
            this.Shop = new Shop(res.result.shopInfo)
            //取出详情的信息
            this.detailInfo = res.result.detailInfo
            //取出参数的信息
           this.paramInfo = new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
            //取出评论的消息
            if(res.result.rate.cRate !== 0){
                this.commentInfo = res.result.rate.list[0]
            }

            //请求推荐数据
            getRecommend().then(res => {
                this.recommends = res.data.list
            })
        })
    },
    methods: {
        ...mapActions(['addCart']),
        imageLoad() {
            //详情页图片刷新
            this.$refs.scroll.refresh()
            //图片刷新之后再获取组件的准确of+fsetTop
            this.themeTopYs = []
            this.themeTopYs.push(0);
            this.themeTopYs.push(this.$refs.params.$el.offsetTop)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
            //加入一个最大值
            this.themeTopYs.push(Number.MAX_VALUE)
            console.log(this.themeTopYs)
        },
        //点击滚动到对应的内容
        titleClick(index) {
            this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index] + 46,100)
        },
        //鼠标滚动到哪里高亮
        contentScroll(position) {
            const positionY = -position.y + 46
            for(let i = 0; i < this.themeTopYs.length;i++){
                if(this.currentIndex !== i && (positionY >= this.themeTopYs[parseInt(i)] && positionY < this.themeTopYs[parseInt(i) + 1])) {
                    this.currentIndex = i //防止频繁打印
                    console.log(i)
                    //当详情页滚动内容滚到对应内容联动导航高亮
                    this.$refs.navbar.currentIndex = this.currentIndex
                }
            }
            //是否显示回到顶部(不抽取)
            // this.isShow = -position.y > 300
            //是否显示回到顶部(抽取,从mixin.js中引用)
            this.scroll(position)

        } , 
        //加入购物车
        addToCart() {
            //1.获取购物车需要展示的信息
            const product = {}
            product.image = this.toImages[0]
            product.title = this.Goods.title
            product.desc = this.Goods.desc
            product.price = this.Goods.lowNowPrice
            //注意：iid一定要传过去因为点击购买要获取到对应的商品
            product.iid = this.iid
            //将商品添加到购物车里
            //可以修改,带最好不要在这里修改,最好在vuex中的mutation中修改
            //this.$store.cartList.push(product)

            //注意：在mutation里面调用是commit()
            // this.$store.commit('addCart',product)

            //注意：在actions里面调用是dispatch()
            //普通方法
            // this.$store.dispatch('addCart',product).then(res => {
            //     console.log(res)
            // })

            //映射之后的写法
            this.addCart(product).then(res => {
                this.$toast.show(res,1500)
            })
        }
    }

}
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 9;
    background-color: white;
}
.content{
    overflow: hidden;
    height: calc(100vh - 93px);
}
</style>