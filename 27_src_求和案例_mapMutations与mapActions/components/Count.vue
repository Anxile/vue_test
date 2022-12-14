<template>
    <div>
		<h1>当前求和为：{{sum}}</h1>
		<h3>当前求和乘10倍为：{{$store.getters.bigSum}}</h3>
		<h3>我在{{$store.state.school}}，学习{{$store.state.subject}}</h3>
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
			//借助mapState生成计算属性，从state中读取属性。（对象写法）
			// ...mapState({sum:'sum',school:'school',subject:'subject'}),

			//数组写法
			...mapState(['sum','school','subject']),

			/* ************************************************************************** */

			//借助mapGetter生成计算属性，从getters中读取属性。（对象写法）
			// ...mapGetters({bigSum:'bigSum'})
			//数组写法
			...mapGetters(['bigSum'])
		},
		methods: {
			//程序员手写
			/* increment(){
				this.$store.commit('JIA',this.n)
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			}, */


			//借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
			...mapMutations({increment:'JIA',decrement:'JIAN'}),


			//数组写法
			// ...mapMutations(['JIA','JIAN']),


			/* ************************************************** */
			/* incrementOdd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			} */


			//对象写法
			...mapActions({increment:'jiaOdd',incrementWait:'jiaWait'})


			//数组写法
			// ...mapActions(['jiaOdd','jiaWait'])
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