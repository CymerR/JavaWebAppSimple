<template lang="html">
  <div>
    <MessageItem v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import MessageItem from './MessageItem.vue'
export default {
  props: ['items'],
  components: {
    MessageItem
  }

}
</script>

<style lang="scss" scoped>

</style>
