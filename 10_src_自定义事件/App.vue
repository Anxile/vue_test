<template>
    <div class="app">
        <h1>{{msg}},{{studentName}}!</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用@或v-on) -->
        <Student v-on:guigu.once="getStudentName" @demo="m1"/>
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用ref) -->
        <Student ref="student"/>
    </div>
</template>

<script>
    import School from './components/School'
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components: { Student,School },
        data() {
            return {
                msg:'你好啊',
                studentName:''
            }
        },
        methods: {
            getSchoolName(name){
                console.log('接收到了',name)
            },
            getStudentName(name,...params){
                console.log('getStudentName被调用了',name,params)
                this.studentName = name
            },
            m1(){
                console.log('demo事件被触发了')
            }
        },
        mounted() {
            // this.$refs.student.$on('guigu',this.getStudentName)  //绑定自定义事件
            this.$refs.student.$once('guigu',this.getStudentName)            
        },
    }
</script>

<style scpoed>
    .app{
        background-color: gray;
        padding: 10px;
    }
</style>