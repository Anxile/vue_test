<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition :appear="true">
            <h1 v-show="isShow" class="com">你好啊！</h1>
        </transition>
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
    }

    .v-enter-active{
        animation: guigu 1s;
    }

    .v-leave-active{
        animation: guigu 1s reverse;
    }

    @keyframes guigu {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>