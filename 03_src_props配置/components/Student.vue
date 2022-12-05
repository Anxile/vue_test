<template>
    <div >
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{myAge+1}}</h2>
        <button @click="updateAge">尝试修改props接收到的数据</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        methods: {
            updateAge(){
                this.myAge++
            }
        },
        data() {
            return {
                msg:'我是学生倒贴200',
                // name:'张三',
                // sex:'男',
                // age:18
                myAge:this.age,
            }
        },
        props:['name','age','sex']   //简单接收

        //接收的同时对数据进行限制
        // props:{                     //类型不匹配会在控制台发出警告
        //     name:String,
        //     age:Number,
        //     sex:String
        // }

        //接收的同时对数据：进行类型限制+默认值的设定+必要性的声明
        // props:{
        //     name:{
        //         type:String,
        //         required:true
        //     },
        //     age:{
        //         type:Number,
        //         default:99      //默认值
        //     },
        //     sex:{
        //         type:String,
        //         required:true
        //     }
        // }
    }
</script>

<style>
    .school{
        background-color: gray;
    }
</style>