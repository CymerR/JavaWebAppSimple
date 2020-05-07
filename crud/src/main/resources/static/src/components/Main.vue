<template lang="html">
  <div class="">
    <MessagesBlock :data="messageslist" />
  </div>
</template>

<script lang="js">
import MessagesBlock from './blocks/MessagesBlock.vue'
export default {
  data() {
    return {
      message: 'Привет, Vue!',
      messageslist: [
        {id: 0, text: "fuck fuck21"},
        {id: 1, text: "yeh"},
        {id: 2, text: "eboi"},
        {id: 3, text: "Git "},
      ]
    }
  },
  components: {
    MessagesBlock
  }
}
</script>
<style lang="scss">

</style>
