<template lang="html">
  <div class="token" :style="{top: top + 'px', left: left + 'px'}" draggable @dragend="finishDrag"></div>
</template>

<script>
export default {
  props: {
    top: Number,
    left: Number
  },
  methods: {
    finishDrag: function (event) {
      let mapContainer = this.$parent.$el
      let token = event.target

      let x = Math.floor((event.pageX - mapContainer.offsetLeft) / 18) * 18
      let y = Math.floor((event.pageY - mapContainer.offsetTop) / 18) * 18

      token.style.top = `${y}px`
      token.style.left = `${x}px`
    }
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
