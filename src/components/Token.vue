<template lang="html">
  <div class="token" :style="{top: token.position.y * 18 + 'px', left: token.position.x * 18 + 'px'}" draggable @dragstart="beginDrag" @dragend="finishDrag"></div>
</template>

<script>
export default {
  props: {
    token: Object
  },
  methods: {
    beginDrag: function(event) {
      event.dataTransfer.setData('id', this.token.key);
    },
    finishDrag: function (event) {
      let mapContainer = this.$parent.$el
      let token = this.$el

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
