<template>
  <div id="app">
    <Container></Container>
  </div>
</template>

<script>
import Container from "./components/Container"

export default {
  name: 'App',
  components: {
    Container
  }
}
</script>

<style lang="less">
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
