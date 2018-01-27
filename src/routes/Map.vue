<template>
  <div id="map">
    <token v-for="token in tokens" @onDragEnd="finishDrag" :top="token.position.y * 18" :left="token.position.x * 18"/>
  </div>
</template>

<script>
import token from '../components/Token.vue'

export default {
  name: 'Map',
  methods: {
    finishDrag: event => {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  },
  data: () => {
    return {
      tokens: [
        { position: { x: 2, y: 8 } },
        { position: { x: 3, y: 9 } }
      ]
    };
  },
  components: {
    token
  }
}
</script>

<style>
#map {
  height: 415;
  width: 415;
  position: relative;
  background-image: url(5a6bccb3-dcf08151.jpg);
}
</style>
