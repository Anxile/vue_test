<template>
    <ul class="todo-main">
        <transition-group name="todo" appear>
            <MyItem
                v-for="(todoObj) in todos" 
                :key="todoObj.id" 
                :todo="todoObj" 
                :checkTodo="checkTodo"
                :deleteItem="deleteItem"
            />
        </transition-group>
    </ul>
</template>

<script>
    import MyItem from './MyItem.vue'
    export default {
        name:'MyList',
        components:{ MyItem },
        props:['todos','checkTodo','deleteItem']
    }
</script>

<style scoped>
    /*main*/
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }


    
    .todo-enter-active,.todo-leave-active{
        transition: 1s ;
    }


    /*进入的起点*/
    .todo-enter,.todo-leave-to{
        transform: translateX(100%);
    }

    /*进入的终点*/
    .todo-enter-to,.todo-leave{
        transform: translateX(0);
    }
</style>