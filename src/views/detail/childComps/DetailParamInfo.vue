<template>
    <div class="param-info" v-if="Object.keys(paramInfo).lenght !== 0">
        <table v-for="(table,index) in paramInfo.sizea" :key="index" 
        class="info-size">
            <tr v-for="(tr,index) in table" :key="index">
                <td v-for="(td,index) in tr" :key="index">{{td}}</td>
            </tr>
        </table>
        <table class="info-param">
            <tr v-for="(info,index) in paramInfo.infos" :key="index">
                <td>{{info.key}}</td>
                <td>{{info.value}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name:"DetailParamInfo",
    props:{
        paramInfo: {
            type:Object,
            default() {
                return {}
            }
        }
    }
}
</script>