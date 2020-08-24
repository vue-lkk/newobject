//流行，新款，精选 组件
<template>
    <div class="tab-control">
      <div v-for="(item,index) in tabitems"  :key="index" 
      class="tab-item" 
      :class="{active: index === currentIndex}"
      @click="btnClick(index)"
      >
          <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        tabitems:{
            type:Array,
            default() {
              return []
        }
    }
  },
  data() {
      return{
          currentIndex:0
      }
  },
  methods:{
      btnClick(index) {
          this.currentIndex = index
          this.$emit('tabClick',index)
      }
  }
        
}
</script>

<style scoped>
.tab-control{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 5px 0px;
    text-align: center;
    font-weight: bold;
    background-color:white ;
    font-size: 16px;
}
.tab-item {
    flex: 1;
    
}
.active {
    color: var(--color-text);
    
}
.active span {
    border-bottom: 2px solid var(--color-text);
    padding: 5px;
}
</style>