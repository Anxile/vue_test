<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbind">解绑guigu事件</button>
        <button @click="death">销毁当前Student组件的实例</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'张三',
                sex:'男',
            }
        },
        methods: {
            sendStudentName(){
                //触发Student组件实例身上的guigu事件
                this.$emit('guigu',this.name,1212,'哈哈哈哈')
                // this.$emit('demo')
            },
            unbind(){
                this.$off('guigu')      //解绑 一个 自定义事件
                // this.$off(['guigu','demo'])     //解绑 多个 自定义事件
                // this.$off()     //解绑所有自定义事件
            },
            death(){
                this.$destroy()     //销毁了当前的Student组件实例,销毁后所有Student实例的自定义事件全部失效
            }
        },
    }
</script>

<style lang="less">
    .student{
        background-color: pink;
        padding: 10px;
        margin-top: 30px;
    }
</style>