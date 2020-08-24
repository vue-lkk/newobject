//混入(返回顶部) 
import BackTop from '@/components/content/backTop/BackTop'

export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShow:false
        }
    },
    methods: {
        //注意：Datil.vue里面methods的 this.isShow = -position.y > 300 可抽取,但不会合并,只会替换
        //但是周期函数的可以,是可以合并的
        backClick() {
            this.$refs.scroll.scroll.scrollTo(0,0,500)
        },
        scroll(position) {
            //console.log(position.y)1.判断 返回顶部是否显示
            this.isShow = -position.y > 1000
        },
    }
}