<template>
    <div class="todo-footer" v-if="total">
        <label>
          <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
          <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
          <span>已完成{{this.todos.filter(todo => todo.done).length}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:'MyFooter',
        props:['todos','checkAllTodo','clearAllTodo'],
        data() {
            return {
                completed:0,
            }
        },
        methods: {
            checkAll(e){
                this.checkAllTodo(e.target.checked)
            },
            clearAll(){
                // this.clearAllTodo()


                //绑定事件实现
                this.$emit('clearAllTodo')
            }
        },
        computed: {
            /* isAll(){
                return this.total === this.doneTotal && this.total > 0
            }, */
            isAll:{
                get(){
                    return this.total === this.doneTotal && this.total > 0
                } ,
                set(value){
                    // this.checkAllTodo(value)
                    
                    
                    //绑定事件实现
                    this.$emit('checkAllTodo', value)
                }
            },
            total(){
                return this.todos.length
            },
            doneTotal(){
                /* let count = 0
                this.todos.forEach(element => {
                    if(element.done) count++
                });
                return count */
                return this.todos.reduce((pre,todo)=>{
                    console.log('@',pre)
                    return pre + (todo.done ? 1 : 0)
                }, 0)

                //弹幕里说好像还可以用filter实现！！！？？？？？？？？？？
            }
        },
        //会报错提示"TypeError: Cannot read properties of undefined (reading 'todos')"
        filters:{
            delItem(){
                return this.todos.filter(todo=>todo.done).length
            }
        }
    }
</script>

<style>
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>