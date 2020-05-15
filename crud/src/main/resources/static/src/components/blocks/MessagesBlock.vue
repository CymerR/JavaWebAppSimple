<template lang="html">
  <div class="__block">
      <input type="text" placeholder="Add some todo!" v-model='message_text'>
      <button @click="addMethod">Add!</button>
    <MessageList :items="items" />
  </div>
</template>

<script>
import MessageList from './MessageList.vue'
import axios from 'axios'

export default {
  data(){
    return {
        items: [
          {
            id: 0, text: 'Hello'
          },
          {
            id: 1, text: 'Undead'
          },
          {
            id: 2, text: 'Miner'
          },
          {
            id: 3, text: 'Lul'
          }
        ],
        message_text: undefined
    }
  },
  created() {
    axios.get('/messages')
    .then(data => this.items = data.data)

  },
  components: {
    MessageList
  },
  methods: {
    addMethod() {
      axios.post('/messages',
      {
        id: null,
        text: this.message_text
      })
      .then(response => console.log(response.status))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
