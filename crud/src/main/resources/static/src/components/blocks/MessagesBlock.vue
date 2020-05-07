<template lang="html">
  <div class="">
      <input type="text" name="" value="">
      <button type="button" name="button">Save!</button>
      <MessageList :messages="data" />
  </div>
</template>

<script>
import MessageList from './MessageList.vue'
export default {
  props: ['data'],
  components: {
    MessageList
  }
}
</script>

<style lang="scss" scoped>
</style>
