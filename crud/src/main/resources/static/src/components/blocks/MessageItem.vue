<template lang="html">

  <div>
    <div class="row">
      <div class="message-item"><em>({{ item.id }})</em> {{item.text}}</div>
      <div class="buttons">
        <div class="my-2">
        <v-btn small>Normal</v-btn>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    props: ['item']
  }

</script>

<style lang="scss" scoped>

  .row {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-around;
    .message-item{
      -webkit-flex: 2;
      -ms-flex: 2;
      flex: 2;
    }
    .buttons {
      min-width: 7vw;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      justify-content: space-around;
      padding: 0 15px;
    }
  }

</style>
