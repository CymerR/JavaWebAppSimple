<template lang="html">
  <div class="block">
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
.block {
  border: 2px solid black;
  border-radius: 20px;
}
</style>
