<template>
  <div id="app">
    <div id="cover">
      <Header />
      <Todo></Todo>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./todo/header.vue";
import Footer from "./todo/footer.jsx";
import Todo from "./todo/todo.vue";

export default {
  // name: 'App',
  components: {
    Header,
    Footer,
    Todo
  }
};
</script>

<style lang="stylus" scoped>
#cover
    display flex
    flex-direction column
    align-items: center;
    height 100vh

#loading
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    background-color rgba(255,255,255,.3)
    z-index 99
    display flex
    align-items center
    justify-content center

</style>
