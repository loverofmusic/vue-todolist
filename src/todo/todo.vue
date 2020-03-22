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
    <Tab :filter="filter" :todoLists="todos" @toggle="toggleFilter"></Tab>
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
    }
  }
};
</script>

<style lang="stylus" scoped>
.real-app
    width 680px
    margin 0 auto
    box-shadow 0 0 5px #666
    // border-radius 8px;/* no */
    // box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
.add-input
    position relative
    margin 0
    width 100%
    font-size 40px
    font-family inherit
    font-weight inherit
    // line-height 1.4em
    border none
    outline none
    color inherit
    box-sizing border-box
    font-smoothing antialiased
    padding 30px 16px 30px 80px
    // height 100px
    // line-height 100px
    // padding-left 80px
    border none
    border-radius 0
</style>
