<template lang="html">
  <div class="block">
      <input type="text" name="" value="">
      <v-btn class="" tile large color="teal" icon>
      <v-icon>mdi-vuetify</v-icon>
    </v-btn>

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
      this.$http.get(this.enpoint).then(result => {
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

</style>
