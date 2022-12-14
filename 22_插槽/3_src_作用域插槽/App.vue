<template>
  <div class="container">
  	<Category title="游戏">
      <template scope="aaa" slot="hahaha">
        <ul>
			    <li v-for="(g,index) in aaa.games" :key="index">{{g}}</li>
		    </ul>
        <h4>{{aaa.msg}}</h4>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="aaa">
        <ol>
			    <li v-for="(g,index) in aaa.games" :key="index">{{g}}</li>
		    </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="aaa" slot="hahaha">
        <h4 v-for="(g,index) in aaa.games" :key="index">{{g}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category'
  export default {
    name: 'App',
    components:{ Category },
    
  }
</script>

<style scoped>
  .container{
    display: flex;
    justify-content: space-around;
  }
  h4{
    text-align: center;
  }
</style>