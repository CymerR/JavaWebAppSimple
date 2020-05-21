<template lang="html">

  <v-row class="root">
    <div class="content__wrapper"><span>[{{item.id}}]</span>
      <div class="text">{{item.text}}</div>
    </div>
    <div class="nav">
      <v-btn icon text @click="">
        <v-icon>mdi-account-edit</v-icon>
      </v-btn>
      <v-btn icon text @click="deleteItem()">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </div>
  </v-row>

</template>

<script>
    import axios from 'axios'
  export default {
    props: ['item'],
    methods: {
      deleteItem() {
        console.log('delete')
        axios.delete('./messages', {id: this.item.id}).then(response => {
          console.log(response)
        })
      }
    }
  }

</script>

<style lang="scss" scoped>

  span,
  .text,
  .nav {
    display: inline;
  }
  .root {
    display: flex;
    justify-content: space-between;
  }

</style>
