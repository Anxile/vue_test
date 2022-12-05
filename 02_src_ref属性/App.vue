<template>
    <dir>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDom">点我输出Dom元素</button>
        <!-- 自闭合形式，在脚手架环境下可用 -->
        <School ref="sch"/>
        
    </dir>
</template>

<script>
    import School from './components/School.vue'
    export default {
        name:'App',
        components: { School },
        data() {
            return {
                msg:'欢迎来学习！'
            }
        },
        methods: {
            showDom:function showDom() {
                console.log(this.$refs.title)       //真实Dom元素
                console.log(this.$refs.btn)         //真实Dom元素
                console.log(this.$refs.sch)         //school组件的实例对象
            }
        },
    }
</script>