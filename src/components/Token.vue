<template lang="html">
  <div class="token" :style="{top: token.position.y * 18 + 'px', left: token.position.x * 18 + 'px'}" draggable @dragstart="beginDrag" @dragend="finishDrag"></div>
</template>

<script>
export default {
  props: {
    token: Object
  },
  methods: {
    beginDrag: function (event) {
      event.dataTransfer.setData('id', this.token.key)
    },
    finishDrag: function (event) {
      let mapContainer = this.$parent.$el
      let token = this.$el

      this.token.position.x = Math.floor((event.pageX - mapContainer.offsetLeft) / 18)
      this.token.position.y = Math.floor((event.pageY - mapContainer.offsetTop) / 18)

      console.log(event.screenX, event.pageX, event.clientX, event.offsetX)
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
