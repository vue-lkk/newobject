<template>
    <div class="check-button" :class="{check:isChecked}">
    </div>  
</template>

<script> 
export default {
    name:'CheckButton', 
    props:{
        isChecked: {
            type:Boolean,
            default:true
        }
    }
}
</script>

<style scoped>
.check-button {
    width: 20px;
    height: 20px;
    margin-top: 40px;
    margin-left: -8px;
    border-radius: 50%;
    border: 2px solid rgba(0,0,0,0.1);
    
}
span{
    width: 20px;
    height: 20px;
    
    
}
.check{
    background-color: red;
}
</style>