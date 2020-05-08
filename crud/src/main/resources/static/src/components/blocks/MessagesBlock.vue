<template lang="html">
  <div class="block">
      <input type="text" name="" value="">
      <v-btn class="" tile large color="teal" icon>
      <v-icon>mdi-vuetify</v-icon>
    </v-btn>

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
