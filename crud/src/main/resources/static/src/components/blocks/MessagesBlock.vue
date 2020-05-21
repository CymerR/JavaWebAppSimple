<template lang="html">

  <div class="__block m20">
    <v-row>
      <input type="text" placeholder="Add some todo!" v-model='message_text'>
      <v-btn @click="addMethod" rounded outlined class="m20" color="red">Add!</v-btn>
    </v-row>
    <MessageList :items="items" />
  </div>

</template>

<script>

  import MessageList from './MessageList.vue'
  import axios from 'axios'

  export default {
    data() {
      return {
        items: [],
        message_text: undefined
      }
    },
    created() {
      this._created()
    },
    components: {
      MessageList
    },
    methods: {
      addMethod() {
        axios.post('/messages', { text: this.message_text }).then(el => console.log(el))
        this._created()
      },
      _created() {
        axios.get('/messages').then(data => (this.items = data.data))
      }
    }
  }

</script>

<style lang="scss" scoped>

</style>
