<template>
  <div>
    <button @click="getStudent">获取学生信息</button>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name:'App',
        methods: {
          getStudent(){
            //向8080代理服务器请求数据（不存在跨域问题）
            axios.get('http://localhost:8080/students').then(
              response => {
                console.log('请求成功了',response.data)
              },
              error => {
                console.log('请求失败了',error.message)
              }
            )
          }
        },
     }
</script>

