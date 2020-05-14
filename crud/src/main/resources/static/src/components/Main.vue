<template lang="html">
  <div class="wrapper">
    <MessagesBlock />
  </div>
</template>

<script lang="js">
import MessagesBlock from './blocks/MessagesBlock.vue'
export default {
  data() {
    return {

    }
  },
  computed: {

  },
  components: {
    MessagesBlock
  }
}
</script>
<style lang="scss" scoped>
  .wrapper {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
  }
</style>
