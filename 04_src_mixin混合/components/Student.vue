<template>
    <div >
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    //引入一个局部混合
    import {mixin,mixin1} from '../hunhe'
    export default {
        name:'Student',
        data() {
            return {
                name:'张三',
                sex:'男',
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