<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group name="hello" :appear="true">
            <h1 v-show="isShow" key="1">你好啊！</h1>
            <h1 v-show="!isShow" key="2">硅谷！</h1>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name:'test',
        data() {
            return {
                isShow:true,
            }
        },
        methods: {
            
        },
    }
</script>

<style scoped>
    h1{
        background-color: aqua;
        transition: 1s ;
    }

    /* .hello-enter-active,.hello-leave-active{
        transition: 1s ;
    } */


    /*进入的起点*/
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }

    /*进入的终点*/
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }
</style>