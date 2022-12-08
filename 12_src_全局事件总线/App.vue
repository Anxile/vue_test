<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School/>
        <Student/>
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
            }
        }
    }
</script>

<style scpoed>
    .app{
        background-color: gray;
        padding: 10px;
    }
</style>