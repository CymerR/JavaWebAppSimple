<template lang="html">
  <div class="block">
      <div class="editor-block">
        <input type="text" name="" value="">
        <v-btn class="" tile large color="teal" icon>
          <v-icon>mdi-vuetify</v-icon>
        </v-btn>
      </div>

      <MessageList :messages="messages" />
  </div>
</template>

<script>
import MessageList from './MessageList.vue'
export default {
  props: [],
  data() {
    return {
        messages: [],
        enpoint: 'https://jsonplaceholder.typicode.com/todos'
    }
  },
  computed: {

  },
  components: {
    MessageList
  },
  methods: {
    create() {
      this.$http.get('/messages').then(result => {
        result.json().then(body => this.messages = body)
      })
    }
  },
  created(){
    this.create()
  }
}
</script>

<style lang="scss" scoped>
.block {
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
  .editor-block {
    -ms-align-self: center;
    align-self: center;
  }
</style>
