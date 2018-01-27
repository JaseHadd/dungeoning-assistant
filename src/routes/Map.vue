<template>
  <div id="map" ref="map">
    <token v-for="token in tokens" :key="token.key" :token="token" />
  </div>
</template>

<script>
import token from '../components/Token.vue'

export default {
  name: 'Map',
  data: () => {
    return {
      tokens: [
        { key: 1, position: { x: 2, y: 8 } },
        { key: 2, position: { x: 3, y: 9 } }
      ]
    }
  },
  components: {
    token
  }
}
</script>

<style>
#map {
  height: 415px;
  width: 415px;
  position: relative;
  background-image: url(/dist/images/5a6bccb3-dcf08151.jpg);
}
</style>
