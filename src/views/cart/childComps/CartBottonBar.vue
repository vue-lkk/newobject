<template>
    <div class="bottom-bar">
        <div>
            <CheckButton class="check-button" 
            :isChecked='isSelectAll' @click.native="checkClick">
            </CheckButton>
            <span>全选</span>
        </div>
        <div class="total">
            合计:￥{{totalPrice}}
        </div>
        <div class="calculate" @click="calcClick">
            去计算({{checkLength}})
        </div>
    </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'

export default {
    name:'CartBottonBar',
    components:{
        CheckButton
    },
    computed:{
        totalPrice() {
            return   this.$store.state.cartList.filter(item => {
                return item.checked
            }).reduce((preValue, item) => {
                return preValue + item.price * item.count
            },0)
        },
        checkLength() {
           return this.$store.state.cartList.filter(item => item.checked).length
        },
        isSelectAll() {
        //高阶函数 filtere() 判断全选按钮
        //return !(this.$store.state.cartList.filter(item => !item.checked).length) 

        //高阶函数 find() 判断全选按钮
        if(this.$store.state.cartList.length === 0)  {
            return false
        }
         return !this.$store.state.cartList.find(item => !item.checked)

         ////普通遍历判断全选按钮
        //  for(let item of this.$store.state.cartList) {
        //      if(!item.checked) {
        //          return false
        //      }
        //  }
        //  return true
        }
    },
    methods:{
        checkClick() {
            if(this.isSelectAll) {//全部选中
                this.$store.state.cartList.forEach(item => item.checked = false);
            }else{//有部分或全部不选中
                this.$store.state.cartList.forEach(item => item.checked = true);
            }

            
        },
        calcClick() {
            if (!this.isSelectAll) { //这里使用了toast插件的show()方法
                this.$toast.show('请选择购买的商品!',2000)
            }else{
                this.$toast.show('稍等...',500)
            }
        }
    }
}
</script>

<style scoped>
.bottom-bar {
    height: 40px;
    background: orange;
    position: relative;
    z-index: 9;
   
}
.check-button{
    position: absolute;
    top:-33px;
    left: 14px;
}
span{
    position: absolute;
    left: 33px;
    top:12px;
    font-weight: bold;
}
.total{
    position: absolute;
    left:130px;
    top:12px;
    
}
.calculate{
    position: absolute;
    right: 0px;
    top:0px;
    width: 120x;
    height: 40px;
    line-height: 40px;
    background: red;
    padding: 0px 10px;
    color: white;
    font-weight: bold;
}
</style>