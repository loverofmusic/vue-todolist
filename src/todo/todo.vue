<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下去要做什么？"
      @keyup.enter="addTodo"
    />
    <Item :todo="todo"></Item>
  </section>
</template>

<script>
import Item from './item.vue';

export default {
  components: {
    Item
  },
  data (){
    return {
      todo: {
        id: 0,
        content: 'this is todo',
        completed: false
      }
    }
  },
  methods: {
    addTodo() {}
  }
};
</script>

<style lang="stylus" scoped>
.real-app
    width 680px
    margin 0 auto
    box-shadow 0 0 5px #666
    // border-radius 8px;/* no */

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
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
    border-radius 0
</style>

