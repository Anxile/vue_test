<template>
    <div>
		<h1>当前求和为：{{sum}}</h1>
		<h3>当前求和乘10倍为：{{$store.getters.bigSum}}</h3>
		<h3>我在{{$store.state.school}}，学习{{$store.state.subject}}</h3>
		<h3 style="color:red">下方组件的总人数是：{{personList.length}}</h3>
		<select v-model.number="n">
			<option :value="1">1</option>
			<option :value="2">2</option>
			<option :value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button> 
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
	import { mapState,mapGetters,mapMutations, mapActions } from 'vuex'
    export default {
        name:'Count',
		data() {
			return {
				n:1,
			}
		},
		computed: {
			//数组写法
			...mapState(['sum','school','subject','personList']),

			/* ************************************************************************** */

			//数组写法
			...mapGetters(['bigSum'])
		},
		methods: {
			//借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
			...mapMutations({increment:'JIA',decrement:'JIAN'}),

			//对象写法
			...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

		},
		mounted() {
			const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
		},
	}
</script>

<style scoped>
	button{
		margin-left: 5px;
	}
</style>