<template lang="html">
  <div>
    <div class="row">
       <em>({{ item.id }})</em>  {{item.title}}
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
em {
  font-size: 16px;
}
</style>
