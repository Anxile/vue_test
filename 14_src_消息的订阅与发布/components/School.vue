<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
    export default {
        name:'School',
        data() {
            return {
                name:'硅谷guigu',
                address:'北平',
            }
        },
        mounted(){
            /* console.log('School',this.$bus)
            this.$bus.$on('hello', (data)=>{
                console.log('我是School组件，收到了数据',data)
            }) */



            //订阅消息
            this.pubId = pubsub.subscribe('hello',(msgName,data) => {
                console.log('有人发布了hello消息，消息订阅成功，hello消息的回调被执行',msgName,data)
            })


        },
        beforeDestroy() {
            // this.$bus.$off('hello')



            //取消订阅
            pubsub.unsubscribe(this.pubId)
        },
    }
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>