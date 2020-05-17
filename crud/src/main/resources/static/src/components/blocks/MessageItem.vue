<template lang="html">

  <v-row class="root">
    <div class="content__wrapper"><span>[{{item.id}}]</span>
      <div class="text">{{item.text}}</div>
    </div>
    <div class="nav">
      <v-btn icon text>
        <v-icon>mdi-account-edit</v-icon>
      </v-btn>
      <v-btn icon text>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </div>
  </v-row>

</template>

<script>

  export default {
    props: ['item']
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
