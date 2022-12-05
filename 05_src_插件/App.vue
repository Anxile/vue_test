<template>
    <dir>
        <Student/>
        <hr>
        <School/>
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