<template lang="html">
  <div>
    <MessageItem v-for="message in messages" :key="message.id" :item="message" />
  </div>
</template>

<script>
import MessageItem from './MessageItem.vue'
export default {
  props: ['messages'],
  data(){
    return {

    }
  },
  components: {
    MessageItem,
  }

}
</script>

<style lang="scss" scoped>
</style>
