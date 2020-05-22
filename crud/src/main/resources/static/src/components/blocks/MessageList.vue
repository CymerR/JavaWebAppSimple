<template lang="html">

  <div>
    <MessageItem v-for="item in items" :key="item.id" :item="item"  />
  </div>

</template>

<script>

  import axios from 'axios'
  import MessageItem from './MessageItem.vue'
  export default {
    props: [],
    data() {
      return {
        items: []
      }
    },
    created() {
      this._created()
    },
    components: {
      MessageItem
    },
    methods: {
      _created() {
        axios.get('/messages').then(data => (this.items = data.data))
      }
    }
  }

</script>

<style lang="scss" scoped>

</style>
