<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么？"
      @keyup.enter="addTodo"
    />
    <Item :todo="t" v-for="t in filteredTodos" :key="t.id" @del="deleteTodo" />
    <Tab
      :filter="filter"
      :todoLists="todos"
      @toggle="toggleFilter"
      @clear="clearAllCompleted"
    ></Tab>
  </section>
</template>

<script>
import Item from "./item.vue";
import Tab from "./tab.vue";
let id = 0;
export default {
  components: {
    Item,
    Tab
  },
  data() {
    return {
      filter: "all",
      todos: []
    };
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      const completed = this.filter === "completed";
      return this.todos.filter(t => t.completed === completed);
    }
  },
  methods: {
    addTodo(e) {
      // console.log(e.target.value)
      if (e.target.value) {
        this.todos.unshift({
          id: id++,
          content: e.target.value.trim(),
          completed: false
        });
        e.target.value = "";
      }
    },
    deleteTodo(id) {
      // alert(id)
      this.todos.splice(
        this.todos.findIndex(t => t.id === id),
        1
      );
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearAllCompleted() {
      // console.log(this.todos);
      this.todos = this.todos.filter(t => !t.completed);
    }
  }
};
</script>

<style lang="stylus" scoped>
.real-app
    flex 1
    width 680px
.add-input
    width 100%
    font-size 40px
    outline none
    box-sizing border-box
    padding 30px 16px 30px 100px
    border 0
    margin 0
    border-radius 0
    border-bottom 1px solid #ddd;/* no */  
</style>
