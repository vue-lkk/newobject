<template>
    <div>
        <div v-for="(item,index) in tabItems"
            :key="index"
                :class="{active:index === currentIndex}"
                    @click="btnClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'tabControl',
        props:{
            tabItems:{
                type:Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                currentIndex:0
            }
        },
        methods: {
            btnClick(index) {
                this.currentIndex = index
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>