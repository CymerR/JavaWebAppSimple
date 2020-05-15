<template lang="html">
  <div>
    <span>[{{item.id}}]</span>
    <div class="text">{{item.text}}</div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>
  span , .text{
    display: inline;
  }
</style>
