<template>
    <div >
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    //引入局部混合
    import {mixin,mixin1} from '../hunhe'
    export default {
        name:'School',
        data() {
            return {
                name:'硅谷',
                address:'北平',
            }
        },
        mixins:[mixin,mixin1]
    }
</script>

<style>
    .school{
        background-color: gray;
    }
</style>