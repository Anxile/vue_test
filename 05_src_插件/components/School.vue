<template>
    <div >
        <h2>学校名称：{{name | mySlice}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="test">点我测试Vue原型上新添加的hello方法</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'硅谷guigu',
                address:'北平',
            }
        },
        methods:{
            test(){
                this.demo()
            }
        }
    }
</script>