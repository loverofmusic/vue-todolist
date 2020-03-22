<template>
  <div :class="['todo-item', todo.completed? 'completed' : '']">
    <input type="checkbox"
    class="toggle"
    v-model="todo.completed"
    >
    <label for="">{{todo.content}}</label>
    <button class="destroy" @click="clickDelete(todo.id)"></button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    clickDelete(id){
      this.$emit('del', id)
    }
  }
};
</script>

<style lang="stylus" scoped>
.todo-item
        position relative
        background-color #fff
        font-size 38px
        border-top 1px solid rgba(0,0,0,0.06);/* no */
        // &:hover
        .destroy:after
          content 'x' 
          font-size 60px

        label
            white-space pre-line
            word-break break-all
            // padding 16px 16px 16px 36px
            height 90px
            line-height 90px
            padding-left 80px
            display block
            transition color 0.4s
        &.completed
            label
                color #d9d9d9
                text-decoration line-through
    .toggle
        text-align center
        width 50px
        height 60px
        position absolute
        top 0
        bottom 0
        margin auto 10px
        border none
        appearance none
        outline none
        &:after
            content url('../assets/images/unChecked.svg')

        &:checked:after
            content url('../assets/images/checked.svg')
    .destroy
        position absolute
        top 0
        right 10px
        bottom 0
        // width 40px
        // height 40px
        margin auto 0
        font-size 30px
        color #cc9a9a
        margin-bottom 11px
        transition color 0.2s ease-out
        background-color transparent
        appearance none
        border-width 0
        cursor pointer
        outline none
</style>