<template>
    <dir class="demo">
        <School/>
        <hr>
        <Student/>
    </dir>
</template>

<script>
    import School from './components/School'
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components: { Student,School }
    }
</script>

<style lang="less">
    .demo{
        background-color: pink;
        .qwe{
            font-size: 40px;
        }
    }
</style>