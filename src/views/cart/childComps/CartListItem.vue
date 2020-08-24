<template>
    <div class="cart-list-item">
        <div class="item-selector">
            <CheckButton :isChecked='product.checked' @click.native='checkClick'></CheckButton>
        </div>
        <div class="item-img">
            <img :src="product.image" alt="">
        </div>
        <div class="item-info">
            <div class="item-title">{{product.title}}</div>
            <div class="item-desc">{{product.desc}}</div>
            <div class="info-bottom">
                <div class="item-price left">￥{{product.price}}</div>
                <div class="item-count right">x{{product.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'

export default {
    name:'cartListItem',
    components:{
        CheckButton
    },
    props: {
        product: {
            type:Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        checkClick() {
            this.product.checked = !this.product.checked
        }
    }
}
</script>

<style scoped>
.cart-list-item{
    padding: 8px 8px 8px 16px;
    display: flex;
    flex: 1;
    height: 120px;
    box-shadow: 0px 1px 2px rgba(0,0,0,0.3);
    
}
.item-selector{
    width: 20px;

}
.item-img{
    height: 100%;
}
.item-info{
    overflow: hidden;
    flex: 1;
    padding: 0px 5px;
    
    
    
}
.item-title{
    font-size: 16px;
    font-weight: bold;
}
.item-desc {
    font-size: 13px;
}
.item-title,.item-desc {
    padding: 0px 8px 15px 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
img{
    width: 120px;
    height: 90%;
    border-radius: 5px;
    
}
.info-bottom{
    display: flex;
    flex: 1;
    margin-top: 20px;
    justify-content: space-between;
    
}
.left {
    font-weight: bold;
    color: red;
}

</style>