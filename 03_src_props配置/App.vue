<template>
    <dir>
        <Student name="李四" sex="女" :age="19"/>     
    </dir>
</template>

<script>
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components: { Student }
    }
</script>