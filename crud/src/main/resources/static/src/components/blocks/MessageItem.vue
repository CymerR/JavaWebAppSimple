<template lang="html">
  <div>
    <div class="row">
       <em>{{ item.id }}</em>  {{item.text}}
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style lang="css" >
.row {
  font-size: 36px;
}
</style>
