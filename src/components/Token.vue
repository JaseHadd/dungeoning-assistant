<template lang="html">
  <span class="token" :style="{top: top + 'px', left: left + 'px'}"></span>
</template>

<script>
export default {
  props: {
    top: Number,
    left: Number
  }
}
</script>

<style lang="scss" scoped>
.token {
  height: 18px;
  width: 18px;
  position: absolute;
  border-radius: 9px;
  background-color: #00b;
}
</style>
