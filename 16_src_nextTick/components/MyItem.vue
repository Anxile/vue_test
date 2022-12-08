<template>
    <li>
        <label>
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <input 
        v-show="todo.isEdit" 
        type="text" 
        :value="todo.title" 
        @blur="handleBlur(todo,$event)"
        ref="inputTitle"
        >
        </label>
        <button class="btn btn-danger" @click="del(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'MyItem',
        //声明接收todo对象
        props:['todo',/* 'checkTodo','deleteTodo' */],
        methods: {
            //勾选or取消勾选
            handleCheck(id){
                //通知App组件将对应的todo对象的done值取反
                // this.checkTodo(id)

                //全局事件总线
                // this.$bus.$emit('checkTodo',id)


                //消息发布
                pubsub.publish('checkTodo',id)
            },
            //删除
            del(id){
                if(confirm('确定删除吗?'))
                // this.deleteTodo(id)

                //全局事件总线
                // this.$bus.$emit('deleteTodo',id)


                //消息发布
                pubsub.publish('deleteTodo',id)
            },

            //编辑
            handleEdit(todo){
                if (todo.hasOwnProperty('isEdit')) {
                    todo.isEdit = true
                } else {
                    console.log('没有isEdit属性')
                    this.$set(todo,'isEdit',true)
                }


                //在下一次Dom更新结束后执行操作
                this.$nextTick(function () {
                    this.$refs.inputTitle.focus()
                })
            },
            //失去焦点回调
            handleBlur(todo,e){
                todo.isEdit = false
                if(!e.target.value.trim()) return alert('输入不能为空！')
                this.$bus.$emit('updateTodo',todo.id,e.target.value)
            }
        },
    }
</script>

<style scoped>

    li:hover{
        background-color: darkgoldenrod;
    }
    li:hover button{
        display: block;
    }

    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
</style>